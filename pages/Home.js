function Home() {
  const { Link } = ReactRouterDOM;

  return (
    <div data-id="lfifu4ac5" data-path="pages/Home.js">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20" data-id="vnflfkjms" data-path="pages/Home.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="nuqk7d5xv" data-path="pages/Home.js">
          <div className="md:flex md:items-center md:justify-between" data-id="dgup536f9" data-path="pages/Home.js">
            <div className="md:w-1/2 mb-10 md:mb-0" data-id="m89o2pl7y" data-path="pages/Home.js">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6" data-id="j5pa6iumu" data-path="pages/Home.js">
                Nursery School <br data-id="rbzdoja3m" data-path="pages/Home.js" />
                <span className="text-yellow-300" data-id="27hmg2vtg" data-path="pages/Home.js">Activity Creator</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl" data-id="3v4qqnn4y" data-path="pages/Home.js">
                Create engaging, age-appropriate activities for your nursery school or daycare. Tailored for children aged 0-5 years with developmentally appropriate practices.
              </p>
              <div className="flex space-x-4" data-id="kvr1ctwjz" data-path="pages/Home.js">
                <Link
                  to="/generator"
                  className="btn-primary px-8 py-3 text-base font-medium rounded-md" data-id="ydgycccxq" data-path="pages/Home.js">

                  Create Activity
                </Link>
                <a
                  href="#features"
                  className="bg-white text-blue-600 hover:text-blue-800 px-8 py-3 text-base font-medium rounded-md" data-id="0xdza94vp" data-path="pages/Home.js">

                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center" data-id="xk2hovquw" data-path="pages/Home.js">
              <img
                src="https://images.unsplash.com/photo-1587463272361-565200f82b33?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="Nursery school children playing"
                className="rounded-lg shadow-xl object-cover w-full max-w-md" data-id="iavadca8k" data-path="pages/Home.js" />

            </div>
          </div>
        </div>
      </section>
      
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