function HistoryPage() {
  const [selectedLesson, setSelectedLesson] = React.useState(null);
  const [lessons, setLessons] = React.useState([]);

  React.useEffect(() => {
    // Load saved lessons when component mounts
    setLessons(getSavedLessons());
  }, []);

  const handleViewLesson = (lesson) => {
    setSelectedLesson(lesson);
    window.scrollTo(0, 0);
  };

  const handleDeleteLesson = (id) => {
    // If the deleted lesson is currently selected, clear the selection
    if (selectedLesson && selectedLesson.id === id) {
      setSelectedLesson(null);
    }

    // Update the lessons state
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };

  const handleBackToList = () => {
    setSelectedLesson(null);
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen" data-id="aptovhn7w" data-path="pages/History.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="3k3as1fo6" data-path="pages/History.js">
        {/* Page Header */}
        <div className="mb-8 md:flex md:items-end md:justify-between" data-id="ycd3cqo55" data-path="pages/History.js">
          <div data-id="th0qdczj2" data-path="pages/History.js">
            <h1 className="text-3xl font-bold text-gray-900" data-id="fz5ulhvoc" data-path="pages/History.js">
              {selectedLesson ? 'Activity Details' : 'My Saved Activities'}
            </h1>
            <p className="mt-2 text-gray-600" data-id="3dh0pc9uk" data-path="pages/History.js">
              {selectedLesson ?
              'Review or use your saved nursery school activity.' :
              'Access and manage all your saved nursery activities.'}
            </p>
          </div>
          
          {selectedLesson &&
          <div className="mt-4 md:mt-0" data-id="wwripopdr" data-path="pages/History.js">
              <button
              onClick={handleBackToList}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" data-id="gvjokmlkl" data-path="pages/History.js">

                <i className="fas fa-arrow-left mr-2" data-id="3wi5oq787" data-path="pages/History.js"></i>
                Back to List
              </button>
            </div>
          }
        </div>
        
        {/* Selected Lesson View */}
        {selectedLesson &&
        <div className="mb-8" data-id="ljlvq2ccv" data-path="pages/History.js">
            <LessonDisplay lesson={selectedLesson} data-id="psufk7mpn" data-path="pages/History.js" />
          </div>
        }
        
        {/* Lessons List */}
        {!selectedLesson &&
        <div data-id="3pli4ge5t" data-path="pages/History.js">
            <LessonHistory
            onViewLesson={handleViewLesson}
            onDeleteLesson={handleDeleteLesson} data-id="mm5wwbjzj" data-path="pages/History.js" />

            
            {/* Analytics Panel (only shown when lessons exist) */}
            {lessons.length > 0 &&
          <div className="mt-8 bg-white rounded-lg shadow-md p-6" data-id="5b0ujra8r" data-path="pages/History.js">
                <h3 className="text-lg font-medium text-gray-900 mb-4" data-id="izy45baeh" data-path="pages/History.js">
                  Your Activity Stats
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-id="tjm97ivzp" data-path="pages/History.js">
                  <div className="bg-blue-50 p-4 rounded-lg" data-id="ut0z09ers" data-path="pages/History.js">
                    <div className="text-blue-600 text-xl font-bold" data-id="0j37wtyru" data-path="pages/History.js">{lessons.length}</div>
                    <div className="text-gray-600 text-sm" data-id="1oht6wn1k" data-path="pages/History.js">Total Activities</div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg" data-id="5w1v6sgtz" data-path="pages/History.js">
                    <div className="text-green-600 text-xl font-bold" data-id="frf12ock9" data-path="pages/History.js">
                      {/* Get unique subjects */}
                      {new Set(lessons.map((l) => l.subject)).size}
                    </div>
                    <div className="text-gray-600 text-sm" data-id="beatyear2" data-path="pages/History.js">Learning Areas</div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg" data-id="cfzgxe8ct" data-path="pages/History.js">
                    <div className="text-purple-600 text-xl font-bold" data-id="84su17dxv" data-path="pages/History.js">
                      {/* Most common grade level */}
                      {(() => {
                    const gradeCounts = {};
                    lessons.forEach((l) => {
                      gradeCounts[l.grade] = (gradeCounts[l.grade] || 0) + 1;
                    });

                    // Find most frequent grade
                    let mostFrequentGrade = null;
                    let highestCount = 0;

                    Object.entries(gradeCounts).forEach(([grade, count]) => {
                      if (count > highestCount) {
                        mostFrequentGrade = grade;
                        highestCount = count;
                      }
                    });

                    return mostFrequentGrade ? getGradeName(mostFrequentGrade) : 'N/A';
                  })()}
                    </div>
                    <div className="text-gray-600 text-sm" data-id="h092kdfay" data-path="pages/History.js">Most Common Age Group</div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg" data-id="459u9oyaf" data-path="pages/History.js">
                    <div className="text-yellow-600 text-xl font-bold" data-id="6kixlfnhz" data-path="pages/History.js">
                      {/* Newest lesson date */}
                      {(() => {
                    if (lessons.length === 0) return 'N/A';

                    // Find newest lesson
                    const sortedLessons = [...lessons].sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );

                    // Format the date to "Jan 1, 2023"
                    return new Date(sortedLessons[0].createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  })()}
                    </div>
                    <div className="text-gray-600 text-sm" data-id="irzr26oav" data-path="pages/History.js">Last Created</div>
                  </div>
                </div>
                
                {/* Subject Distribution Bar Chart (simplified) */}
                <div className="mt-6" data-id="vnmxhwwwg" data-path="pages/History.js">
                  <h4 className="text-sm font-medium text-gray-700 mb-3" data-id="xdp8o249t" data-path="pages/History.js">Learning Area Distribution</h4>
                  
                  {(() => {
                // Count lessons by subject
                const subjectCounts = {};
                lessons.forEach((lesson) => {
                  subjectCounts[lesson.subject] = (subjectCounts[lesson.subject] || 0) + 1;
                });

                // Create bars for each subject
                return Object.entries(subjectCounts).map(([subject, count]) => {
                  const percentage = Math.round(count / lessons.length * 100);

                  // Define colors for different learning areas
                  const subjectColors = {
                    literacy: 'bg-blue-500',
                    numbers: 'bg-green-500',
                    social: 'bg-purple-500',
                    motor: 'bg-yellow-500',
                    sensory: 'bg-indigo-500',
                    art: 'bg-pink-500',
                    music: 'bg-red-500',
                    nature: 'bg-orange-500'
                  };

                  const bgColor = subjectColors[subject] || 'bg-gray-500';

                  return (
                    <div key={subject} className="mb-2" data-id="b498pw3y4" data-path="pages/History.js">
                          <div className="flex items-center" data-id="co2pnhe6i" data-path="pages/History.js">
                            <span className="text-sm text-gray-600 w-24" data-id="vul6zt29j" data-path="pages/History.js">{getSubjectName(subject)}</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-4 ml-2" data-id="89ig6n685" data-path="pages/History.js">
                              <div
                            className={`${bgColor} h-4 rounded-full`}
                            style={{ width: `${percentage}%` }} data-id="hhqp8n71c" data-path="pages/History.js">
                          </div>
                            </div>
                            <span className="ml-2 text-sm text-gray-600" data-id="qx1t301re" data-path="pages/History.js">{count}</span>
                          </div>
                        </div>);

                });
              })()}
                </div>
              </div>
          }
          </div>
        }
      </div>
    </div>);

}