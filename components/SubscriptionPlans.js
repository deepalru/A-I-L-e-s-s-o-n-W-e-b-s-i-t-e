function SubscriptionPlans({ onClose, onSelectPlan }) {
  const [billingCycle, setBillingCycle] = React.useState('monthly');
  const [selectedPlan, setSelectedPlan] = React.useState(null);
  const [processingPayment, setProcessingPayment] = React.useState(false);
  const [error, setError] = React.useState('');

  const currentUser = getCurrentUser();
  const userSubscription = getUserSubscription();
  const currentPlanId = userSubscription ? userSubscription.planId : 'free';

  const plans = Object.values(SUBSCRIPTION_PLANS);

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPlan) {
      setError('Please select a plan to continue');
      return;
    }

    try {
      setProcessingPayment(true);
      setError('');

      // In a real app, this would process payment through a payment gateway
      // For now, we'll simulate success and update the subscription
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API call

      // Update subscription in localStorage
      updateSubscription(selectedPlan, billingCycle);

      // Call the onSelectPlan callback with the updated plan info
      onSelectPlan(selectedPlan);
      onClose();
    } catch (err) {
      setError(err.message || 'An error occurred while processing your payment');
    } finally {
      setProcessingPayment(false);
    }
  };

  // Calculate price display based on billing cycle
  const getPriceDisplay = (plan) => {
    if (plan.id === 'free') return 'Free';

    const price = billingCycle === 'annual' ?
    getAnnualPrice(plan.price) / 12 :
    plan.price;

    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50" data-id="lqjasib4k" data-path="components/SubscriptionPlans.js">
      <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto" data-id="y9au174o4" data-path="components/SubscriptionPlans.js">
        <div className="p-6" data-id="oo9fybhgb" data-path="components/SubscriptionPlans.js">
          <div className="flex justify-between items-center mb-4" data-id="67foafu80" data-path="components/SubscriptionPlans.js">
            <h3 className="text-2xl font-bold text-gray-900" data-id="hj3owf25s" data-path="components/SubscriptionPlans.js">Choose a Plan</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700" data-id="hgvxhvwot" data-path="components/SubscriptionPlans.js">

              <i className="fas fa-times text-xl" data-id="7rq5xeykr" data-path="components/SubscriptionPlans.js"></i>
            </button>
          </div>
          
          {error &&
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700" data-id="1mpko3ggl" data-path="components/SubscriptionPlans.js">
              <p data-id="yrp3styjq" data-path="components/SubscriptionPlans.js">{error}</p>
            </div>
          }
          
          {/* Billing cycle toggle */}
          <div className="flex justify-center mb-8" data-id="3fekd2446" data-path="components/SubscriptionPlans.js">
            <div className="bg-gray-100 p-1 rounded-full inline-flex items-center" data-id="s7u8ih6d3" data-path="components/SubscriptionPlans.js">
              <button
                onClick={() => handleBillingCycleChange('monthly')}
                className={`px-4 py-2 text-sm font-medium rounded-full ${
                billingCycle === 'monthly' ?
                'bg-white shadow-sm text-blue-600' :
                'text-gray-500 hover:text-gray-900'}`
                } data-id="znn4kl8nz" data-path="components/SubscriptionPlans.js">

                Monthly
              </button>
              <button
                onClick={() => handleBillingCycleChange('annual')}
                className={`px-4 py-2 text-sm font-medium rounded-full flex items-center ${
                billingCycle === 'annual' ?
                'bg-white shadow-sm text-blue-600' :
                'text-gray-500 hover:text-gray-900'}`
                } data-id="x1qygo9w8" data-path="components/SubscriptionPlans.js">

                Annual
                <span className="ml-1 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded" data-id="s2l25wpus" data-path="components/SubscriptionPlans.js">
                  Save {ANNUAL_DISCOUNT}%
                </span>
              </button>
            </div>
          </div>
          
          {/* Subscription plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" data-id="o5wl2josc" data-path="components/SubscriptionPlans.js">
            {plans.map((plan) => {
              const isCurrentPlan = plan.id === currentPlanId;
              const isSelected = selectedPlan === plan.id;

              return (
                <div
                  key={plan.id}
                  className={`border rounded-lg overflow-hidden transition-all ${
                  isSelected ?
                  'border-blue-500 ring-2 ring-blue-200' :
                  'border-gray-200 hover:border-blue-300'} ${
                  plan.popular ? 'relative' : ''}`} data-id="1kp4k2zgi" data-path="components/SubscriptionPlans.js">

                  {plan.popular &&
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-0 rotate-45 origin-bottom-left" data-id="94zo9qk4p" data-path="components/SubscriptionPlans.js">
                      Popular
                    </div>
                  }
                  
                  <div className="p-6" data-id="26herwjfm" data-path="components/SubscriptionPlans.js">
                    <h3 className="text-xl font-bold text-gray-900" data-id="lzbag7ymm" data-path="components/SubscriptionPlans.js">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline" data-id="o29lovn1t" data-path="components/SubscriptionPlans.js">
                      <span className="text-4xl font-extrabold tracking-tight text-gray-900" data-id="ugea0rpgs" data-path="components/SubscriptionPlans.js">
                        {getPriceDisplay(plan)}
                      </span>
                      {plan.id !== 'free' &&
                      <span className="ml-1 text-xl font-medium text-gray-500" data-id="qbit6dswa" data-path="components/SubscriptionPlans.js">
                          /mo
                        </span>
                      }
                    </div>
                    {billingCycle === 'annual' && plan.id !== 'free' &&
                    <p className="mt-1 text-sm text-gray-500" data-id="i5bwywkxh" data-path="components/SubscriptionPlans.js">
                        Billed annually (${getAnnualPrice(plan.price).toFixed(2)})
                      </p>
                    }
                    
                    <ul className="mt-6 space-y-4" data-id="lk3mz5pla" data-path="components/SubscriptionPlans.js">
                      {plan.features.map((feature, index) =>
                      <li key={index} className="flex" data-id="3pun206ol" data-path="components/SubscriptionPlans.js">
                          <i className="fas fa-check text-green-500 flex-shrink-0 mr-2 mt-1" data-id="shdgh4ekb" data-path="components/SubscriptionPlans.js"></i>
                          <span className="text-gray-600" data-id="uvkam2pt4" data-path="components/SubscriptionPlans.js">{feature}</span>
                        </li>
                      )}
                    </ul>
                    
                    <div className="mt-8" data-id="mmo863v0f" data-path="components/SubscriptionPlans.js">
                      <button
                        onClick={() => handlePlanSelect(plan)}
                        disabled={isCurrentPlan || plan.disabled}
                        className={`w-full px-4 py-2 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        isCurrentPlan ?
                        'bg-gray-100 text-gray-800 cursor-default' :
                        plan.popular ?
                        'bg-blue-600 hover:bg-blue-700 text-white' :
                        'bg-white border border-gray-300 hover:bg-gray-50 text-gray-800'}`
                        } data-id="e9anithbm" data-path="components/SubscriptionPlans.js">

                        {isCurrentPlan ? 'Current Plan' : 'Select Plan'}
                      </button>
                    </div>
                  </div>
                </div>);

            })}
          </div>
          
          {/* Action buttons */}
          <div className="flex justify-end space-x-4 border-t pt-4" data-id="bd0az4rqm" data-path="components/SubscriptionPlans.js">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="eqogkymqz" data-path="components/SubscriptionPlans.js">

              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!selectedPlan || processingPayment}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed" data-id="9qqwsn00i" data-path="components/SubscriptionPlans.js">

              {processingPayment ?
              <>
                  <span className="inline-block animate-spin mr-2" data-id="z2auwp9c8" data-path="components/SubscriptionPlans.js">
                    <i className="fas fa-spinner" data-id="fdg15er8n" data-path="components/SubscriptionPlans.js"></i>
                  </span>
                  Processing...
                </> :

              'Confirm Subscription'
              }
            </button>
          </div>
        </div>
      </div>
    </div>);

}