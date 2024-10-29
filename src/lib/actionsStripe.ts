"use server";
import { getStripeSession, stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { getUser } from "./actionsUsers";
import prisma from "./prisma";

export const getDataStripeUser = async (userId: string) => {
  const data = await prisma.subscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      status: true,
      user: {
        select: {
          stripeCustomerId: true,
        },
      },
    },
  });

  return data;
};

export const createSubscription = async () => {
  const user = await getUser();

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    select: {
      stripeCustomerId: true,
    },
  });

  const subscriptionUrl = await getStripeSession({
    customerId: dbUser?.stripeCustomerId as string,
    domainUrl: "http://localhost:3000",
    priceId: process.env.STRIPE_API_ID as string, //TODO change priceId to params function for more plan
  });

  return redirect(subscriptionUrl);
};

export const createCustomerPortal = async () => {
  const user = await getUser();
  const session = await stripe.billingPortal.sessions.create({
    customer: user?.stripeCustomerId as string,
    return_url: "http://localhost:3000/account/payment",
  });
  return redirect(session.url);
};

// newPriceId: string

export const upgradeSubscriptionPlan = async (newPrice: string): Promise<string> => {
  const user = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  // Retrieve current subscription from the database
  const currentSubscription = await prisma.subscription.findUnique({
    where: {
      userId: user.id,
    },
    select: {
      stripeSubscriptionId: true,
    },
  });

  if (!currentSubscription?.stripeSubscriptionId) {
    throw new Error("Subscription not found");
  }

  // Retrieve the associated subscription items
  const subscription = await stripe.subscriptions.retrieve(currentSubscription.stripeSubscriptionId);
  const subscriptionItemId = subscription.items.data[0]?.id;

  if (!subscriptionItemId) {
    throw new Error("No subscription item found for the specified subscription");
  }

  // Update the subscription in Stripe
  await stripe.subscriptions.update(currentSubscription.stripeSubscriptionId, {
    cancel_at_period_end: false,
    items: [
      {
        id: subscriptionItemId,
        price: newPrice as string,
      },
    ],
    proration_behavior: "create_prorations",
  });

  return "/account/payment/success"; // Ensure you return a valid string
};