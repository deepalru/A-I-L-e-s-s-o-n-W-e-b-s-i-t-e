function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = React.useState(initialMode); // 'login' or 'register'
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    // Reset form when modal opens or mode changes
    if (isOpen) {
      setEmail('');
      setPassword('');
      setName('');
      setError('');
    }
  }, [isOpen, mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (mode === 'login') {
        await handleLogin();
      } else {
        await handleRegister();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    // Simple validation
    if (!email || !password) {
      throw new Error('Please enter both email and password');
    }

    // In a real implementation, this would call your authentication API
    // For now, we'll mock user login with localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u) => u.email === email);

    if (!user || user.password !== password) {
      throw new Error('Invalid email or password');
    }

    // Create a user session
    const session = {
      id: user.id,
      name: user.name,
      email: user.email,
      loggedInAt: new Date().toISOString()
    };

    localStorage.setItem('currentUser', JSON.stringify(session));

    // Close modal and refresh page
    onClose();
    window.location.reload();
  };

  const handleRegister = async () => {
    // Simple validation
    if (!name || !email || !password) {
      throw new Error('Please fill out all fields');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    try {
      // Register the user with the default USER role
      // First user will automatically be assigned ADMIN role in the registerUser function
      const session = await registerUser(name, email, password);

      // Close modal and refresh page
      onClose();
      window.location.reload();
    } catch (error) {
      throw error;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50" data-id="qn7ktiyib" data-path="components/AuthModal.js">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full" data-id="fbfz1w4x8" data-path="components/AuthModal.js">
        <div className="p-6" data-id="2i6o6cxwz" data-path="components/AuthModal.js">
          <div className="flex justify-between items-center mb-4" data-id="mqa82xf1b" data-path="components/AuthModal.js">
            <h3 className="text-xl font-bold text-gray-900" data-id="mtse1nj5y" data-path="components/AuthModal.js">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700" data-id="bxoor2hnq" data-path="components/AuthModal.js">
              <i className="fas fa-times text-xl" data-id="4v3ai2ehe" data-path="components/AuthModal.js"></i>
            </button>
          </div>
          
          {error &&
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700" data-id="jyxdvcdc5" data-path="components/AuthModal.js">
              <p data-id="4bhbwswdb" data-path="components/AuthModal.js">{error}</p>
            </div>
          }
          
          <form onSubmit={handleSubmit} data-id="p4me5rvpd" data-path="components/AuthModal.js">
            <div className="space-y-4" data-id="472fcwjc9" data-path="components/AuthModal.js">
              {mode === 'register' &&
              <div data-id="mqd88q9uo" data-path="components/AuthModal.js">
                  <label className="block text-sm font-medium text-gray-700 mb-1" data-id="7s3yyc8qf" data-path="components/AuthModal.js">
                    Full Name
                  </label>
                  <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name" data-id="9fk2wp8yx" data-path="components/AuthModal.js" />

                </div>
              }
              
              <div data-id="pscjy27o4" data-path="components/AuthModal.js">
                <label className="block text-sm font-medium text-gray-700 mb-1" data-id="y1zhnvml3" data-path="components/AuthModal.js">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email" data-id="obfh0tzpv" data-path="components/AuthModal.js" />

              </div>
              
              <div data-id="uoqiq8m3b" data-path="components/AuthModal.js">
                <label className="block text-sm font-medium text-gray-700 mb-1" data-id="nhhku6apb" data-path="components/AuthModal.js">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder={mode === 'register' ? 'Create a password' : 'Enter your password'} data-id="fh04lpeit" data-path="components/AuthModal.js" />

                {mode === 'register' &&
                <p className="mt-1 text-xs text-gray-500" data-id="rujwveb9t" data-path="components/AuthModal.js">
                    Password must be at least 6 characters
                  </p>
                }
              </div>
            </div>
            
            <div className="mt-6" data-id="tnw59k52a" data-path="components/AuthModal.js">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-id="hiccvegwo" data-path="components/AuthModal.js">

                {isLoading ?
                <>
                    <span className="inline-block animate-spin mr-2" data-id="58topvykc" data-path="components/AuthModal.js">
                      <i className="fas fa-spinner" data-id="igiib5n7a" data-path="components/AuthModal.js"></i>
                    </span>
                    {mode === 'login' ? 'Signing in...' : 'Creating account...'}
                  </> :

                mode === 'login' ? 'Sign In' : 'Create Account'
                }
              </button>
            </div>
          </form>
          
          <div className="mt-4 text-center text-sm" data-id="zu7ymei83" data-path="components/AuthModal.js">
            {mode === 'login' ?
            <p data-id="uad4jtgar" data-path="components/AuthModal.js">
                Don't have an account?{' '}
                <button
                onClick={() => setMode('register')}
                className="text-blue-500 hover:text-blue-700 font-medium" data-id="sl8du3sly" data-path="components/AuthModal.js">

                  Sign up
                </button>
              </p> :

            <p data-id="iif38y0ur" data-path="components/AuthModal.js">
                Already have an account?{' '}
                <button
                onClick={() => setMode('login')}
                className="text-blue-500 hover:text-blue-700 font-medium" data-id="lkvz5vpee" data-path="components/AuthModal.js">

                  Sign in
                </button>
              </p>
            }
          </div>
        </div>
      </div>
    </div>);

}