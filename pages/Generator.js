function GeneratorPage() {
  // Track scroll position when AI assistant is used
  const generatorRef = React.useRef(null);
  const [generatedLesson, setGeneratedLesson] = React.useState(null);
  const [showForm, setShowForm] = React.useState(true);

  const handleGenerateLesson = (lesson) => {
    setGeneratedLesson(lesson);
    setShowForm(false);
    // Scroll to top when lesson is generated
    window.scrollTo(0, 0);
  };

  const handleCreateNew = () => {
    setGeneratedLesson(null);
    setShowForm(true);
    // Scroll to top when creating new lesson
    window.scrollTo(0, 0);
  };

  const handleSaveLesson = (savedLesson) => {
    // Could update local state or show a notification
    console.log('Lesson saved:', savedLesson);
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen" data-id="g1jvyz73o" data-path="pages/Generator.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="ugu3p0h1j" data-path="pages/Generator.js" ref={generatorRef}>
        {/* Page Header */}
        <div className="mb-8 md:flex md:items-end md:justify-between" data-id="box72h6io" data-path="pages/Generator.js">
          <div data-id="p7rgjoutu" data-path="pages/Generator.js">
            <h1 className="text-3xl font-bold text-gray-900" data-id="3bw6ugs5j" data-path="pages/Generator.js">
              {generatedLesson ? 'Your Nursery Activity' : 'Create a Nursery Activity'}
            </h1>
            <p className="mt-2 text-gray-600" data-id="ipmcodrxs" data-path="pages/Generator.js">
              {generatedLesson ?
              'Review, save, or print your age-appropriate nursery activity.' :
              'Select options to create the perfect activity for your young children.'}
            </p>
          </div>
          
          {generatedLesson &&
          <div className="mt-4 md:mt-0" data-id="58je4w027" data-path="pages/Generator.js">
              <button
              onClick={handleCreateNew}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" data-id="jqv54joy5" data-path="pages/Generator.js">

                <i className="fas fa-plus mr-2" data-id="i1pwqujjf" data-path="pages/Generator.js"></i>
                Create New Activity
              </button>
            </div>
          }
        </div>
        
        {/* Generated Lesson Display */}
        {generatedLesson &&
        <div className="mb-8" data-id="mznqclgzp" data-path="pages/Generator.js">
            <LessonDisplay lesson={generatedLesson} onSave={handleSaveLesson} data-id="s4hudeo45" data-path="pages/Generator.js" />
          </div>
        }
        
        {/* Generator Form with AI Integration */}
        {showForm &&
        <Generator onGenerateLesson={handleGenerateLesson} data-id="j90fzaptc" data-path="pages/Generator.js" />
        }
        
        {/* Prompt Ideas (shown only when form is visible) */}
        {showForm &&
        <div className="mt-8 bg-white rounded-lg shadow-md p-6" data-id="q1t6tetv9" data-path="pages/Generator.js">
            <h3 className="text-lg font-medium text-gray-900 mb-4" data-id="wuzlkshim" data-path="pages/Generator.js">
              Looking for inspiration? Try these activity themes:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3" data-id="15sr61gzr" data-path="pages/Generator.js">
              {[
            { subject: 'literacy', grade: 'threes', topic: 'Letter Sound Scavenger Hunt' },
            { subject: 'sensory', grade: 'toddler', topic: 'Edible Finger Painting' },
            { subject: 'numbers', grade: 'fours', topic: 'Counting with Natural Objects' },
            { subject: 'social', grade: 'preschool', topic: 'Friendship Circle Activities' },
            { subject: 'motor', grade: 'twos', topic: 'Indoor Movement Games' },
            { subject: 'nature', grade: 'preschool', topic: 'Growing Seeds in Cups' }].
            map((idea, index) =>
            <div
              key={index}
              onClick={() => {
                // Would integrate with the Generator component in a real app
                alert(`In a full implementation, this would pre-fill the generator with:\nSubject: ${getSubjectName(idea.subject)}\nGrade: ${getGradeName(idea.grade)}\nTopic: ${idea.topic}`);
              }}
              className="p-3 border border-gray-200 rounded-md hover:border-blue-300 hover:bg-blue-50 cursor-pointer" data-id="pigy1449p" data-path="pages/Generator.js">

                  <div className="text-sm font-medium text-gray-900" data-id="5yl6yvjdv" data-path="pages/Generator.js">{idea.topic}</div>
                  <div className="text-xs text-gray-500 mt-1" data-id="vv0wxrbso" data-path="pages/Generator.js">
                    {getSubjectName(idea.subject)} • {getGradeName(idea.grade)}
                  </div>
                </div>
            )}
            </div>
          </div>
        }
      </div>
    </div>);

}