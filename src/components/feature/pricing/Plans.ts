const basic = process.env.STRIPE_API_ID as string;
const Pro = process.env.STRIPE_API_ID_SECOND_PLAN as string;
const Enterprise = process.env.STRIPE_API_ID_SECOND_PLAN as string;

export const Plans = [
  {
    name: "Basic",
    price: "9.99",
    description: "For individuals and small teams",
    isMostPop: false,
    type: basic, // Use the basic price ID directly
    featureConfig: { checks: 2, xCount: 3 },
    features: [
      { name: "Up to 5 users", included: true },
      { name: "2GB storage", included: true },
      { name: "Basic support", included: true },
      { name: "API access", included: false },
      { name: "Advanced analytics", included: false },
    ],
  },
  {
    name: "Pro",
    price: "19.99",
    description: "For growing businesses",
    isMostPop: true,
    type: Pro, // Use the Pro price ID directly
    featureConfig: { checks: 3, xCount: 2 },
    features: [
      { name: "Up to 20 users", included: true },
      { name: "10GB storage", included: true },
      { name: "Priority support", included: true },
      { name: "API access", included: true },
      { name: "Advanced analytics", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "49.99",
    description: "For large organizations",
    isMostPop: false,
    type: Enterprise, // Use the Enterprise price ID directly
    featureConfig: { checks: 5, xCount: 0 },
    features: [
      { name: "Unlimited users", included: true },
      { name: "Unlimited storage", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "API access", included: true },
      { name: "Advanced analytics", included: true },
    ],
  },
];