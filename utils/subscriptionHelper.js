// Subscription helper functions

// Subscription Plans
const SUBSCRIPTION_PLANS = {
  FREE: {
    id: 'free',
    name: 'Free',
    price: 0,
    priceDisplay: 'Free',
    billingCycle: null,
    features: [
    'Generate up to 5 activities per day',
    'Basic customization options',
    'Access to starter templates',
    'Save up to 10 activities'],

    disabled: false,
    popular: false
  },
  BASIC: {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    priceDisplay: '$9.99',
    billingCycle: 'monthly',
    features: [
    'Generate up to 30 activities per day',
    'Advanced customization options',
    'Access to all templates',
    'Save unlimited activities',
    'Email support'],

    disabled: false,
    popular: true
  },
  PREMIUM: {
    id: 'premium',
    name: 'Premium',
    price: 19.99,
    priceDisplay: '$19.99',
    billingCycle: 'monthly',
    features: [
    'Unlimited activity generation',
    'All customization options',
    'Access to premium templates',
    'Save unlimited activities',
    'Priority email support',
    'Bulk activity creation',
    'Export activities to PDF/Word'],

    disabled: false,
    popular: false
  },
  TEAM: {
    id: 'team',
    name: 'Team',
    price: 49.99,
    priceDisplay: '$49.99',
    billingCycle: 'monthly',
    features: [
    'All Premium features',
    'Up to 5 team members',
    'Team library sharing',
    'Admin dashboard',
    'Phone support',
    'Custom branding options'],

    disabled: false,
    popular: false
  }
};

// Annual billing discount percentage
const ANNUAL_DISCOUNT = 20; // 20% discount

