function UpgradePrompt({ isOpen, onClose, currentUsage = null, message = null }) {
  const { Link } = ReactRouterDOM;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50" data-id="pzgvcyo9j" data-path="components/UpgradePrompt.js">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative" data-id="pf799gs4c" data-path="components/UpgradePrompt.js">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-500" data-id="0p63livej" data-path="components/UpgradePrompt.js">

          <i className="fas fa-times" data-id="yno47jgiy" data-path="components/UpgradePrompt.js"></i>
        </button>
        
        <div className="text-center mb-4" data-id="jb7ube37z" data-path="components/UpgradePrompt.js">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4" data-id="55b6jmwc0" data-path="components/UpgradePrompt.js">
            <i className="fas fa-crown text-blue-600 text-xl" data-id="5nxueqk5v" data-path="components/UpgradePrompt.js"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900" data-id="blmrjeloe" data-path="components/UpgradePrompt.js">Upgrade Your Plan</h3>
          
          {message ?
          <p className="mt-2 text-sm text-gray-500" data-id="u2msnihsm" data-path="components/UpgradePrompt.js">{message}</p> :

          <p className="mt-2 text-sm text-gray-500" data-id="my9clg8q2" data-path="components/UpgradePrompt.js">
              You've reached the limit of your current plan. Upgrade now to unlock more features and usage.
            </p>
          }
        </div>
        
        {currentUsage &&
        <div className="bg-gray-50 p-4 rounded-md mb-6" data-id="0eg1t1gk6" data-path="components/UpgradePrompt.js">
            <h4 className="text-sm font-medium text-gray-700 mb-2" data-id="x8z3b979j" data-path="components/UpgradePrompt.js">Current Usage</h4>
            <div className="flex justify-between text-sm" data-id="zs9hi5tgm" data-path="components/UpgradePrompt.js">
              <span data-id="jt2btwy18" data-path="components/UpgradePrompt.js">Activities Created Today:</span>
              <span className="font-medium" data-id="qnbz1nqio" data-path="components/UpgradePrompt.js">{currentUsage.used} / {currentUsage.limit}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2" data-id="qintke3uh" data-path="components/UpgradePrompt.js">
              <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${Math.min(100, currentUsage.used / currentUsage.limit * 100)}%` }} data-id="8wtw0kbul" data-path="components/UpgradePrompt.js">
            </div>
            </div>
          </div>
        }
        
        <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-6" data-id="rwjptw2tz" data-path="components/UpgradePrompt.js">
          <h4 className="text-sm font-medium text-blue-800 mb-2" data-id="z7oqm7mv0" data-path="components/UpgradePrompt.js">Premium Benefits</h4>
          <ul className="space-y-2" data-id="zwrcm6mt8" data-path="components/UpgradePrompt.js">
            <li className="flex items-start" data-id="robpiaxmi" data-path="components/UpgradePrompt.js">
              <i className="fas fa-check-circle text-blue-500 mt-0.5 mr-2" data-id="llryfajc8" data-path="components/UpgradePrompt.js"></i>
              <span className="text-sm text-blue-700" data-id="z2wkcntde" data-path="components/UpgradePrompt.js">Unlimited activity generation</span>
            </li>
            <li className="flex items-start" data-id="ek40pq5hy" data-path="components/UpgradePrompt.js">
              <i className="fas fa-check-circle text-blue-500 mt-0.5 mr-2" data-id="goeytqxkg" data-path="components/UpgradePrompt.js"></i>
              <span className="text-sm text-blue-700" data-id="t77hjyqd7" data-path="components/UpgradePrompt.js">Export to PDF and Word</span>
            </li>
            <li className="flex items-start" data-id="a2kvzqmia" data-path="components/UpgradePrompt.js">
              <i className="fas fa-check-circle text-blue-500 mt-0.5 mr-2" data-id="g0721cdhm" data-path="components/UpgradePrompt.js"></i>
              <span className="text-sm text-blue-700" data-id="2ft9sf4ty" data-path="components/UpgradePrompt.js">Advanced customization options</span>
            </li>
            <li className="flex items-start" data-id="7mb28amzm" data-path="components/UpgradePrompt.js">
              <i className="fas fa-check-circle text-blue-500 mt-0.5 mr-2" data-id="gemazo9pc" data-path="components/UpgradePrompt.js"></i>
              <span className="text-sm text-blue-700" data-id="dajrqb46w" data-path="components/UpgradePrompt.js">Priority support</span>
            </li>
          </ul>
        </div>
        
        <div className="flex justify-center space-x-3" data-id="v9tn1eabd" data-path="components/UpgradePrompt.js">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50" data-id="5g3lrwiwy" data-path="components/UpgradePrompt.js">

            Not Now
          </button>
          <Link
            to="/subscription-plans"
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700" data-id="dmdnipzf8" data-path="components/UpgradePrompt.js">

            View Plans
          </Link>
        </div>
      </div>
    </div>);

}