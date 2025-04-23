function Home() {
  const { Link } = ReactRouterDOM;

  // Get current user and subscription info
  const currentUser = getCurrentUser();
  const userSubscription = getUserSubscription();
  const planDetails = userSubscription ?
  getSubscriptionPlanDetails(userSubscription.planId) :
  SUBSCRIPTION_PLANS.FREE;

  // Check if user is logged in and get remaining activities for free users
  const isLoggedIn = !!currentUser;
  const remainingActivities = isLoggedIn && isFreePlan() ? getRemainingActivities() : null;

  return (
    <div data-id="lfifu4ac5" data-path="pages/Home.js">
      {/* Hero Section - Modern Version */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white py-24" data-id="vnflfkjms" data-path="pages/Home.js">
        {/* Background Design Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0" data-id="9037pxarp" data-path="pages/Home.js">
          {/* Animated circles */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" data-id="oer8xuue6" data-path="pages/Home.js"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" data-id="n22gsnkru" data-path="pages/Home.js"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" data-id="ob43i7lbo" data-path="pages/Home.js"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.4%27%3E%3Cpath opacity=%27.5%27 d=%27M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%27 /%3E%3C/g%3E%3C/g%3E%3C/svg%3E')", backgroundSize: '50px 50px' }} data-id="vay8cea9h" data-path="pages/Home.js"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-id="nuqk7d5xv" data-path="pages/Home.js">
          <div className="md:flex md:items-center md:justify-between" data-id="dgup536f9" data-path="pages/Home.js">
            <div className="md:w-1/2 mb-10 md:mb-0" data-id="m89o2pl7y" data-path="pages/Home.js">
              <div className="flex items-center mb-4" data-id="f89l0ah59" data-path="pages/Home.js">
                <span className="bg-yellow-400 text-blue-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider" data-id="5e5ibcaoe" data-path="pages/Home.js">AI-Powered</span>
                <span className="ml-3 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-bold" data-id="plw3r308a" data-path="pages/Home.js">Early Childhood Education</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6" data-id="j5pa6iumu" data-path="pages/Home.js">
                Nursery School <br data-id="rbzdoja3m" data-path="pages/Home.js" />
                <span className="relative" data-id="ozvxeznxk" data-path="pages/Home.js">Activity <span className="relative inline-block" data-id="gf739c2kc" data-path="pages/Home.js">Creator
                  <svg className="absolute -bottom-1 w-full" viewBox="0 0 138 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-id="vdu14q0nq" data-path="pages/Home.js">
                    <path d="M6 20C23.6667 13.3333 71 -0.000104308 130 6.99989" stroke="#FFD700" strokeWidth="8" strokeLinecap="round" data-id="yccmvtz9m" data-path="pages/Home.js" />
                  </svg>
                </span></span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl text-blue-100" data-id="3v4qqnn4y" data-path="pages/Home.js">
                Create engaging, age-appropriate activities for your nursery school or daycare in seconds. Tailored for children aged 0-5 years with developmentally sound practices.
              </p>
              <div className="flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-4" data-id="kvr1ctwjz" data-path="pages/Home.js">
                <Link
                  to="/generator"
                  className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-lg text-center transition-all shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2" data-id="ydgycccxq" data-path="pages/Home.js">
                  <i className="fas fa-magic" data-id="vdf4anh0n" data-path="pages/Home.js"></i>
                  <span data-id="9ep1d31ze" data-path="pages/Home.js">Create Activity Now</span>
                </Link>
                <a
                  href="#features"
                  className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-center transition-all border border-blue-400 flex items-center justify-center space-x-2" data-id="0xdza94vp" data-path="pages/Home.js">
                  <i className="fas fa-info-circle" data-id="gtlxti7c0" data-path="pages/Home.js"></i>
                  <span data-id="j60iczujo" data-path="pages/Home.js">How It Works</span>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center" data-id="xk2hovquw" data-path="pages/Home.js">
              <div className="relative" data-id="f467cjar0" data-path="pages/Home.js">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply opacity-70 blur-md" data-id="3fzs1i0nx" data-path="pages/Home.js"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply opacity-70 blur-md" data-id="c5eqlpgle" data-path="pages/Home.js"></div>
                
                {/* Main image with 3D effect */}
                <div className="relative z-10 transform hover:rotate-1 transition-transform duration-300 shadow-2xl rounded-lg overflow-hidden border-4 border-white" data-id="7opoko2m0" data-path="pages/Home.js">
                  <img
                    src="https://images.unsplash.com/photo-1587463272361-565200f82b33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="Nursery school children playing"
                    className="rounded-lg object-cover w-full max-w-md" data-id="iavadca8k" data-path="pages/Home.js" />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-transparent opacity-20" data-id="imqjm4er8" data-path="pages/Home.js"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 -right-4 bg-white p-3 rounded-lg shadow-lg rotate-3 transform hover:rotate-6 transition-transform z-20" data-id="5dfi24v8o" data-path="pages/Home.js">
                  <div className="flex items-center space-x-2" data-id="v4nzt4xc6" data-path="pages/Home.js">
                    <i className="fas fa-star text-yellow-400" data-id="fr96vr6yv" data-path="pages/Home.js"></i>
                    <span className="font-bold text-gray-800" data-id="4pahrmvl0" data-path="pages/Home.js">4.9/5 Rating</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-4 bg-white p-3 rounded-lg shadow-lg -rotate-3 transform hover:-rotate-6 transition-transform z-20" data-id="vsor5unkp" data-path="pages/Home.js">
                  <div className="flex items-center space-x-2" data-id="sjmbwqdog" data-path="pages/Home.js">
                    <i className="fas fa-bolt text-blue-500" data-id="wqqljnvzm" data-path="pages/Home.js"></i>
                    <span className="font-bold text-gray-800" data-id="sovkrseja" data-path="pages/Home.js">Instant Activities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscription Info for Logged In Users */}
      {isLoggedIn &&
      <section className="bg-white py-4 border-b border-gray-200" data-id="9ec8mkeob" data-path="pages/Home.js">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="ygvli9unb" data-path="pages/Home.js">
            <div className="flex flex-col sm:flex-row justify-between items-center" data-id="hmdw237ee" data-path="pages/Home.js">
              <div className="flex items-center mb-3 sm:mb-0" data-id="tyq09smek" data-path="pages/Home.js">
                <div className="mr-3" data-id="j6m5ptubu" data-path="pages/Home.js">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800" data-id="ffifugjkm" data-path="pages/Home.js">
                    {planDetails.name} Plan
                  </span>
                </div>
                <p className="text-sm text-gray-600" data-id="3u9aht56r" data-path="pages/Home.js">
                  {planDetails.id === 'free' ?
                `You have ${remainingActivities} of 5 activities remaining today` :
                userSubscription.status === 'active' ?
                'Unlimited activities available' :
                'Your subscription has been cancelled'
                }
                </p>
              </div>
              
              <div className="flex space-x-3" data-id="59h40ypg2" data-path="pages/Home.js">
                {planDetails.id === 'free' ?
              <Link to="/profile" className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded text-white bg-blue-600 hover:bg-blue-700" data-id="1ax080y94" data-path="pages/Home.js">
                    <i className="fas fa-arrow-up mr-1" data-id="c3zedujtl" data-path="pages/Home.js"></i> Upgrade
                  </Link> :

              <Link to="/profile" className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50" data-id="onh71ecxr" data-path="pages/Home.js">
                    Manage Subscription
                  </Link>
              }
                <Link to="/profile" className="inline-flex items-center px-3 py-1 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50" data-id="mf8v963fl" data-path="pages/Home.js">
                  <i className="fas fa-user mr-1" data-id="mfc3n5fms" data-path="pages/Home.js"></i> My Profile
                </Link>
              </div>
            </div>
          </div>
        </section>
      }
      
      {/* Stats Section */}
      <section className="bg-white py-12 shadow-inner" data-id="cvjjm7gqu" data-path="pages/Home.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="2ou2az5f0" data-path="pages/Home.js">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-id="2yv3ogb0u" data-path="pages/Home.js">
            <div data-id="lvih94wgh" data-path="pages/Home.js">
              <p className="text-4xl font-bold text-blue-600" data-id="681zmv6r1" data-path="pages/Home.js">8+</p>
              <p className="text-gray-500 mt-2" data-id="a9yeknpt9" data-path="pages/Home.js">Learning Areas</p>
            </div>
            <div data-id="t72db0uav" data-path="pages/Home.js">
              <p className="text-4xl font-bold text-blue-600" data-id="916mhhspt" data-path="pages/Home.js">1000+</p>
              <p className="text-gray-500 mt-2" data-id="8k94itq4t" data-path="pages/Home.js">Activities Created</p>
            </div>
            <div data-id="iulqj3eqt" data-path="pages/Home.js">
              <p className="text-4xl font-bold text-blue-600" data-id="2uycmlcal" data-path="pages/Home.js">98%</p>
              <p className="text-gray-500 mt-2" data-id="2s1r58cal" data-path="pages/Home.js">Caregiver Satisfaction</p>
            </div>
            <div data-id="tly5w755s" data-path="pages/Home.js">
              <p className="text-4xl font-bold text-blue-600" data-id="6ufgsvlds" data-path="pages/Home.js">6</p>
              <p className="text-gray-500 mt-2" data-id="vrkrsvb64" data-path="pages/Home.js">Age Groups Covered</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscription Plans Section (only shown when not logged in) */}
      {!isLoggedIn &&
      <section className="py-16 bg-blue-50" id="pricing" data-id="mf339j7l3" data-path="pages/Home.js">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="uquovzp17" data-path="pages/Home.js">
            <div className="text-center mb-12" data-id="tnibq5as3" data-path="pages/Home.js">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" data-id="0hcqdi168" data-path="pages/Home.js">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto" data-id="ek6rk9byb" data-path="pages/Home.js">
                Choose the plan that works best for your needs, with no hidden fees.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-id="n13woqgpc" data-path="pages/Home.js">
              {/* Free Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200" data-id="a5royqakg" data-path="pages/Home.js">
                <div className="px-6 py-8" data-id="w4qig3bp7" data-path="pages/Home.js">
                  <h3 className="text-2xl font-bold text-gray-900" data-id="nurevp13p" data-path="pages/Home.js">Free</h3>
                  <div className="mt-4 flex items-baseline" data-id="ayigvcuwe" data-path="pages/Home.js">
                    <span className="text-5xl font-extrabold tracking-tight text-gray-900" data-id="vwv84xwml" data-path="pages/Home.js">$0</span>
                    <span className="ml-1 text-xl font-medium text-gray-500" data-id="ky5t0xgt7" data-path="pages/Home.js">/mo</span>
                  </div>
                  <p className="mt-5 text-gray-500" data-id="1ebvo2mv8" data-path="pages/Home.js">Perfect for occasional use or to try out the platform.</p>
                </div>
                <div className="px-6 pt-6 pb-8" data-id="82bwpo8ad" data-path="pages/Home.js">
                  <ul className="space-y-4" data-id="n96p97oti" data-path="pages/Home.js">
                    <li className="flex items-start" data-id="ovqg5m2bv" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="n8kz70n9y" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="vw3leiulo" data-path="pages/Home.js">Generate up to 5 activities per day</span>
                    </li>
                    <li className="flex items-start" data-id="3r9ezl4cn" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="90roguf3p" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="n6w06h1dp" data-path="pages/Home.js">Basic customization options</span>
                    </li>
                    <li className="flex items-start" data-id="1szfrr17o" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="918n6ze29" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="u16siv80q" data-path="pages/Home.js">Access to starter templates</span>
                    </li>
                    <li className="flex items-start" data-id="ubwnx8wqx" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="b0gays6o1" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="xjf60jsl0" data-path="pages/Home.js">Save up to 10 activities</span>
                    </li>
                  </ul>
                  <div className="mt-8" data-id="tuzm8eqbh" data-path="pages/Home.js">
                    <Link to="/generator" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700" data-id="mgmlq1qm2" data-path="pages/Home.js">
                      Get Started Free
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Basic Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-500 transform scale-105 z-10" data-id="lo8a8y4vb" data-path="pages/Home.js">
                <div className="bg-blue-500 px-6 py-1 text-center" data-id="s0mlowtnj" data-path="pages/Home.js">
                  <span className="text-xs font-semibold uppercase tracking-wide text-white" data-id="wvl4to38h" data-path="pages/Home.js">Most Popular</span>
                </div>
                <div className="px-6 py-8" data-id="d2tzx5kb7" data-path="pages/Home.js">
                  <h3 className="text-2xl font-bold text-gray-900" data-id="bw4c65ud6" data-path="pages/Home.js">Basic</h3>
                  <div className="mt-4 flex items-baseline" data-id="hsl5uwm73" data-path="pages/Home.js">
                    <span className="text-5xl font-extrabold tracking-tight text-gray-900" data-id="x2f3tk684" data-path="pages/Home.js">$9.99</span>
                    <span className="ml-1 text-xl font-medium text-gray-500" data-id="b0sw6tf87" data-path="pages/Home.js">/mo</span>
                  </div>
                  <p className="mt-5 text-gray-500" data-id="7kjihu189" data-path="pages/Home.js">Best for active teachers who need regular activity creation.</p>
                </div>
                <div className="px-6 pt-6 pb-8" data-id="794qcy1q5" data-path="pages/Home.js">
                  <ul className="space-y-4" data-id="7y2p0gjwa" data-path="pages/Home.js">
                    <li className="flex items-start" data-id="g1pojysym" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="janx5w39u" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="n1xg007bj" data-path="pages/Home.js">Generate up to 30 activities per day</span>
                    </li>
                    <li className="flex items-start" data-id="20g0q1ns1" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="oy03gi6ce" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="r75o5sob3" data-path="pages/Home.js">Advanced customization options</span>
                    </li>
                    <li className="flex items-start" data-id="ia6824krw" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="2jcuswhfp" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="psu2jab21" data-path="pages/Home.js">Access to all templates</span>
                    </li>
                    <li className="flex items-start" data-id="3uvyd4ewd" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="s1pstct9y" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="wlmwf47w7" data-path="pages/Home.js">Save unlimited activities</span>
                    </li>
                    <li className="flex items-start" data-id="zvkg21j6o" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="xpucausl5" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="j0xi3mupw" data-path="pages/Home.js">Email support</span>
                    </li>
                  </ul>
                  <div className="mt-8" data-id="4mn4n4sjq" data-path="pages/Home.js">
                    <Link to="/generator" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700" data-id="o43zyamz8" data-path="pages/Home.js">
                      Start Basic Plan
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Premium Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200" data-id="k7aaapjub" data-path="pages/Home.js">
                <div className="px-6 py-8" data-id="zq904agon" data-path="pages/Home.js">
                  <h3 className="text-2xl font-bold text-gray-900" data-id="2vzqvzjdv" data-path="pages/Home.js">Premium</h3>
                  <div className="mt-4 flex items-baseline" data-id="cw18fhy9k" data-path="pages/Home.js">
                    <span className="text-5xl font-extrabold tracking-tight text-gray-900" data-id="1c9vmakgj" data-path="pages/Home.js">$19.99</span>
                    <span className="ml-1 text-xl font-medium text-gray-500" data-id="c8ddi9jzz" data-path="pages/Home.js">/mo</span>
                  </div>
                  <p className="mt-5 text-gray-500" data-id="6ybisaiby" data-path="pages/Home.js">For professionals who need advanced features and priority support.</p>
                </div>
                <div className="px-6 pt-6 pb-8" data-id="75uwzi4sa" data-path="pages/Home.js">
                  <ul className="space-y-4" data-id="eqmbi7y7j" data-path="pages/Home.js">
                    <li className="flex items-start" data-id="v1guc83i3" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="ktis80fuf" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="rcquqluex" data-path="pages/Home.js">Unlimited activity generation</span>
                    </li>
                    <li className="flex items-start" data-id="3ey2kq97p" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="j59wsqans" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="3pnmodmac" data-path="pages/Home.js">All customization options</span>
                    </li>
                    <li className="flex items-start" data-id="0u2qojfme" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="oyp96yuet" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="i8ngadcei" data-path="pages/Home.js">Access to premium templates</span>
                    </li>
                    <li className="flex items-start" data-id="uidsbhyyo" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="nimxjvlzk" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="s3gmfc8ns" data-path="pages/Home.js">Priority email support</span>
                    </li>
                    <li className="flex items-start" data-id="1mm1k4p8r" data-path="pages/Home.js">
                      <i className="fas fa-check text-green-500 flex-shrink-0 mt-0.5 mr-3" data-id="6qe1339r4" data-path="pages/Home.js"></i>
                      <span className="text-gray-600" data-id="rfmpffjlu" data-path="pages/Home.js">Bulk activity creation</span>
                    </li>
                  </ul>
                  <div className="mt-8" data-id="cyhclw1ed" data-path="pages/Home.js">
                    <Link to="/generator" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700" data-id="vjsab5hvt" data-path="pages/Home.js">
                      Start Premium Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50" data-id="lsjf1j91j" data-path="pages/Home.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="l022jbssg" data-path="pages/Home.js">
          <div className="text-center mb-12" data-id="twxh5en89" data-path="pages/Home.js">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" data-id="eskki8jo1" data-path="pages/Home.js">
              How NurseryGenius Works
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto" data-id="osux4lwkq" data-path="pages/Home.js">
              Our platform makes creating age-appropriate activities for young children quick and easy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="amtoasr5k" data-path="pages/Home.js">
            <FeatureCard
              icon="fa-wand-magic-sparkles"
              title="Child-Centered Activities"
              description="Our platform creates developmentally appropriate activities that engage young children through play-based learning experiences."
              color="blue" data-id="mgxwbx31i" data-path="pages/Home.js" />

            <FeatureCard
              icon="fa-sliders"
              title="Age-Appropriate Design"
              description="All activities are designed specifically for young children with considerations for attention span, developmental milestones, and safety."
              color="purple" data-id="gzbgpsf5h" data-path="pages/Home.js" />

            <FeatureCard
              icon="fa-graduation-cap"
              title="Early Learning Focus"
              description="Activities promote key developmental domains: social-emotional, cognitive, language, and physical development for ages 0-5."
              color="green" data-id="lj8mosa2o" data-path="pages/Home.js" />

            <FeatureCard
              icon="fa-clock"
              title="Quick Implementation"
              description="Simple activities with minimal prep time and common materials, allowing more quality interaction time with the children."
              color="yellow" data-id="rftijuzi2" data-path="pages/Home.js" />

            <FeatureCard
              icon="fa-folder"
              title="Save & Revisit"
              description="Store your favorite activities for future use and organize them by age group, learning area, or custom categories."
              color="indigo" data-id="5env1hjm9" data-path="pages/Home.js" />

            <FeatureCard
              icon="fa-file-export"
              title="Caregiver Resources"
              description="Each activity includes extension ideas, modifications for different abilities, and ways to involve parents in the learning process."
              color="red" data-id="lsrqtj6v1" data-path="pages/Home.js" />

          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white" data-id="cqgfpxemo" data-path="pages/Home.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="4bomqq9ik" data-path="pages/Home.js">
          <div className="text-center mb-12" data-id="6v49plysk" data-path="pages/Home.js">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" data-id="9rkbrxkv0" data-path="pages/Home.js">
              Create Activities in 3 Simple Steps
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto" data-id="ydygnp2y7" data-path="pages/Home.js">
              Our simple process helps you find perfect activities for your nursery classroom in moments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" data-id="buwo7a843" data-path="pages/Home.js">
            <div className="text-center p-6" data-id="97u48bep9" data-path="pages/Home.js">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="22l68yqh3" data-path="pages/Home.js">
                <span className="text-2xl font-bold" data-id="dmahb5nps" data-path="pages/Home.js">1</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2" data-id="9xxgtsuuh" data-path="pages/Home.js">Select Options</h3>
              <p className="text-gray-600" data-id="fp04c7ls4" data-path="pages/Home.js">
                Choose the learning area, age group, activity length, and optionally add a specific theme.
              </p>
            </div>
            <div className="text-center p-6" data-id="f4bzioo8k" data-path="pages/Home.js">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="p5uogauab" data-path="pages/Home.js">
                <span className="text-2xl font-bold" data-id="6itzgdlfr" data-path="pages/Home.js">2</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2" data-id="tx9h4f0au" data-path="pages/Home.js">Create Activity</h3>
              <p className="text-gray-600" data-id="fyo84hbrh" data-path="pages/Home.js">
                Our system creates an age-appropriate activity with clear instructions, materials list, and learning objectives.
              </p>
            </div>
            <div className="text-center p-6" data-id="8puhof3rf" data-path="pages/Home.js">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="7du62sfkz" data-path="pages/Home.js">
                <span className="text-2xl font-bold" data-id="cknrj18lv" data-path="pages/Home.js">3</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2" data-id="z9n4e1ra5" data-path="pages/Home.js">Use & Save</h3>
              <p className="text-gray-600" data-id="x2kbjdyw8" data-path="pages/Home.js">
                Implement the activity in your classroom and save it to your collection for future use.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50" data-id="b980krrn8" data-path="pages/Home.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="gt4kw3gwy" data-path="pages/Home.js">
          <div className="text-center mb-12" data-id="ce7ocbl3x" data-path="pages/Home.js">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" data-id="o12z0pswe" data-path="pages/Home.js">
              What Early Childhood Educators Are Saying
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto" data-id="amjqxd8eg" data-path="pages/Home.js">
              Nursery teachers and childcare providers love our age-appropriate activity ideas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" data-id="6ncw1coqb" data-path="pages/Home.js">
            <div className="bg-white p-6 rounded-lg shadow" data-id="cmfxrr81e" data-path="pages/Home.js">
              <div className="flex items-center mb-4" data-id="x0ggrmvj6" data-path="pages/Home.js">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4" data-id="33ko7xdep" data-path="pages/Home.js">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt="Sarah J."
                    className="h-full w-full object-cover" data-id="lgsgvzsk1" data-path="pages/Home.js" />

                </div>
                <div data-id="tryc6eshn" data-path="pages/Home.js">
                  <h4 className="text-lg font-medium text-gray-900" data-id="n8h9hpkei" data-path="pages/Home.js">Sarah J.</h4>
                  <p className="text-gray-500" data-id="tr0a1ulnq" data-path="pages/Home.js">Preschool Teacher</p>
                </div>
              </div>
              <p className="text-gray-600 italic" data-id="za16covrb" data-path="pages/Home.js">
                "NurseryGenius has transformed my classroom activities. The ideas are perfectly suited for my preschoolers, engaging and developmentally appropriate with minimal prep time required."
              </p>
              <div className="mt-4 flex text-yellow-400" data-id="4nj0vyayd" data-path="pages/Home.js">
                <i className="fas fa-star" data-id="4lz17c2z3" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="v45rxxpx4" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="62p78x6kj" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="6d1z6qvvs" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="qi1y43ain" data-path="pages/Home.js"></i>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow" data-id="yem879ml7" data-path="pages/Home.js">
              <div className="flex items-center mb-4" data-id="xpos7ouqv" data-path="pages/Home.js">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4" data-id="egjwekxh6" data-path="pages/Home.js">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt="Michael T."
                    className="h-full w-full object-cover" data-id="eo1nmvwug" data-path="pages/Home.js" />

                </div>
                <div data-id="9bpckgidd" data-path="pages/Home.js">
                  <h4 className="text-lg font-medium text-gray-900" data-id="r0ktmme4d" data-path="pages/Home.js">Michael T.</h4>
                  <p className="text-gray-500" data-id="h5h56g5td" data-path="pages/Home.js">Daycare Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic" data-id="o9xwhcqvn" data-path="pages/Home.js">
                "As a daycare director, I need to support my staff with fresh activity ideas. This tool provides consistently excellent activities that our children love and my teachers find easy to implement."
              </p>
              <div className="mt-4 flex text-yellow-400" data-id="xt015jdym" data-path="pages/Home.js">
                <i className="fas fa-star" data-id="iyrhl2j45" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="owup3zvzq" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="khuyhaz0d" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="bl7tqxfcl" data-path="pages/Home.js"></i>
                <i className="fas fa-star-half-alt" data-id="c5614y0pg" data-path="pages/Home.js"></i>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow" data-id="gig30apr7" data-path="pages/Home.js">
              <div className="flex items-center mb-4" data-id="fhnslxds9" data-path="pages/Home.js">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4" data-id="aqht7v1zp" data-path="pages/Home.js">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                    alt="Rebecca L."
                    className="h-full w-full object-cover" data-id="r5cglblvc" data-path="pages/Home.js" />

                </div>
                <div data-id="mqzwl44sm" data-path="pages/Home.js">
                  <h4 className="text-lg font-medium text-gray-900" data-id="wt0i11kvq" data-path="pages/Home.js">Rebecca L.</h4>
                  <p className="text-gray-500" data-id="rf2sqx21f" data-path="pages/Home.js">Infant Room Lead</p>
                </div>
              </div>
              <p className="text-gray-600 italic" data-id="9xr988qx3" data-path="pages/Home.js">
                "Finding appropriate activities for infants is challenging, but this tool consistently delivers perfect ideas for sensory play, language development, and motor skills that work beautifully with our youngest children."
              </p>
              <div className="mt-4 flex text-yellow-400" data-id="e4uwl6qhw" data-path="pages/Home.js">
                <i className="fas fa-star" data-id="1x72dsqy4" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="4syt37mfc" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="9tnbmbs33" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="cu8qx5u2q" data-path="pages/Home.js"></i>
                <i className="fas fa-star" data-id="ci1b33cju" data-path="pages/Home.js"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white" data-id="b8nncw2u6" data-path="pages/Home.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-id="lhkyogpeo" data-path="pages/Home.js">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6" data-id="jmjknb1vw" data-path="pages/Home.js">
            Ready to Simplify Your Nursery Activities?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" data-id="iyzaukf75" data-path="pages/Home.js">
            Join early childhood educators who are creating engaging, developmentally appropriate activities for young children.
          </p>
          <div className="flex justify-center space-x-4" data-id="vso1kwfcz" data-path="pages/Home.js">
            <Link
              to="/generator"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-md" data-id="gbtfn597d" data-path="pages/Home.js">

              Create Activities Now
            </Link>
            <a
              href="#features"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 text-base font-medium rounded-md transition duration-150" data-id="qpijiakv6" data-path="pages/Home.js">

              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>);

}