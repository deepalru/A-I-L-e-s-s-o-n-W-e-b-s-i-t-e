function AdminDashboard() {
  const [activeTab, setActiveTab] = React.useState('users');
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  React.useEffect(() => {
    // Load users when the component mounts
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setIsLoading(true);
    setError('');
    try {
      const usersList = await getAllUsers();
      setUsers(usersList);
    } catch (err) {
      setError(err.message || 'Failed to load users');
      console.error('Error loading users:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    setError('');
    setSuccessMessage('');

    try {
      await updateUserRole(userId, newRole);
      setSuccessMessage('User role updated successfully');

      // Refresh the user list
      await loadUsers();
    } catch (err) {
      setError(err.message || 'Failed to update user role');
      console.error('Error updating role:', err);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }

    setError('');
    setSuccessMessage('');

    try {
      await deleteUser(userId);
      setSuccessMessage('User deleted successfully');

      // Refresh the user list
      await loadUsers();
    } catch (err) {
      setError(err.message || 'Failed to delete user');
      console.error('Error deleting user:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow" data-id="w5h0vesqt" data-path="components/AdminDashboard.js">
      <div className="p-6 border-b" data-id="deitstri5" data-path="components/AdminDashboard.js">
        <h2 className="text-2xl font-bold text-gray-800" data-id="18awwdcm9" data-path="components/AdminDashboard.js">Admin Dashboard</h2>
        <p className="text-gray-600 mt-1" data-id="zax29t0sc" data-path="components/AdminDashboard.js">Manage users, roles, and system settings</p>
      </div>
      
      {error &&
      <div className="mx-6 mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700" data-id="6hn7hxz1g" data-path="components/AdminDashboard.js">
          <p data-id="29psln9eo" data-path="components/AdminDashboard.js">{error}</p>
        </div>
      }
      
      {successMessage &&
      <div className="mx-6 mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700" data-id="d2z445o9x" data-path="components/AdminDashboard.js">
          <p data-id="t3ieh9sce" data-path="components/AdminDashboard.js">{successMessage}</p>
        </div>
      }
      
      <div className="border-b border-gray-200" data-id="h5pn3yykp" data-path="components/AdminDashboard.js">
        <nav className="px-6 -mb-px flex space-x-6" data-id="9vmfm3yrh" data-path="components/AdminDashboard.js">
          <button
            onClick={() => setActiveTab('users')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'users' ?
            'border-blue-500 text-blue-600' :
            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
            } data-id="xytcs8zq0" data-path="components/AdminDashboard.js">

            <i className="fas fa-users mr-2" data-id="ay1dz0yi8" data-path="components/AdminDashboard.js"></i>
            User Management
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'api' ?
            'border-blue-500 text-blue-600' :
            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
            } data-id="8bsjiruzy" data-path="components/AdminDashboard.js">

            <i className="fas fa-cogs mr-2" data-id="r68guvrk9" data-path="components/AdminDashboard.js"></i>
            API Settings
          </button>
          <button
            onClick={() => setActiveTab('system')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
            activeTab === 'system' ?
            'border-blue-500 text-blue-600' :
            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
            } data-id="pcmsvsrte" data-path="components/AdminDashboard.js">

            <i className="fas fa-server mr-2" data-id="759kibd0g" data-path="components/AdminDashboard.js"></i>
            System Settings
          </button>
        </nav>
      </div>
      
      <div className="p-6" data-id="ttrt87wvu" data-path="components/AdminDashboard.js">
        {activeTab === 'users' &&
        <div data-id="r8yzjm9b6" data-path="components/AdminDashboard.js">
            <div className="flex justify-between items-center mb-4" data-id="z7adf1z5g" data-path="components/AdminDashboard.js">
              <h3 className="text-lg font-medium text-gray-900" data-id="2n9l32znq" data-path="components/AdminDashboard.js">Users</h3>
              <button
              onClick={loadUsers}
              className="p-2 text-sm text-blue-600 hover:text-blue-800" data-id="78alg92a4" data-path="components/AdminDashboard.js">

                <i className="fas fa-sync-alt mr-1" data-id="jmo8wbfxj" data-path="components/AdminDashboard.js"></i> Refresh
              </button>
            </div>
            
            {isLoading ?
          <div className="flex justify-center py-8" data-id="y41ebfbdo" data-path="components/AdminDashboard.js">
                <div className="spinner" data-id="prwnpjgi7" data-path="components/AdminDashboard.js"></div>
              </div> :

          <div className="overflow-x-auto" data-id="zjj9vlz7q" data-path="components/AdminDashboard.js">
                <table className="min-w-full divide-y divide-gray-200" data-id="8dokgrfrd" data-path="components/AdminDashboard.js">
                  <thead className="bg-gray-50" data-id="b4mh3yub4" data-path="components/AdminDashboard.js">
                    <tr data-id="asegdq7ir" data-path="components/AdminDashboard.js">
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="l8a73a8l4" data-path="components/AdminDashboard.js">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="1gutmgrca" data-path="components/AdminDashboard.js">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="gyjaeyrjk" data-path="components/AdminDashboard.js">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="wp5nsz2lj" data-path="components/AdminDashboard.js">
                        Created
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="qfronubni" data-path="components/AdminDashboard.js">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200" data-id="ypw74scm2" data-path="components/AdminDashboard.js">
                    {users.length === 0 ?
                <tr data-id="xsxx6nhwb" data-path="components/AdminDashboard.js">
                        <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500" data-id="pmx2leipe" data-path="components/AdminDashboard.js">
                          No users found
                        </td>
                      </tr> :

                users.map((user) =>
                <tr key={user.id} data-id="9hpdomjsu" data-path="components/AdminDashboard.js">
                          <td className="px-6 py-4 whitespace-nowrap" data-id="j43koxx9l" data-path="components/AdminDashboard.js">
                            <div className="flex items-center" data-id="8nzbdw49z" data-path="components/AdminDashboard.js">
                              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600" data-id="wl5qbabfa" data-path="components/AdminDashboard.js">
                                {user.name.charAt(0).toUpperCase()}
                              </div>
                              <div className="ml-4" data-id="tvy9k6ozm" data-path="components/AdminDashboard.js">
                                <div className="text-sm font-medium text-gray-900" data-id="wg46u3365" data-path="components/AdminDashboard.js">{user.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap" data-id="kvanpy3k1" data-path="components/AdminDashboard.js">
                            <div className="text-sm text-gray-900" data-id="m9zuonvr7" data-path="components/AdminDashboard.js">{user.email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap" data-id="ghrqfhwca" data-path="components/AdminDashboard.js">
                            <select
                      value={user.role || USER_ROLES.USER}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className="text-sm border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      disabled={!hasPermission(PERMISSIONS.MANAGE_ROLES)} data-id="uac60whku" data-path="components/AdminDashboard.js">

                              {Object.values(USER_ROLES).map((role) =>
                      <option key={role} value={role} data-id="zv95jahev" data-path="components/AdminDashboard.js">
                                  {role.charAt(0).toUpperCase() + role.slice(1)}
                                </option>
                      )}
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-id="93dntl2q8" data-path="components/AdminDashboard.js">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-id="g8n2y2r54" data-path="components/AdminDashboard.js">
                            <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-900 ml-2"
                      disabled={!hasPermission(PERMISSIONS.MANAGE_USERS)} data-id="p2gqgju28" data-path="components/AdminDashboard.js">

                              <i className="fas fa-trash" data-id="852r6xrgh" data-path="components/AdminDashboard.js"></i>
                            </button>
                          </td>
                        </tr>
                )
                }
                  </tbody>
                </table>
              </div>
          }
          </div>
        }
        
        {activeTab === 'api' &&
        <div data-id="xzezsq7wz" data-path="components/AdminDashboard.js">
            <div className="mb-4" data-id="1iu2b0o31" data-path="components/AdminDashboard.js">
              <h3 className="text-lg font-medium text-gray-900 mb-2" data-id="rwnayw655" data-path="components/AdminDashboard.js">API Integration Settings</h3>
              <p className="text-sm text-gray-600" data-id="51dlifl3f" data-path="components/AdminDashboard.js">
                Configure external API integrations for enhanced functionality.
              </p>
            </div>
            
            <div className="mt-6 bg-blue-50 p-4 rounded-lg" data-id="jn9epk5vc" data-path="components/AdminDashboard.js">
              <div className="flex items-start" data-id="5qhv53zem" data-path="components/AdminDashboard.js">
                <div className="flex-shrink-0" data-id="3n4itdbid" data-path="components/AdminDashboard.js">
                  <i className="fas fa-robot text-blue-500 text-xl" data-id="qa8quxr8b" data-path="components/AdminDashboard.js"></i>
                </div>
                <div className="ml-3" data-id="35e73d5qo" data-path="components/AdminDashboard.js">
                  <h3 className="text-sm font-medium text-blue-800" data-id="5n5ogqt9g" data-path="components/AdminDashboard.js">AI Integration</h3>
                  <div className="mt-2 text-sm text-blue-700" data-id="55pl2v7mk" data-path="components/AdminDashboard.js">
                    <p data-id="re5cfxchx" data-path="components/AdminDashboard.js">Configure AI providers for generating content and enhancing the application.</p>
                    <button
                    onClick={() => window.openAISettings && window.openAISettings()}
                    className="mt-2 inline-flex items-center px-3 py-1.5 border border-blue-700 text-xs rounded-md font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="dgwt5jbm4" data-path="components/AdminDashboard.js">

                      Configure AI Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional API integrations could be added here */}
          </div>
        }
        
        {activeTab === 'system' &&
        <div data-id="7hhtnrgcs" data-path="components/AdminDashboard.js">
            <div className="mb-4" data-id="kd5e27bsn" data-path="components/AdminDashboard.js">
              <h3 className="text-lg font-medium text-gray-900 mb-2" data-id="i7sn81ste" data-path="components/AdminDashboard.js">System Settings</h3>
              <p className="text-sm text-gray-600" data-id="i0f4q7d8q" data-path="components/AdminDashboard.js">
                Configure global system settings and preferences.
              </p>
            </div>
            
            <div className="mt-4 border-t border-gray-200 pt-4" data-id="h61qpr5n1" data-path="components/AdminDashboard.js">
              <h4 className="text-md font-medium text-gray-700 mb-3" data-id="rn6vy4zw4" data-path="components/AdminDashboard.js">Application Settings</h4>
              
              <div className="space-y-4" data-id="44u3op7ja" data-path="components/AdminDashboard.js">
                <div className="flex items-center justify-between" data-id="yi5hbo2tv" data-path="components/AdminDashboard.js">
                  <div data-id="nngenalzx" data-path="components/AdminDashboard.js">
                    <h5 className="text-sm font-medium text-gray-900" data-id="lnj6thmtk" data-path="components/AdminDashboard.js">Enable User Registration</h5>
                    <p className="text-xs text-gray-500" data-id="6a2hvhyrh" data-path="components/AdminDashboard.js">Allow new users to create accounts</p>
                  </div>
                  <div className="flex items-center" data-id="c2o254kne" data-path="components/AdminDashboard.js">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none" data-id="2c8vmmemu" data-path="components/AdminDashboard.js">
                      <input type="checkbox" id="toggle-registration" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" data-id="ml49jd7az" data-path="components/AdminDashboard.js" />
                      <label htmlFor="toggle-registration" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" data-id="cyghmarh9" data-path="components/AdminDashboard.js"></label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between" data-id="80jlxds4t" data-path="components/AdminDashboard.js">
                  <div data-id="epb5x0rsm" data-path="components/AdminDashboard.js">
                    <h5 className="text-sm font-medium text-gray-900" data-id="izu35eyin" data-path="components/AdminDashboard.js">Activity Saving</h5>
                    <p className="text-xs text-gray-500" data-id="p8ycps5v7" data-path="components/AdminDashboard.js">Allow users to save generated activities</p>
                  </div>
                  <div className="flex items-center" data-id="rz86ok6wm" data-path="components/AdminDashboard.js">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none" data-id="3ozfh1tam" data-path="components/AdminDashboard.js">
                      <input type="checkbox" id="toggle-saving" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" data-id="kp9d12rqj" data-path="components/AdminDashboard.js" />
                      <label htmlFor="toggle-saving" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" data-id="t84zsny41" data-path="components/AdminDashboard.js"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>);

}