function SubscriptionManager({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = React.useState('details');
  const [showPlans, setShowPlans] = React.useState(false);
  const [cancelConfirm, setCancelConfirm] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [message, setMessage] = React.useState({ type: '', text: '' });

  const currentUser = getCurrentUser();
  const userSubscription = getUserSubscription();
  const planDetails = userSubscription ?
  getSubscriptionPlanDetails(userSubscription.planId) :
  SUBSCRIPTION_PLANS.FREE;

  // Check if the subscription is active
  const isActive = userSubscription && userSubscription.status === 'active';

  // Calculate renewal date
  const getRenewalDate = () => {
    if (!userSubscription || !userSubscription.endDate) return 'N/A';

    const endDate = new Date(userSubscription.endDate);
    return endDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleUpgrade = () => {
    setShowPlans(true);
  };

  const handleSelectPlan = (planId, billingCycle = 'monthly') => {
    try {
      setProcessing(true);

      // Update the user's subscription
      updateSubscription(planId, billingCycle);

      setShowPlans(false);
      setMessage({
        type: 'success',
        text: 'Your subscription has been updated successfully!'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Failed to update subscription. Please try again.'
      });
    } finally {
      setProcessing(false);
    }
  };

  // Handle renewal of subscription
  const handleRenewSubscription = async () => {
    try {
      setProcessing(true);

      // In a real app, this would call an API to renew the subscription
      // For now, we'll use the existing plan info to renew
      const currentPlanId = userSubscription?.planId;
      const currentBillingCycle = userSubscription?.billingCycle || 'monthly';

      if (currentPlanId && currentPlanId !== 'free') {
        updateSubscription(currentPlanId, currentBillingCycle);

        setMessage({
          type: 'success',
          text: 'Your subscription has been renewed successfully!'
        });
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Failed to renew subscription. Please try again.'
      });
    } finally {
      setProcessing(false);
    }
  };

  const handleCancelSubscription = async () => {
    try {
      setProcessing(true);

      // In a real app, this would call an API to cancel the subscription
      // For now, we'll simulate it with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update local storage
      cancelSubscription();

      setCancelConfirm(false);
      setMessage({
        type: 'success',
        text: 'Your subscription has been canceled. You will have access until the end of your billing period.'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Failed to cancel subscription. Please try again.'
      });
    } finally {
      setProcessing(false);
    }
  };

  if (!isOpen || !currentUser) return null;

  if (showPlans) {
    return <SubscriptionPlans onClose={() => setShowPlans(false)} onSelectPlan={handleSelectPlan} data-id="5a8feqid5" data-path="components/SubscriptionManager.js" />;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50" data-id="a7m5et8bj" data-path="components/SubscriptionManager.js">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" data-id="zsmr6d5ga" data-path="components/SubscriptionManager.js">
        <div className="p-6" data-id="z8c4to3kz" data-path="components/SubscriptionManager.js">
          <div className="flex justify-between items-center mb-4" data-id="lqjvehhrj" data-path="components/SubscriptionManager.js">
            <h3 className="text-xl font-bold text-gray-900" data-id="93rwjkm9i" data-path="components/SubscriptionManager.js">Subscription Management</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700" data-id="71ph16rvx" data-path="components/SubscriptionManager.js">

              <i className="fas fa-times text-xl" data-id="yfi1pw92u" data-path="components/SubscriptionManager.js"></i>
            </button>
          </div>
          
          {message.text &&
          <div className={`mb-4 p-3 border-l-4 ${
          message.type === 'error' ?
          'bg-red-50 border-red-500 text-red-700' :
          'bg-green-50 border-green-500 text-green-700'}`
          } data-id="152tluqvj" data-path="components/SubscriptionManager.js">
              <p data-id="96erbfrtc" data-path="components/SubscriptionManager.js">{message.text}</p>
            </div>
          }
          
          {/* Tab navigation */}
          <div className="border-b border-gray-200 mb-6" data-id="u3swcl763" data-path="components/SubscriptionManager.js">
            <nav className="-mb-px flex space-x-6" data-id="02pqoqpir" data-path="components/SubscriptionManager.js">
              <button
                onClick={() => setActiveTab('details')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'details' ?
                'border-blue-500 text-blue-600' :
                'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
                } data-id="x30wlqawb" data-path="components/SubscriptionManager.js">

                <i className="fas fa-credit-card mr-2" data-id="g26j2biwl" data-path="components/SubscriptionManager.js"></i>
                Subscription Details
              </button>
              <button
                onClick={() => setActiveTab('usage')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'usage' ?
                'border-blue-500 text-blue-600' :
                'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
                } data-id="du3c9t85e" data-path="components/SubscriptionManager.js">

                <i className="fas fa-chart-bar mr-2" data-id="dygxd4une" data-path="components/SubscriptionManager.js"></i>
                Usage & Limits
              </button>
            </nav>
          </div>
          
          {/* Subscription Details Tab */}
          {activeTab === 'details' &&
          <div className="space-y-6" data-id="5nkisnwz5" data-path="components/SubscriptionManager.js">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200" data-id="b183u7nih" data-path="components/SubscriptionManager.js">
                <div className="flex justify-between items-center" data-id="a79p31nht" data-path="components/SubscriptionManager.js">
                  <div data-id="83q29qvtw" data-path="components/SubscriptionManager.js">
                    <h4 className="text-lg font-medium text-gray-900" data-id="e70fdlfsm" data-path="components/SubscriptionManager.js">Current Plan</h4>
                    <p className="text-gray-600" data-id="g7mbxhuwe" data-path="components/SubscriptionManager.js">{planDetails.name}</p>
                  </div>
                  <div className="flex items-center" data-id="hpib5b5pz" data-path="components/SubscriptionManager.js">
                    <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    isActive ?
                    'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'}`
                    } data-id="4iyy1zp20" data-path="components/SubscriptionManager.js">

                      {isActive ? 'Active' : 'Canceled'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="j467hp7m7" data-path="components/SubscriptionManager.js">
                <div className="border border-gray-200 rounded-lg p-4" data-id="lqsxhsn7w" data-path="components/SubscriptionManager.js">
                  <h5 className="text-sm font-medium text-gray-500" data-id="9uadxy0lt" data-path="components/SubscriptionManager.js">Billing Cycle</h5>
                  <p className="text-gray-900 mt-1" data-id="buivkklcs" data-path="components/SubscriptionManager.js">{userSubscription?.billingCycle ?
                  `${userSubscription.billingCycle.charAt(0).toUpperCase()}${userSubscription.billingCycle.slice(1)}` : 'N/A'}</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4" data-id="js5ew5i9f" data-path="components/SubscriptionManager.js">
                  <h5 className="text-sm font-medium text-gray-500" data-id="kz7kkmrx6" data-path="components/SubscriptionManager.js">Price</h5>
                  <p className="text-gray-900 mt-1" data-id="hk5f40m02" data-path="components/SubscriptionManager.js">
                    {planDetails.priceDisplay}
                    {userSubscription?.billingCycle &&
                  <span className="text-gray-500 text-sm" data-id="kbs0r7y1v" data-path="components/SubscriptionManager.js">
                        {userSubscription.billingCycle === 'annual' ? '/year' : '/month'}
                      </span>
                  }
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4" data-id="cg6mgq2aj" data-path="components/SubscriptionManager.js">
                  <h5 className="text-sm font-medium text-gray-500" data-id="0dkulv5tq" data-path="components/SubscriptionManager.js">Start Date</h5>
                  <p className="text-gray-900 mt-1" data-id="ocjd94jb5" data-path="components/SubscriptionManager.js">{formatDate(userSubscription?.startDate)}</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4" data-id="6srpb7mcx" data-path="components/SubscriptionManager.js">
                  <h5 className="text-sm font-medium text-gray-500" data-id="5bnea8jtq" data-path="components/SubscriptionManager.js">
                    {isActive ? 'Next Renewal' : 'Access Until'}
                  </h5>
                  <p className="text-gray-900 mt-1" data-id="1qqe4a8mr" data-path="components/SubscriptionManager.js">{getRenewalDate()}</p>
                </div>
              </div>
              
              <div className="border-t pt-4 flex justify-between" data-id="gjotlw8yc" data-path="components/SubscriptionManager.js">
                {isActive && planDetails.id !== 'free' ?
              <>
                    {!cancelConfirm ?
                <div className="flex space-x-2" data-id="k0ugsibvc" data-path="components/SubscriptionManager.js">
                  <button
                    onClick={handleRenewSubscription}
                    disabled={processing}
                    className="px-4 py-2 border border-green-500 text-green-700 rounded-md text-sm font-medium hover:bg-green-50 disabled:opacity-50" data-id="qlk0qfbq8" data-path="components/SubscriptionManager.js">
                      Renew Subscription
                    </button>
                  <button
                    onClick={() => setCancelConfirm(true)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50" data-id="z3ub3dph6" data-path="components/SubscriptionManager.js">
                        Cancel Subscription
                    </button>
                </div> :

                <div className="flex items-center space-x-2" data-id="2dyyzmezu" data-path="components/SubscriptionManager.js">
                        <span className="text-sm text-red-600" data-id="cuiutmvzl" data-path="components/SubscriptionManager.js">Confirm cancellation?</span>
                        <button
                    onClick={handleCancelSubscription}
                    disabled={processing}
                    className="px-3 py-1 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 disabled:opacity-50" data-id="j4tlmgm7y" data-path="components/SubscriptionManager.js">

                          {processing ? 'Processing...' : 'Yes, Cancel'}
                        </button>
                        <button
                    onClick={() => setCancelConfirm(false)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50" data-id="szqr3b5dc" data-path="components/SubscriptionManager.js">

                          No
                        </button>
                      </div>
                }
                  </> :

              <div data-id="ouxdxm6d1" data-path="components/SubscriptionManager.js"></div> // Empty div to maintain flex justify-between
              }
                
                <button
                onClick={handleUpgrade}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700" data-id="0iwe4h2a8" data-path="components/SubscriptionManager.js">

                  {planDetails.id === 'free' ? 'Upgrade Plan' : 'Change Plan'}
                </button>
              </div>
            </div>
          }
          
          {/* Usage & Limits Tab */}
          {activeTab === 'usage' &&
          <div className="space-y-6" data-id="sr3e4j5dw" data-path="components/SubscriptionManager.js">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200" data-id="q0syg2evs" data-path="components/SubscriptionManager.js">
                <h4 className="text-lg font-medium text-blue-900" data-id="8h8j13pd4" data-path="components/SubscriptionManager.js">Your Plan Includes</h4>
                <ul className="mt-2 space-y-2" data-id="3dwtboguy" data-path="components/SubscriptionManager.js">
                  {planDetails.features.map((feature, index) =>
                <li key={index} className="flex items-start" data-id="spdd37z6m" data-path="components/SubscriptionManager.js">
                      <i className="fas fa-check text-blue-500 mt-1 mr-2" data-id="e0rnz7hp6" data-path="components/SubscriptionManager.js"></i>
                      <span className="text-blue-800" data-id="y078q1kij" data-path="components/SubscriptionManager.js">{feature}</span>
                    </li>
                )}
                </ul>
              </div>
              
              {planDetails.id === 'free' &&
            <div data-id="ys9qk3ph6" data-path="components/SubscriptionManager.js">
                  <h4 className="text-lg font-medium text-gray-900 mb-3" data-id="u2tbquvym" data-path="components/SubscriptionManager.js">Today's Activity Usage</h4>
                  <div className="bg-gray-100 rounded-full h-4 mb-2" data-id="6p3omwrhi" data-path="components/SubscriptionManager.js">
                    <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${Math.min(100, (5 - getRemainingActivities()) * 20)}%` }} data-id="lbm4qa9jn" data-path="components/SubscriptionManager.js">
                </div>
                  </div>
                  <p className="text-sm text-gray-600" data-id="rf3h5vh36" data-path="components/SubscriptionManager.js">
                    You've used {5 - getRemainingActivities()} of 5 free activities today.
                    {getRemainingActivities() === 0 &&
                <span className="text-red-600 font-medium ml-1" data-id="4u9l81bw4" data-path="components/SubscriptionManager.js">
                        Upgrade for unlimited activities!
                      </span>
                }
                  </p>
                </div>
            }
              
              <div className="border-t pt-4" data-id="g0nk84siw" data-path="components/SubscriptionManager.js">
                <button
                onClick={handleUpgrade}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700" data-id="rgz1x9o2c" data-path="components/SubscriptionManager.js">

                  {planDetails.id === 'free' ? 'Upgrade for More Features' : 'Upgrade to Higher Plan'}
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </div>);

}