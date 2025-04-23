function CreateTestAdmin() {
  const [created, setCreated] = React.useState(false);
  const [error, setError] = React.useState('');

  const createAdmin = async () => {
    try {
      // Create a test admin user
      const adminUser = {
        id: 'admin-1',
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'admin123',
        role: USER_ROLES.ADMIN,
        createdAt: new Date().toISOString()
      };

      // Get existing users
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      // Check if admin already exists
      const existingAdmin = users.find((user) => user.email === adminUser.email);
      if (existingAdmin) {
        setError('Admin user already exists');
        return;
      }

      // Add admin to users
      users.push(adminUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Create session
      const session = {
        id: adminUser.id,
        name: adminUser.name,
        email: adminUser.email,
        role: adminUser.role,
        loggedInAt: new Date().toISOString()
      };

      localStorage.setItem('currentUser', JSON.stringify(session));

      setCreated(true);
      setTimeout(() => {
        window.location.href = '/admin';
      }, 1000);
    } catch (err) {
      setError(err.message || 'Failed to create admin user');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-lg z-50" data-id="k4ihdk24g" data-path="components/CreateTestAdmin.js">
      <h3 className="text-lg font-medium mb-3" data-id="84ot5oc5o" data-path="components/CreateTestAdmin.js">Admin Access Tool</h3>
      
      {error &&
      <div className="p-2 mb-3 bg-red-100 text-red-800 rounded" data-id="23ifp2n10" data-path="components/CreateTestAdmin.js">
          {error}
        </div>
      }
      
      {created ?
      <div className="p-2 mb-3 bg-green-100 text-green-800 rounded" data-id="f9kpsv0cg" data-path="components/CreateTestAdmin.js">
          Admin user created! Redirecting...
        </div> :

      <button
        onClick={createAdmin}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" data-id="iaq1neoca" data-path="components/CreateTestAdmin.js">

          Create & Login as Admin
        </button>
      }
    </div>);

}