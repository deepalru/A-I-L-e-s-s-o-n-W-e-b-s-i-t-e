function ProfilePage() {
  const navigate = ReactRouterDOM.useNavigate();
  const [activeSection, setActiveSection] = React.useState('account');
  const [showSubscriptionManager, setShowSubscriptionManager] = React.useState(false);
  const [user, setUser] = React.useState(null);

  // Form state for account settings
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState({ type: '', text: '' });

  // Password change state
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  // User activity data
  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    // Check if user is logged in
    const currentUser = getCurrentUser();
    if (!currentUser) {
      navigate('/');
      return;
    }

    setUser(currentUser);
    setName(currentUser.name || '');
    setEmail(currentUser.email || '');

    // Load user's saved activities
    const savedActivities = getUserSavedLessons(currentUser.id) || [];
    setActivities(savedActivities);

  }, [navigate]);

  // Get the user's subscription
  const userSubscription = getUserSubscription();
  const planDetails = userSubscription ?
  getSubscriptionPlanDetails(userSubscription.planId) :
  SUBSCRIPTION_PLANS.FREE;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    setIsLoading(true);

    try {
      // Simple validation
      if (!name || !email) {
        throw new Error('Name and email are required');
      }

      // In a real implementation, this would call your API
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const currentUserIndex = users.findIndex((u) => u.id === user.id);

      if (currentUserIndex === -1) {
        throw new Error('User not found');
      }

      // Update user data
      users[currentUserIndex].name = name;

      // Only update email if it's changed
      if (email !== users[currentUserIndex].email) {
        // Check if new email is already in use by another user
        if (users.some((u) => u.email === email && u.id !== user.id)) {
          throw new Error('Email already in use by another account');
        }
        users[currentUserIndex].email = email;
      }

      // Update localStorage
      localStorage.setItem('users', JSON.stringify(users));

      // Update current user session
      const updatedUser = { ...user, name, email };
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setUser(updatedUser);

      setMessage({ type: 'success', text: 'Profile updated successfully' });
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    setIsLoading(true);

    try {
      // Simple validation
      if (!currentPassword || !newPassword || !confirmPassword) {
        throw new Error('All password fields are required');
      }

      if (newPassword !== confirmPassword) {
        throw new Error('New passwords do not match');
      }

      if (newPassword.length < 6) {
        throw new Error('New password must be at least 6 characters');
      }

      // In a real implementation, this would call your API
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const currentUserIndex = users.findIndex((u) => u.id === user.id);

      if (currentUserIndex === -1) {
        throw new Error('User not found');
      }

      // Verify current password
      if (users[currentUserIndex].password !== currentPassword) {
        throw new Error('Current password is incorrect');
      }

      // Update password
      users[currentUserIndex].password = newPassword;

      // Update localStorage
      localStorage.setItem('users', JSON.stringify(users));

      // Clear password fields
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');

      setMessage({ type: 'success', text: 'Password updated successfully' });
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-96" data-id="ykg6erqq9" data-path="pages/Profile.js">
        <div className="animate-spin mr-2" data-id="0ozs6k5q5" data-path="pages/Profile.js">
          <i className="fas fa-spinner fa-2x text-blue-500" data-id="ffjerph8u" data-path="pages/Profile.js"></i>
        </div>
        <p className="text-lg text-gray-600" data-id="sws5o3qo4" data-path="pages/Profile.js">Loading profile...</p>
      </div>);

  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" data-id="i7sct5en7" data-path="pages/Profile.js">
      <div className="md:flex md:items-center md:justify-between mb-8" data-id="rsb3hie6k" data-path="pages/Profile.js">
        <div className="flex-1 min-w-0" data-id="zispsrk2p" data-path="pages/Profile.js">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl" data-id="wj7zkyabx" data-path="pages/Profile.js">
            User Profile
          </h1>
          <p className="mt-1 text-sm text-gray-500" data-id="3q8x8gfwi" data-path="pages/Profile.js">
            Manage your account settings and view your activity history
          </p>
        </div>
        <div className="mt-4 flex md:mt-0" data-id="osk6can9n" data-path="pages/Profile.js">
          <button
            onClick={handleLogout}
            className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="oty7j6v9d" data-path="pages/Profile.js">

            <i className="fas fa-sign-out-alt mr-2" data-id="nxt52c25h" data-path="pages/Profile.js"></i>
            Sign out
          </button>
        </div>
      </div>
      
      {message.text &&
      <div
        className={`mb-6 p-4 ${
        message.type === 'error' ?
        'bg-red-50 text-red-700 border-l-4 border-red-500' :
        'bg-green-50 text-green-700 border-l-4 border-green-500'}`
        } data-id="zpf3441tg" data-path="pages/Profile.js">

          <p data-id="f79z0m4bv" data-path="pages/Profile.js">{message.text}</p>
        </div>
      }
      
      <div className="flex flex-col md:flex-row gap-6" data-id="ay47v43uv" data-path="pages/Profile.js">
        {/* Sidebar navigation */}
        <div className="w-full md:w-64 flex-shrink-0" data-id="6osakozec" data-path="pages/Profile.js">
          <div className="bg-white shadow rounded-lg overflow-hidden" data-id="41k3v67n0" data-path="pages/Profile.js">
            <div className="bg-blue-500 p-4 text-white" data-id="j7l49b1da" data-path="pages/Profile.js">
              <div className="flex items-center" data-id="zst0yus26" data-path="pages/Profile.js">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center" data-id="35m0ce9qz" data-path="pages/Profile.js">
                  <i className="fas fa-user" data-id="h98u086te" data-path="pages/Profile.js"></i>
                </div>
                <div className="ml-3" data-id="4s3ymzhiz" data-path="pages/Profile.js">
                  <p className="text-base font-medium" data-id="spelh5enm" data-path="pages/Profile.js">{user.name}</p>
                  <p className="text-sm font-light" data-id="119l98ie1" data-path="pages/Profile.js">{user.email}</p>
                </div>
              </div>
              <div className="mt-3" data-id="izlv3vybr" data-path="pages/Profile.js">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-200 text-blue-800" data-id="7iiicyc4g" data-path="pages/Profile.js">
                  <i className={`fas ${
                  user.role === USER_ROLES.ADMIN ? 'fa-shield-alt' :
                  user.role === USER_ROLES.MANAGER ? 'fa-user-tie' :
                  user.role === USER_ROLES.EDITOR ? 'fa-edit' : 'fa-user'} mr-1`
                  } data-id="zedxv5z53" data-path="pages/Profile.js"></i>
                  {user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'User'}
                </span>
              </div>
            </div>
            
            <nav className="py-2" data-id="flfhl0foi" data-path="pages/Profile.js">
              <ul data-id="pt0el7tzv" data-path="pages/Profile.js">
                <li data-id="bfxatuaj8" data-path="pages/Profile.js">
                  <button
                    onClick={() => setActiveSection('account')}
                    className={`flex items-center w-full px-4 py-2 text-left ${
                    activeSection === 'account' ?
                    'bg-gray-100 text-blue-600 font-medium' :
                    'text-gray-700 hover:bg-gray-50'}`
                    } data-id="4kuzqivsc" data-path="pages/Profile.js">

                    <i className="fas fa-user-circle w-5 mr-2" data-id="364634qrh" data-path="pages/Profile.js"></i>
                    Account Settings
                  </button>
                </li>
                <li data-id="9m4w1nfih" data-path="pages/Profile.js">
                  <button
                    onClick={() => setActiveSection('security')}
                    className={`flex items-center w-full px-4 py-2 text-left ${
                    activeSection === 'security' ?
                    'bg-gray-100 text-blue-600 font-medium' :
                    'text-gray-700 hover:bg-gray-50'}`
                    } data-id="07viz6mmu" data-path="pages/Profile.js">

                    <i className="fas fa-lock w-5 mr-2" data-id="t0xwqancb" data-path="pages/Profile.js"></i>
                    Security
                  </button>
                </li>
                <li data-id="mvd8mij7o" data-path="pages/Profile.js">
                  <button
                    onClick={() => setActiveSection('subscription')}
                    className={`flex items-center w-full px-4 py-2 text-left ${
                    activeSection === 'subscription' ?
                    'bg-gray-100 text-blue-600 font-medium' :
                    'text-gray-700 hover:bg-gray-50'}`
                    } data-id="kx08hgrtb" data-path="pages/Profile.js">

                    <i className="fas fa-credit-card w-5 mr-2" data-id="1s3pchkg7" data-path="pages/Profile.js"></i>
                    Subscription
                  </button>
                </li>
                <li data-id="1y68holnj" data-path="pages/Profile.js">
                  <button
                    onClick={() => setActiveSection('activities')}
                    className={`flex items-center w-full px-4 py-2 text-left ${
                    activeSection === 'activities' ?
                    'bg-gray-100 text-blue-600 font-medium' :
                    'text-gray-700 hover:bg-gray-50'}`
                    } data-id="2lkpg5di9" data-path="pages/Profile.js">

                    <i className="fas fa-history w-5 mr-2" data-id="5je5vdyl8" data-path="pages/Profile.js"></i>
                    Your Activities
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex-1" data-id="b9b7c0psu" data-path="pages/Profile.js">
          <div className="bg-white shadow rounded-lg p-6" data-id="vphcnjfvp" data-path="pages/Profile.js">
            {/* Account Settings */}
            {activeSection === 'account' &&
            <div data-id="bhflaw5nk" data-path="pages/Profile.js">
                <h2 className="text-lg font-medium text-gray-900 mb-4" data-id="qkrwye3ry" data-path="pages/Profile.js">Account Information</h2>
                <form onSubmit={handleUpdateProfile} data-id="stw7jmuus" data-path="pages/Profile.js">
                  <div className="space-y-4" data-id="mmj8zpi3w" data-path="pages/Profile.js">
                    <div data-id="deqdgotoz" data-path="pages/Profile.js">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" data-id="a082aktz8" data-path="pages/Profile.js">
                        Full Name
                      </label>
                      <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="myxhak3ft" data-path="pages/Profile.js" />

                    </div>
                    
                    <div data-id="oegbpusaz" data-path="pages/Profile.js">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" data-id="y17vc1d7g" data-path="pages/Profile.js">
                        Email Address
                      </label>
                      <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="k5afjfini" data-path="pages/Profile.js" />

                    </div>
                    
                    <div data-id="b39e91w2n" data-path="pages/Profile.js">
                      <label className="block text-sm font-medium text-gray-700 mb-1" data-id="2nkyhak5v" data-path="pages/Profile.js">
                        Member Since
                      </label>
                      <p className="text-gray-700" data-id="x6uzp6vj5" data-path="pages/Profile.js">
                        {new Date(user.loggedInAt || Date.now()).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6" data-id="ggoinbwhz" data-path="pages/Profile.js">
                    <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="w9r32agei" data-path="pages/Profile.js">

                      {isLoading ?
                    <>
                          <span className="inline-block animate-spin mr-2" data-id="hdjecoixx" data-path="pages/Profile.js">
                            <i className="fas fa-spinner" data-id="v8om16bar" data-path="pages/Profile.js"></i>
                          </span>
                          Updating...
                        </> :

                    'Save Changes'
                    }
                    </button>
                  </div>
                </form>
              </div>
            }
            
            {/* Security Settings */}
            {activeSection === 'security' &&
            <div data-id="znbyjw1hy" data-path="pages/Profile.js">
                <h2 className="text-lg font-medium text-gray-900 mb-4" data-id="6gtebqmux" data-path="pages/Profile.js">Security Settings</h2>
                <form onSubmit={handlePasswordChange} data-id="x9x8hh0tr" data-path="pages/Profile.js">
                  <div className="space-y-4" data-id="cv8f1jroo" data-path="pages/Profile.js">
                    <div data-id="4o6xkhkur" data-path="pages/Profile.js">
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1" data-id="89cihox3m" data-path="pages/Profile.js">
                        Current Password
                      </label>
                      <input
                      id="currentPassword"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="tzgnfxjx7" data-path="pages/Profile.js" />

                    </div>
                    
                    <div data-id="lq2sh6bms" data-path="pages/Profile.js">
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1" data-id="w3mxk730z" data-path="pages/Profile.js">
                        New Password
                      </label>
                      <input
                      id="newPassword"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="worufv24z" data-path="pages/Profile.js" />

                      <p className="mt-1 text-xs text-gray-500" data-id="10jufpwdg" data-path="pages/Profile.js">
                        Password must be at least 6 characters
                      </p>
                    </div>
                    
                    <div data-id="pvsjp2ki3" data-path="pages/Profile.js">
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1" data-id="p3w091dzj" data-path="pages/Profile.js">
                        Confirm New Password
                      </label>
                      <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="flit9sh14" data-path="pages/Profile.js" />

                    </div>
                  </div>
                  
                  <div className="mt-6" data-id="wja4qp4tx" data-path="pages/Profile.js">
                    <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="11zsncg3w" data-path="pages/Profile.js">

                      {isLoading ?
                    <>
                          <span className="inline-block animate-spin mr-2" data-id="jf5e90uo8" data-path="pages/Profile.js">
                            <i className="fas fa-spinner" data-id="6o95bac35" data-path="pages/Profile.js"></i>
                          </span>
                          Updating...
                        </> :

                    'Change Password'
                    }
                    </button>
                  </div>
                </form>
              </div>
            }
            
            {/* Subscription Management */}
            {activeSection === 'subscription' &&
            <div data-id="6vz7zs40l" data-path="pages/Profile.js">
                <h2 className="text-lg font-medium text-gray-900 mb-4" data-id="qozrfrvqo" data-path="pages/Profile.js">Subscription Management</h2>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6" data-id="pkp9ns5av" data-path="pages/Profile.js">
                  <div className="flex justify-between items-center" data-id="6psdnra8c" data-path="pages/Profile.js">
                    <div data-id="3koiedbos" data-path="pages/Profile.js">
                      <h4 className="text-lg font-medium text-gray-900" data-id="0hvhyx02c" data-path="pages/Profile.js">Current Plan</h4>
                      <p className="text-gray-600" data-id="2jg39zugn" data-path="pages/Profile.js">{planDetails.name}</p>
                    </div>
                    <div data-id="eupdhj7fo" data-path="pages/Profile.js">
                      <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      userSubscription?.status === 'active' ?
                      'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'}`
                      } data-id="7kdpt3gco" data-path="pages/Profile.js">

                        {userSubscription?.status === 'active' ? 'Active' : 'Canceled'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" data-id="a67r4fh3l" data-path="pages/Profile.js">
                  <div className="border border-gray-200 rounded-lg p-4" data-id="5yddtl5ie" data-path="pages/Profile.js">
                    <h5 className="text-sm font-medium text-gray-500" data-id="xycvo4old" data-path="pages/Profile.js">Billing Cycle</h5>
                    <p className="text-gray-900 mt-1" data-id="jmn6l1o4r" data-path="pages/Profile.js">{userSubscription?.billingCycle ?
                    `${userSubscription.billingCycle.charAt(0).toUpperCase()}${userSubscription.billingCycle.slice(1)}` : 'N/A'}</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4" data-id="qffzwjp1m" data-path="pages/Profile.js">
                    <h5 className="text-sm font-medium text-gray-500" data-id="3m0b2ihx1" data-path="pages/Profile.js">Price</h5>
                    <p className="text-gray-900 mt-1" data-id="yfm1n6vqb" data-path="pages/Profile.js">
                      {planDetails.priceDisplay}
                      {userSubscription?.billingCycle &&
                    <span className="text-gray-500 text-sm" data-id="leqmpc4m0" data-path="pages/Profile.js">
                          {userSubscription.billingCycle === 'annual' ? '/year' : '/month'}
                        </span>
                    }
                    </p>
                  </div>
                </div>
                
                {userSubscription?.planId === 'free' ?
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6" data-id="3uqu3nm0m" data-path="pages/Profile.js">
                    <div className="flex items-start" data-id="ezpghkdpb" data-path="pages/Profile.js">
                      <div className="flex-shrink-0" data-id="lt4z8q8h1" data-path="pages/Profile.js">
                        <i className="fas fa-info-circle text-blue-500 mt-0.5" data-id="rg0uv174j" data-path="pages/Profile.js"></i>
                      </div>
                      <div className="ml-3" data-id="ppjsaeane" data-path="pages/Profile.js">
                        <h3 className="text-sm font-medium text-blue-800" data-id="21siylaqm" data-path="pages/Profile.js">Free Plan Limitations</h3>
                        <div className="mt-2 text-sm text-blue-700" data-id="n7180jsem" data-path="pages/Profile.js">
                          <p data-id="a2rv29da6" data-path="pages/Profile.js">Your free plan includes 5 activities per day and limited features. Upgrade to unlock premium capabilities!</p>
                        </div>
                      </div>
                    </div>
                  </div> :

              <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6" data-id="mt1avw55a" data-path="pages/Profile.js">
                    <div className="flex items-start" data-id="9tu2duboy" data-path="pages/Profile.js">
                      <div className="flex-shrink-0" data-id="rhdc7wnh6" data-path="pages/Profile.js">
                        <i className="fas fa-check-circle text-green-500 mt-0.5" data-id="0jwili5nc" data-path="pages/Profile.js"></i>
                      </div>
                      <div className="ml-3" data-id="ckdi64135" data-path="pages/Profile.js">
                        <h3 className="text-sm font-medium text-green-800" data-id="2ta5wpqwm" data-path="pages/Profile.js">You're on the {planDetails.name} Plan</h3>
                        <div className="mt-2 text-sm text-green-700" data-id="tnwhb2vkr" data-path="pages/Profile.js">
                          <p data-id="qxzpk59rn" data-path="pages/Profile.js">You have access to {planDetails.name.toLowerCase()} level features and benefits.</p>
                        </div>
                      </div>
                    </div>
                  </div>
              }
                
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4" data-id="f0r5ubker" data-path="pages/Profile.js">
                  <button
                  onClick={() => setShowSubscriptionManager(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700" data-id="7zjop8f7k" data-path="pages/Profile.js">

                    {planDetails.id === 'free' ? 'Upgrade Plan' : 'Manage Plan'}
                  </button>
                  
                  {userSubscription?.planId !== 'free' && userSubscription?.status === 'active' &&
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to cancel your subscription?')) {
                      cancelSubscription();
                      setMessage({ type: 'success', text: 'Your subscription has been canceled. You will have access until the end of your billing period.' });
                    }
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50" data-id="wwaa1tlyz" data-path="pages/Profile.js">

                      Cancel Subscription
                    </button>
                }
                </div>
              </div>
            }
            
            {/* User Activities */}
            {activeSection === 'activities' &&
            <div data-id="f3079sxra" data-path="pages/Profile.js">
                <h2 className="text-lg font-medium text-gray-900 mb-4" data-id="s3modro0u" data-path="pages/Profile.js">Your Activities</h2>
                
                {activities.length === 0 ?
              <div className="text-center py-10 border-2 border-dashed border-gray-300 rounded-lg" data-id="o10ftfw66" data-path="pages/Profile.js">
                    <i className="fas fa-history text-gray-400 text-4xl mb-3" data-id="zdwg7rd7d" data-path="pages/Profile.js"></i>
                    <p className="text-gray-500" data-id="j0ehs0hks" data-path="pages/Profile.js">You haven't created any activities yet.</p>
                    <ReactRouterDOM.Link
                  to="/generator"
                  className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="fzcmf003g" data-path="pages/Profile.js">

                      Create Your First Activity
                    </ReactRouterDOM.Link>
                  </div> :

              <div className="space-y-4" data-id="n5qokf9kd" data-path="pages/Profile.js">
                    {activities.map((activity, index) =>
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow" data-id="mpeybvx91" data-path="pages/Profile.js">
                        <div className="flex justify-between items-start" data-id="aurw9hu4x" data-path="pages/Profile.js">
                          <div data-id="8ul1g59uh" data-path="pages/Profile.js">
                            <h3 className="text-lg font-medium text-gray-900" data-id="7gv9gudfr" data-path="pages/Profile.js">{activity.title || 'Untitled Activity'}</h3>
                            <p className="text-sm text-gray-500" data-id="wct984e79" data-path="pages/Profile.js">
                              {activity.subject} • Age: {activity.ageGroup} • {activity.duration} minutes
                            </p>
                          </div>
                          <span className="text-xs text-gray-400" data-id="a8uivktqs" data-path="pages/Profile.js">
                            {new Date(activity.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="mt-2" data-id="symcb05t1" data-path="pages/Profile.js">
                          <p className="text-gray-600 line-clamp-2" data-id="lzsjeltek" data-path="pages/Profile.js">
                            {activity.description || 'No description provided.'}
                          </p>
                        </div>
                        <div className="mt-3 flex justify-end space-x-2" data-id="pw44a3lxx" data-path="pages/Profile.js">
                          <button
                      className="px-3 py-1 bg-white border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50"
                      onClick={() => {




                        // View activity implementation
                      }} data-id="vwnokwxtr" data-path="pages/Profile.js">
                            <i className="fas fa-eye mr-1" data-id="13sqnaors" data-path="pages/Profile.js"></i> View
                          </button>
                          <button className="px-3 py-1 bg-white border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50" onClick={() => {



                        // Edit activity implementation
                      }} data-id="udombeb41" data-path="pages/Profile.js">
                            <i className="fas fa-edit mr-1" data-id="6xsxj4rrs" data-path="pages/Profile.js"></i> Edit
                          </button>
                        </div>
                      </div>)}
                  </div>}
              </div>}
          </div>
        </div>
      </div>
      
      {/* Subscription Manager Modal */}
      {showSubscriptionManager &&
      <SubscriptionManager
        isOpen={showSubscriptionManager}
        onClose={() => setShowSubscriptionManager(false)} data-id="6219gjxhy" data-path="pages/Profile.js" />

      }
    </div>);

}