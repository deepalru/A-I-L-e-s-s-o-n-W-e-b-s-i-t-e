function UserProfile({ isOpen, onClose }) {
  const [user, setUser] = React.useState(null);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [successMsg, setSuccessMsg] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('profile'); // 'profile' or 'password'

  React.useEffect(() => {
    // Load user data when modal opens
    if (isOpen) {
      loadUserData();
    }
  }, [isOpen]);

  const loadUserData = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setUser(currentUser);
      setName(currentUser.name || '');
      setEmail(currentUser.email || '');
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setIsLoading(true);

    try {
      // Simple validation
      if (!name || !email) {
        throw new Error('Name and email are required');
      }

      // In a real implementation, this would call your API
      // For now, we'll mock with localStorage
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

      setSuccessMsg('Profile updated successfully');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
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
      // For now, we'll mock with localStorage
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

      setSuccessMsg('Password updated successfully');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50" data-id="65u8b2ume" data-path="components/UserProfile.js">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto" data-id="42nspqfar" data-path="components/UserProfile.js">
        <div className="p-6" data-id="iq6qtfzaz" data-path="components/UserProfile.js">
          <div className="flex justify-between items-center mb-4" data-id="au2uct4jg" data-path="components/UserProfile.js">
            <h3 className="text-xl font-bold text-gray-900" data-id="oxwxlou0q" data-path="components/UserProfile.js">User Profile</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700" data-id="nh67olxiv" data-path="components/UserProfile.js">
              <i className="fas fa-times text-xl" data-id="q0h7m3885" data-path="components/UserProfile.js"></i>
            </button>
          </div>
          
          {/* Tab navigation */}
          <div className="border-b border-gray-200 mb-6" data-id="e8l2r94hk" data-path="components/UserProfile.js">
            <nav className="-mb-px flex space-x-6" data-id="h1r32fvcf" data-path="components/UserProfile.js">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'profile' ?
                'border-blue-500 text-blue-600' :
                'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
                } data-id="ks807kdby" data-path="components/UserProfile.js">

                <i className="fas fa-user mr-2" data-id="z6jsrjqza" data-path="components/UserProfile.js"></i>
                Profile Information
              </button>
              <button
                onClick={() => setActiveTab('password')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'password' ?
                'border-blue-500 text-blue-600' :
                'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
                } data-id="0jm7k2pae" data-path="components/UserProfile.js">

                <i className="fas fa-lock mr-2" data-id="j08j2folq" data-path="components/UserProfile.js"></i>
                Change Password
              </button>
            </nav>
          </div>
          
          {error &&
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700" data-id="w7liw6a8l" data-path="components/UserProfile.js">
              <p data-id="njnfl81xa" data-path="components/UserProfile.js">{error}</p>
            </div>
          }
          
          {successMsg &&
          <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700" data-id="nrdyj02v7" data-path="components/UserProfile.js">
              <p data-id="zxosepxro" data-path="components/UserProfile.js">{successMsg}</p>
            </div>
          }
          
          {/* Profile Tab */}
          {activeTab === 'profile' &&
          <form onSubmit={handleUpdateProfile} data-id="4qquvkrrl" data-path="components/UserProfile.js">
              <div className="space-y-4" data-id="pk68q7dw8" data-path="components/UserProfile.js">
                <div data-id="ygbah792t" data-path="components/UserProfile.js">
                  <label className="block text-sm font-medium text-gray-700 mb-1" data-id="msemdz2mh" data-path="components/UserProfile.js">
                    Full Name
                  </label>
                  <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="tii6lknyg" data-path="components/UserProfile.js" />

                </div>
                
                <div data-id="zweqnta8w" data-path="components/UserProfile.js">
                  <label className="block text-sm font-medium text-gray-700 mb-1" data-id="hsyqdnbxw" data-path="components/UserProfile.js">
                    Email Address
                  </label>
                  <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="lpf78y823" data-path="components/UserProfile.js" />

                </div>
                
                <div data-id="3klqh0jqt" data-path="components/UserProfile.js">
                  <label className="block text-sm font-medium text-gray-700 mb-1" data-id="0rqzp03wu" data-path="components/UserProfile.js">
                    Account Role
                  </label>
                  <div className="flex items-center" data-id="rwus71shp" data-path="components/UserProfile.js">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: user.role === USER_ROLES.ADMIN ? '#EFF6FF' :
                    user.role === USER_ROLES.MANAGER ? '#F0FDF4' :
                    user.role === USER_ROLES.EDITOR ? '#FEF3C7' : '#F3F4F6',
                    color: user.role === USER_ROLES.ADMIN ? '#1E40AF' :
                    user.role === USER_ROLES.MANAGER ? '#166534' :
                    user.role === USER_ROLES.EDITOR ? '#92400E' : '#4B5563'
                  }} data-id="bpgwl4gvq" data-path="components/UserProfile.js">
                      <i className={`fas ${user.role === USER_ROLES.ADMIN ? 'fa-shield-alt' :
                    user.role === USER_ROLES.MANAGER ? 'fa-user-tie' :
                    user.role === USER_ROLES.EDITOR ? 'fa-edit' : 'fa-user'} mr-1`} data-id="8fbziz01f" data-path="components/UserProfile.js"></i>
                      {user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'User'}
                    </span>
                    <span className="ml-2 text-xs text-gray-500" data-id="oqme03xbf" data-path="components/UserProfile.js">Role changes can only be made by administrators</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6" data-id="nxqlou9kx" data-path="components/UserProfile.js">
                <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="lzqwnjotp" data-path="components/UserProfile.js">

                  {isLoading ?
                <>
                      <span className="inline-block animate-spin mr-2" data-id="4envydrto" data-path="components/UserProfile.js">
                        <i className="fas fa-spinner" data-id="fjx9fxd2k" data-path="components/UserProfile.js"></i>
                      </span>
                      Updating...
                    </> :

                'Update Profile'
                }
                </button>
              </div>
            </form>
          }
          
          {/* Password Tab */}
          {activeTab === 'password' &&
          <form onSubmit={handleUpdatePassword} data-id="grf3fv1df" data-path="components/UserProfile.js">
              <div className="space-y-4" data-id="85jlb232y" data-path="components/UserProfile.js">
                <div data-id="no8uqcyaz" data-path="components/UserProfile.js">
                  <label className="block text-sm font-medium text-gray-700 mb-1" data-id="mj77e5eku" data-path="components/UserProfile.js">
                    Current Password
                  </label>
                  <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="ndfxwakrt" data-path="components/UserProfile.js" />

                </div>
                
                <div data-id="bmgeqgdq2" data-path="components/UserProfile.js">
                  <label className="block text-sm font-medium text-gray-700 mb-1" data-id="3c445gxri" data-path="components/UserProfile.js">
                    New Password
                  </label>
                  <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="a4avpobi0" data-path="components/UserProfile.js" />

                  <p className="mt-1 text-xs text-gray-500" data-id="vcap6bd8o" data-path="components/UserProfile.js">
                    Password must be at least 6 characters
                  </p>
                </div>
                
                <div data-id="9ny9zg3do" data-path="components/UserProfile.js">
                  <label className="block text-sm font-medium text-gray-700 mb-1" data-id="uzouho06n" data-path="components/UserProfile.js">
                    Confirm New Password
                  </label>
                  <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" data-id="y61uvu0oz" data-path="components/UserProfile.js" />

                </div>
              </div>
              
              <div className="mt-6" data-id="rhhbjdxdq" data-path="components/UserProfile.js">
                <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="lh0yr62vs" data-path="components/UserProfile.js">

                  {isLoading ?
                <>
                      <span className="inline-block animate-spin mr-2" data-id="bz053lynh" data-path="components/UserProfile.js">
                        <i className="fas fa-spinner" data-id="u0867uil8" data-path="components/UserProfile.js"></i>
                      </span>
                      Updating...
                    </> :

                'Update Password'
                }
                </button>
              </div>
            </form>
          }
        </div>
      </div>
    </div>);

}