function SubscriptionRestrictionNotice({ featureName, requiredPlan, onUpgrade }) {
  const getFeatureNameDisplay = () => {
    const nameMap = {
      'export_pdf': 'Export to PDF/Word',
      'bulk_creation': 'Bulk Activity Creation',
      'advanced_customization': 'Advanced Customization Options',
      'unlimited_saves': 'Unlimited Saved Activities',
      'unlimited_generation': 'Unlimited Activity Generation',
      'team_sharing': 'Team Library Sharing',
      'admin_dashboard': 'Admin Dashboard'
    };

    return nameMap[featureName] || featureName;
  };

  const getPlanNameDisplay = () => {
    const planMap = {
      'basic': 'Basic',
      'premium': 'Premium',
      'team': 'Team'
    };

    return planMap[requiredPlan] || requiredPlan;
  };

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4" data-id="yxi1a7jvq" data-path="components/SubscriptionRestrictionNotice.js">
      <div className="flex items-start" data-id="gi5mqduvo" data-path="components/SubscriptionRestrictionNotice.js">
        <div className="flex-shrink-0" data-id="0obbg5nwt" data-path="components/SubscriptionRestrictionNotice.js">
          <i className="fas fa-lock text-blue-500 mt-0.5" data-id="79s8wr0ob" data-path="components/SubscriptionRestrictionNotice.js"></i>
        </div>
        <div className="ml-3" data-id="93xwrsxo0" data-path="components/SubscriptionRestrictionNotice.js">
          <h3 className="text-sm font-medium text-blue-800" data-id="658wc8zrc" data-path="components/SubscriptionRestrictionNotice.js">
            Feature Restricted
          </h3>
          <div className="mt-2 text-sm text-blue-700" data-id="mhw18a3n2" data-path="components/SubscriptionRestrictionNotice.js">
            <p data-id="1r2njgl9d" data-path="components/SubscriptionRestrictionNotice.js">
              The <span className="font-semibold" data-id="yaaa2csgs" data-path="components/SubscriptionRestrictionNotice.js">{getFeatureNameDisplay()}</span> feature requires a <span className="font-semibold" data-id="halmrzok5" data-path="components/SubscriptionRestrictionNotice.js">{getPlanNameDisplay()}</span> subscription or higher.
            </p>
          </div>
          <div className="mt-4" data-id="e2ytmtat8" data-path="components/SubscriptionRestrictionNotice.js">
            <button
              onClick={onUpgrade}
              className="inline-flex items-center px-3 py-2 border border-blue-600 text-sm leading-4 font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="qzc6k42kt" data-path="components/SubscriptionRestrictionNotice.js">

              <i className="fas fa-crown mr-2" data-id="mud0rio63" data-path="components/SubscriptionRestrictionNotice.js"></i>
              Upgrade Your Plan
            </button>
          </div>
        </div>
      </div>
    </div>);

}