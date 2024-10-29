import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-signature") as string;

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("Stripe webhook secret is not set.");
    return new Response("Server error", { status: 500 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("Invalid Stripe signature:", error);
    return new Response("Erreur webhook stripe", { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  switch (event.type) {
    case "checkout.session.completed":
      await handleCheckoutSessionCompleted(session);
      break;
    case "invoice.payment_succeeded":
      await handleInvoicePaymentSucceeded(session);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new Response(null, { status: 200 });
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  try {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    const customerId = String(session.customer);

    const user = await prisma.user.findUnique({
      where: { stripeCustomerId: customerId },
    });
    if (!user) return new Response("Utilisateur inexistant", { status: 404 });

    await prisma.subscription.create({
      data: {
        stripeSubscriptionId: subscription.id,
        userId: user.id,
        currentPeriodStart: subscription.current_period_start,
        currentPeriodEnd: subscription.current_period_end,
        status: subscription.status,
        planId: subscription.items.data[0].plan.id,
        interval: String(subscription.items.data[0].plan.interval),
      },
    });
  } catch (error) {
    console.error("Error handling checkout session completed:", error);
  }
}

async function handleInvoicePaymentSucceeded(session: Stripe.Checkout.Session) {
  try {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    await prisma.subscription.update({
      where: { stripeSubscriptionId: subscription.id },
      data: {
        planId: subscription.items.data[0].plan.id,
        currentPeriodStart: subscription.current_period_start,
        currentPeriodEnd: subscription.current_period_end,
        status: subscription.status,
      },
    });
  } catch (error) {
    console.error("Error handling invoice payment succeeded:", error);
  }
}