// Initialize user subscription in local storage if not present
function initUserSubscription() {
  const currentUser = getCurrentUser();
  if (!currentUser) return null;

  const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');

  // Check if user already has a subscription
  const existingSubscription = subscriptions.find((sub) => sub.userId === currentUser.id);

  // If no subscription exists, create a free one
  if (!existingSubscription) {
    const newSubscription = {
      id: Date.now().toString(),
      userId: currentUser.id,
      planId: SUBSCRIPTION_PLANS.FREE.id,
      status: 'active',
      startDate: new Date().toISOString(),
      endDate: null, // Free plans don't expire
      autoRenew: false,
      paymentMethod: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    subscriptions.push(newSubscription);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    return newSubscription;
  }

  return existingSubscription;
}

// Get current user's subscription
function getUserSubscription() {
  const currentUser = getCurrentUser();
  if (!currentUser) return null;

  const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
  const userSubscription = subscriptions.find((sub) => sub.userId === currentUser.id);

  // If no subscription found, initialize a free one
  if (!userSubscription) {
    return initUserSubscription();
  }

  return userSubscription;
}

// Get subscription plan details
function getSubscriptionPlanDetails(planId) {
  return Object.values(SUBSCRIPTION_PLANS).find((plan) => plan.id === planId) || SUBSCRIPTION_PLANS.FREE;
}

// Check if user has active subscription
function hasActiveSubscription() {
  const subscription = getUserSubscription();
  return subscription && subscription.status === 'active';
}

// Check if user is on free plan
function isFreePlan() {
  const subscription = getUserSubscription();
  return !subscription || subscription.planId === SUBSCRIPTION_PLANS.FREE.id;
}

// Update user subscription (upgrade or downgrade)
function updateSubscription(newPlanId, billingCycle = 'monthly') {
  const currentUser = getCurrentUser();
  if (!currentUser) throw new Error('You must be logged in to update your subscription');

  const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
  const userSubIndex = subscriptions.findIndex((sub) => sub.userId === currentUser.id);

  // Calculate end date based on billing cycle
  const startDate = new Date();
  let endDate = new Date();
  if (billingCycle === 'annual') {
    endDate.setFullYear(endDate.getFullYear() + 1);
  } else {
    endDate.setMonth(endDate.getMonth() + 1);
  }

  if (userSubIndex >= 0) {
    // Update existing subscription
    subscriptions[userSubIndex] = {
      ...subscriptions[userSubIndex],
      planId: newPlanId,
      status: 'active',
      startDate: startDate.toISOString(),
      endDate: newPlanId === SUBSCRIPTION_PLANS.FREE.id ? null : endDate.toISOString(),
      autoRenew: newPlanId !== SUBSCRIPTION_PLANS.FREE.id,
      updatedAt: new Date().toISOString(),
      billingCycle: newPlanId === SUBSCRIPTION_PLANS.FREE.id ? null : billingCycle
    };
  } else {
    // Create new subscription
    const newSubscription = {
      id: Date.now().toString(),
      userId: currentUser.id,
      planId: newPlanId,
      status: 'active',
      startDate: startDate.toISOString(),
      endDate: newPlanId === SUBSCRIPTION_PLANS.FREE.id ? null : endDate.toISOString(),
      autoRenew: newPlanId !== SUBSCRIPTION_PLANS.FREE.id,
      paymentMethod: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      billingCycle: newPlanId === SUBSCRIPTION_PLANS.FREE.id ? null : billingCycle
    };

    subscriptions.push(newSubscription);
  }

  localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  return getUserSubscription();
}

// Calculate annual price with discount
function getAnnualPrice(monthlyPrice) {
  const annualPrice = monthlyPrice * 12 * (1 - ANNUAL_DISCOUNT / 100);
  return Math.round(annualPrice * 100) / 100; // Round to 2 decimal places
}

// Cancel subscription
function cancelSubscription() {
  const currentUser = getCurrentUser();
  if (!currentUser) throw new Error('You must be logged in to cancel your subscription');

  const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
  const userSubIndex = subscriptions.findIndex((sub) => sub.userId === currentUser.id);

  if (userSubIndex >= 0) {
    // Mark as canceled but keep active until end date
    subscriptions[userSubIndex] = {
      ...subscriptions[userSubIndex],
      status: 'canceled',
      autoRenew: false,
      updatedAt: new Date().toISOString()
    };

    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  }

  return getUserSubscription();
}

// Check if user has reached free tier limits
function checkFreeTierLimits() {
  const currentUser = getCurrentUser();
  if (!currentUser) return false;

  // Check if user is on free plan
  if (!isFreePlan()) return false;

  // Get user activity count for today
  const activityCreationLog = JSON.parse(localStorage.getItem('activityCreationLog') || '[]');
  const today = new Date().toISOString().split('T')[0]; // Get just the date part

  const todayActivities = activityCreationLog.filter((log) =>
  log.userId === currentUser.id &&
  log.createdAt.startsWith(today)
  );

  // Check if user has reached the limit (5 per day for free tier)
  return todayActivities.length >= 5;
}

// Check if user can access a specific feature based on subscription
function canAccessFeature(featureName) {
  const userSubscription = getUserSubscription();
  if (!userSubscription) return false;

  const planDetails = getSubscriptionPlanDetails(userSubscription.planId);

  // Define feature access by plan
  const featureAccess = {
    'export_pdf': ['premium', 'team'],
    'bulk_creation': ['premium', 'team'],
    'advanced_customization': ['basic', 'premium', 'team'],
    'unlimited_saves': ['basic', 'premium', 'team'],
    'unlimited_generation': ['premium', 'team'],
    'team_sharing': ['team'],
    'admin_dashboard': ['team']
  };

  // Check if feature exists and if user's plan is in the allowed plans
  return featureAccess[featureName] && featureAccess[featureName].includes(planDetails.id);
}

// Get daily activity limit based on subscription
function getDailyActivityLimit() {
  const userSubscription = getUserSubscription();
  if (!userSubscription) return 5; // Default for free tier

  const planId = userSubscription.planId;

  const limits = {
    'free': 5,
    'basic': 30,
    'premium': Infinity,
    'team': Infinity
  };

  return limits[planId] || 5;
}

// Log activity creation
function logActivityCreation() {
  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const activityCreationLog = JSON.parse(localStorage.getItem('activityCreationLog') || '[]');

  activityCreationLog.push({
    id: Date.now().toString(),
    userId: currentUser.id,
    createdAt: new Date().toISOString()
  });

  localStorage.setItem('activityCreationLog', JSON.stringify(activityCreationLog));

  // Check if the user has reached their limit and should be prompted to upgrade
  const userPlan = getUserSubscription()?.planId || 'free';
  const dailyLimit = getDailyActivityLimit();
  const usedToday = getTodayActivityCount();

  if (userPlan === 'free' && usedToday >= dailyLimit - 1) {
    return {
      shouldPromptUpgrade: true,
      message: `You've used ${usedToday + 1} of ${dailyLimit} free activities today. Upgrade for more!`
    };
  }

  return { shouldPromptUpgrade: false };
}

// Get today's activity count
function getTodayActivityCount() {
  const currentUser = getCurrentUser();
  if (!currentUser) return 0;

  const activityCreationLog = JSON.parse(localStorage.getItem('activityCreationLog') || '[]');
  const today = new Date().toISOString().split('T')[0]; // Get just the date part

  return activityCreationLog.filter((log) =>
  log.userId === currentUser.id &&
  log.createdAt.startsWith(today)
  ).length;
}

// Get remaining activities for free users
function getRemainingActivities() {
  const currentUser = getCurrentUser();
  if (!currentUser || !isFreePlan()) return null;

  const activityCreationLog = JSON.parse(localStorage.getItem('activityCreationLog') || '[]');
  const today = new Date().toISOString().split('T')[0]; // Get just the date part

  const todayActivities = activityCreationLog.filter((log) =>
  log.userId === currentUser.id &&
  log.createdAt.startsWith(today)
  );

  return 5 - todayActivities.length;
}