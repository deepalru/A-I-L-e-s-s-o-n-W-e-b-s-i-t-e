function AdminPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasAccess, setHasAccess] = React.useState(false);

  React.useEffect(() => {
    // Check if current user has admin access
    const checkAccess = () => {
      const access = hasPermission(PERMISSIONS.VIEW_ADMIN_PANEL);
      setHasAccess(access);
      setIsLoading(false);
    };

    checkAccess();
  }, []);

  if (isLoading) {
    return (
      <div className="py-10 flex justify-center" data-id="llrxg8m1s" data-path="pages/Admin.js">
        <div className="spinner" data-id="2ciq00uu8" data-path="pages/Admin.js"></div>
      </div>);

  }

  if (!hasAccess) {
    return (
      <div className="py-10 bg-gray-50 min-h-screen" data-id="itdzyvakk" data-path="pages/Admin.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="d7ty3daju" data-path="pages/Admin.js">
          <div className="bg-white rounded-lg shadow-md p-6 text-center" data-id="s2lxv04vd" data-path="pages/Admin.js">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4" data-id="l6lm4hrjp" data-path="pages/Admin.js">
              <i className="fas fa-lock text-red-500 text-2xl" data-id="dsiyfd924" data-path="pages/Admin.js"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2" data-id="p44888py8" data-path="pages/Admin.js">Access Denied</h2>
            <p className="text-gray-600 mb-6" data-id="hzo597fir" data-path="pages/Admin.js">
              You don't have permission to view the admin panel. Please contact an administrator if you believe this is an error.
            </p>
            <ReactRouterDOM.Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600" data-id="hq8p9xzgm" data-path="pages/Admin.js">

              <i className="fas fa-home mr-2" data-id="2a90ub7pl" data-path="pages/Admin.js"></i>
              Return to Home
            </ReactRouterDOM.Link>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="py-10 bg-gray-50 min-h-screen" data-id="4vqeqg2z5" data-path="pages/Admin.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="o8a5rhsq8" data-path="pages/Admin.js">
        <div className="mb-8" data-id="10210fxsg" data-path="pages/Admin.js">
          <h1 className="text-3xl font-bold text-gray-900" data-id="7o75w42d6" data-path="pages/Admin.js">Admin Panel</h1>
          <p className="mt-2 text-gray-600" data-id="p8nnzstg8" data-path="pages/Admin.js">
            Manage users, system settings, and integrations.
          </p>
        </div>
        
        <AdminDashboard data-id="v81d3yigv" data-path="pages/Admin.js" />
      </div>
    </div>);

}