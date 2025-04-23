function Navbar() {
  const { Link, useLocation } = ReactRouterDOM;
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [showUserDropdown, setShowUserDropdown] = React.useState(false);

  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [authModalMode, setAuthModalMode] = React.useState('login');
  const [showUserProfile, setShowUserProfile] = React.useState(false);
  const [showAISettings, setShowAISettings] = React.useState(false);
  const [showSubscriptionManager, setShowSubscriptionManager] = React.useState(false);

  React.useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      try {
        setUser(JSON.parse(currentUser));
      } catch (err) {
        console.error('Error parsing user data:', err);
      }
    }
  }, []);

  // Make openAISettings available globally for the admin panel
  React.useEffect(() => {
    window.openAISettings = () => setShowAISettings(true);
    return () => {
      window.openAISettings = undefined;
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    setShowUserDropdown(false);
    window.location.reload();
  };

  const openLoginModal = () => {
    setAuthModalMode('login');
    setShowAuthModal(true);
  };

  const openSignupModal = () => {
    setAuthModalMode('register');
    setShowAuthModal(true);
  };

  const handleAuthModalClose = () => {
    setShowAuthModal(false);
  };

  const handleSaveAISettings = (settings) => {
    console.log('AI settings saved:', settings);
    // You may want to show a success notification here
  };

  return (
    <nav className="bg-white shadow-sm" data-id="5epsl3mog" data-path="components/Navbar.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="z25bwwn3v" data-path="components/Navbar.js">
        <div className="flex justify-between h-16" data-id="exkhpz8yw" data-path="components/Navbar.js">
          <div className="flex" data-id="16u3qhwkg" data-path="components/Navbar.js">
            <div className="flex-shrink-0 flex items-center" data-id="zxgl0e6j9" data-path="components/Navbar.js">
              <Link to="/" className="flex items-center" data-id="kae8py25j" data-path="components/Navbar.js">
                <i className="fas fa-child text-primary-600 text-2xl mr-2 text-blue-500" data-id="glldxu5jg" data-path="components/Navbar.js"></i>
                <span className="font-bold text-xl text-gray-800" data-id="7gp1bp3qx" data-path="components/Navbar.js">NurseryGenius</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8" data-id="5s6p6zx07" data-path="components/Navbar.js">
              <Link
                to="/"
                className={`${
                location.pathname === '/' ?
                'border-blue-500 text-gray-900' :
                'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`
                } data-id="odhxlov37" data-path="components/Navbar.js">

                Home
              </Link>
              <Link
                to="/generator"
                className={`${
                location.pathname === '/generator' ?
                'border-blue-500 text-gray-900' :
                'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`
                } data-id="y4vqs8hq7" data-path="components/Navbar.js">

                Create Activity
              </Link>
              <Link
                to="/history"
                className={`${
                location.pathname === '/history' ?
                'border-blue-500 text-gray-900' :
                'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`
                } data-id="nfuqvor25" data-path="components/Navbar.js">

                My Activities
              </Link>
              <Link
                to="/profile"
                className={`${
                location.pathname === '/profile' ?
                'border-blue-500 text-gray-900' :
                'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`
                } data-id="per4gmdx5" data-path="components/Navbar.js">
                <i className="fas fa-user mr-1" data-id="gpsqejwmn" data-path="components/Navbar.js"></i>
                Profile
              </Link>
              <Link
                to="/subscription-plans"
                className={`${
                location.pathname === '/subscription-plans' ?
                'border-blue-500 text-gray-900' :
                'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`
                } data-id="6tnrh7mcf" data-path="components/Navbar.js">
                <i className="fas fa-crown mr-1" data-id="n4yqy26x4" data-path="components/Navbar.js"></i>
                Pricing
              </Link>
              {user && hasPermission(PERMISSIONS.VIEW_ADMIN_PANEL) &&
              <Link
                to="/admin"
                className={`${
                location.pathname === '/admin' ?
                'border-blue-500 text-gray-900' :
                'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`
                } data-id="ki5o0misi" data-path="components/Navbar.js">
                  <i className="fas fa-shield-alt mr-1" data-id="m2p0v4pfe" data-path="components/Navbar.js"></i>
                  Admin
                </Link>
              }
            </div>
          </div>
          
          {/* Desktop menu for logged in users */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center" data-id="m9v8o5rc0" data-path="components/Navbar.js">
            {user ?
            <div className="ml-3 relative" data-id="fulzqgaqk" data-path="components/Navbar.js">
                <div data-id="gi64u53z9" data-path="components/Navbar.js">
                  <button
                  onClick={toggleUserDropdown}
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 items-center" data-id="j7v5tvmqm" data-path="components/Navbar.js">

                    <span className="bg-blue-100 text-blue-800 p-2 rounded-full" data-id="klyuucpc6" data-path="components/Navbar.js">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                    <span className="ml-2 text-gray-700" data-id="gf9ryqsnz" data-path="components/Navbar.js">{user.name}</span>
                    <i className={`fas fa-chevron-down ml-1 text-gray-400 ${showUserDropdown ? 'transform rotate-180' : ''}`} data-id="87niqizhf" data-path="components/Navbar.js"></i>
                  </button>
                </div>
                
                {showUserDropdown &&
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50" data-id="ml3j44krp" data-path="components/Navbar.js">
                    <div className="px-4 py-2 text-xs text-gray-500 border-b" data-id="1eqav8h08" data-path="components/Navbar.js">
                      Signed in as <span className="font-medium text-gray-900" data-id="i3ui21jny" data-path="components/Navbar.js">{user.email}</span>
                    </div>
                    
                    <button
                  onClick={() => {
                    setShowUserProfile(true);
                    setShowUserDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-id="h5k138b3y" data-path="components/Navbar.js">

                      <i className="fas fa-user mr-2 text-gray-500" data-id="gknxgzhe7" data-path="components/Navbar.js"></i> Your Profile
                    </button>
                    
                    {hasPermission(PERMISSIONS.MANAGE_API_SETTINGS) &&
                <button
                  onClick={() => {
                    setShowAISettings(true);
                    setShowUserDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-id="j5z324bgl" data-path="components/Navbar.js">

                        <i className="fas fa-robot mr-2 text-gray-500" data-id="gpe5kys29" data-path="components/Navbar.js"></i> AI Settings
                      </button>
                }
                  
                  {hasPermission(PERMISSIONS.VIEW_ADMIN_PANEL) &&
                <ReactRouterDOM.Link
                  to="/admin"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowUserDropdown(false)} data-id="mzub0l94m" data-path="components/Navbar.js">
                      <i className="fas fa-shield-alt mr-2 text-gray-500" data-id="xvn5qzaso" data-path="components/Navbar.js"></i> Admin Panel
                    </ReactRouterDOM.Link>
                }
                    
                    <Link
                  to="/subscription-plans"
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowUserDropdown(false)} data-id="t3uxctwv6" data-path="components/Navbar.js">
                      <i className="fas fa-crown mr-2 text-gray-500" data-id="ln3k7ytye" data-path="components/Navbar.js"></i> Subscription Plans
                    </Link>
                    <button
                  onClick={() => {
                    const userSub = getUserSubscription();
                    if (userSub) {
                      setShowSubscriptionManager(true);
                      setShowUserDropdown(false);
                    } else {
                      window.location.href = '/subscription-plans';
                    }
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-id="w3rocys7s" data-path="components/Navbar.js">
                      <i className="fas fa-credit-card mr-2 text-gray-500" data-id="3d01ycw8s" data-path="components/Navbar.js"></i> Manage Subscription
                    </button>
                    <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-id="4u2qf9x3e" data-path="components/Navbar.js">

                      <i className="fas fa-sign-out-alt mr-2 text-gray-500" data-id="qem6buyu7" data-path="components/Navbar.js"></i> Sign Out
                    </button>
                  </div>
              }
              </div> :

            <div className="flex items-center space-x-4" data-id="8ejar365n" data-path="components/Navbar.js">
                <button
                onClick={openLoginModal}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm" data-id="qnvm4nmnj" data-path="components/Navbar.js">

                  Sign In
                </button>
                <button
                onClick={openSignupModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm" data-id="wuk028xu8" data-path="components/Navbar.js">

                  Sign Up Free
                </button>
              </div>
            }
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden" data-id="ock5345nh" data-path="components/Navbar.js">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" data-id="job2wynjt" data-path="components/Navbar.js">

              <span className="sr-only" data-id="cpk74l3kn" data-path="components/Navbar.js">Open main menu</span>
              {isMenuOpen ?
              <i className="fas fa-times block h-6 w-6" data-id="946vu8nf6" data-path="components/Navbar.js"></i> :

              <i className="fas fa-bars block h-6 w-6" data-id="pvkpmxuib" data-path="components/Navbar.js"></i>
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen &&
      <div className="sm:hidden" data-id="iey6y4ksy" data-path="components/Navbar.js">
          <div className="pt-2 pb-3 space-y-1" data-id="bj0eptw3l" data-path="components/Navbar.js">
            <Link
            to="/"
            className={`${
            location.pathname === '/' ?
            'bg-blue-50 border-blue-500 text-blue-700' :
            'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`
            }
            onClick={() => setIsMenuOpen(false)} data-id="5z7oz8qbg" data-path="components/Navbar.js">

              Home
            </Link>
            <Link
            to="/generator"
            className={`${
            location.pathname === '/generator' ?
            'bg-blue-50 border-blue-500 text-blue-700' :
            'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`
            }
            onClick={() => setIsMenuOpen(false)} data-id="2679eesey" data-path="components/Navbar.js">

              Create Activity
            </Link>
            <Link
            to="/history"
            className={`${
            location.pathname === '/history' ?
            'bg-blue-50 border-blue-500 text-blue-700' :
            'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`
            }
            onClick={() => setIsMenuOpen(false)} data-id="7ijzw3edy" data-path="components/Navbar.js">

              My Activities
            </Link>
            <Link
            to="/profile"
            className={`${
            location.pathname === '/profile' ?
            'bg-blue-50 border-blue-500 text-blue-700' :
            'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`
            }
            onClick={() => setIsMenuOpen(false)} data-id="mvywhe9er" data-path="components/Navbar.js">
              <i className="fas fa-user mr-2" data-id="yiksretst" data-path="components/Navbar.js"></i>
              Profile
            </Link>
            <Link
            to="/subscription-plans"
            className={`${
            location.pathname === '/subscription-plans' ?
            'bg-blue-50 border-blue-500 text-blue-700' :
            'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`
            }
            onClick={() => setIsMenuOpen(false)} data-id="tnv1ffm71" data-path="components/Navbar.js">
              <i className="fas fa-crown mr-2" data-id="jo11hatd3" data-path="components/Navbar.js"></i>
              Pricing
            </Link>
            
            {user && hasPermission(PERMISSIONS.VIEW_ADMIN_PANEL) &&
          <Link
            to="/admin"
            className={`${
            location.pathname === '/admin' ?
            'bg-blue-50 border-blue-500 text-blue-700' :
            'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium`
            }
            onClick={() => setIsMenuOpen(false)} data-id="dh1p0lzgp" data-path="components/Navbar.js">
                <i className="fas fa-shield-alt mr-2" data-id="w76n2lgw7" data-path="components/Navbar.js"></i>
                Admin Panel
              </Link>
          }
            
            {user ?
          <div className="border-t border-gray-200 mt-4 pt-4" data-id="hs5y78std" data-path="components/Navbar.js">
                <div className="px-4 py-2 flex items-center" data-id="gvr50e7vj" data-path="components/Navbar.js">
                  <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-2" data-id="edmvimtca" data-path="components/Navbar.js">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div data-id="z63zad9sa" data-path="components/Navbar.js">
                    <div className="text-base font-medium text-gray-800" data-id="vdxupuyio" data-path="components/Navbar.js">{user.name}</div>
                    <div className="text-sm text-gray-500" data-id="s9kj720rb" data-path="components/Navbar.js">{user.email}</div>
                  </div>
                </div>
                
                <div className="mt-3 space-y-1" data-id="2dg7pkxt5" data-path="components/Navbar.js">
                  <button
                onClick={() => {
                  setShowUserProfile(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left pl-3 pr-4 py-2 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" data-id="ixksr7pzz" data-path="components/Navbar.js">

                    <i className="fas fa-user mr-2" data-id="oezpakz4u" data-path="components/Navbar.js"></i> Your Profile
                  </button>
                  
                  {hasPermission(PERMISSIONS.MANAGE_API_SETTINGS) &&
              <button
                onClick={() => {
                  setShowAISettings(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left pl-3 pr-4 py-2 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" data-id="nioiq6pk3" data-path="components/Navbar.js">

                        <i className="fas fa-robot mr-2" data-id="sr6s4b0om" data-path="components/Navbar.js"></i> AI Settings
                      </button>
              }
                  
                  <Link
                to="/subscription-plans"
                className="block w-full text-left pl-3 pr-4 py-2 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                onClick={() => setIsMenuOpen(false)} data-id="2fuua1v3p" data-path="components/Navbar.js">
                    <i className="fas fa-crown mr-2" data-id="anh9pftro" data-path="components/Navbar.js"></i> Subscription Plans
                  </Link>
                  <button
                onClick={() => {
                  const userSub = getUserSubscription();
                  if (userSub) {
                    setShowSubscriptionManager(true);
                    setIsMenuOpen(false);
                  } else {
                    window.location.href = '/subscription-plans';
                  }
                }}
                className="block w-full text-left pl-3 pr-4 py-2 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" data-id="qwxjhslq1" data-path="components/Navbar.js">
                    <i className="fas fa-credit-card mr-2" data-id="n4nodrlf3" data-path="components/Navbar.js"></i> Manage Subscription
                  </button>
                  <button
                onClick={handleLogout}
                className="block w-full text-left pl-3 pr-4 py-2 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" data-id="9bzbcf63r" data-path="components/Navbar.js">

                    <i className="fas fa-sign-out-alt mr-2" data-id="kh6sp0k5j" data-path="components/Navbar.js"></i> Sign Out
                  </button>
                </div>
              </div> :

          <div className="mt-4 space-y-3 pl-3 pr-4" data-id="scu7ie2i5" data-path="components/Navbar.js">
                <button
              onClick={() => {
                setAuthModalMode('login');
                setShowAuthModal(true);
                setIsMenuOpen(false);
              }}
              className="w-full text-left text-blue-600 font-medium py-2" data-id="ek7g3iss4" data-path="components/Navbar.js">

                  Sign In
                </button>
                <button
              onClick={() => {
                setAuthModalMode('register');
                setShowAuthModal(true);
                setIsMenuOpen(false);
              }}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm" data-id="uoqqxaniu" data-path="components/Navbar.js">

                  Sign Up Free
                </button>
              </div>
          }
          </div>
        </div>
      }
      
      {/* Authentication Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={handleAuthModalClose}
        initialMode={authModalMode} data-id="8pybm8arp" data-path="components/Navbar.js" />

      
      {/* User Profile Modal */}
      <UserProfile
        isOpen={showUserProfile}
        onClose={() => setShowUserProfile(false)} data-id="65gk2r0nz" data-path="components/Navbar.js" />

      
      {/* AI Settings Modal */}
      <AISettingsModal
        isOpen={showAISettings}
        onClose={() => setShowAISettings(false)}
        onSave={handleSaveAISettings} data-id="12vhmzd2y" data-path="components/Navbar.js" />
        
      {/* Subscription Manager Modal */}
      <SubscriptionManager
        isOpen={showSubscriptionManager}
        onClose={() => setShowSubscriptionManager(false)} data-id="9n66cfcyi" data-path="components/Navbar.js" />

    </nav>);

}