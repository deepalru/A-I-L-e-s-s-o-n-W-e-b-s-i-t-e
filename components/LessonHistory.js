function LessonHistory({ onViewLesson, onDeleteLesson }) {
  const [lessons, setLessons] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Load lessons from localStorage
    const savedLessons = getSavedLessons();
    setLessons(savedLessons);
    setIsLoading(false);
  }, []);

  const handleDelete = (e, id) => {
    e.stopPropagation();

    if (window.confirm('Are you sure you want to delete this activity?')) {
      deleteLesson(id);
      setLessons(lessons.filter((lesson) => lesson.id !== id));
      if (onDeleteLesson) onDeleteLesson(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12" data-id="vadhobgml" data-path="components/LessonHistory.js">
        <div className="spinner" data-id="w9444ghpd" data-path="components/LessonHistory.js"></div>
      </div>);

  }

  if (lessons.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center" data-id="1tps3p78a" data-path="components/LessonHistory.js">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4" data-id="1io73d64w" data-path="components/LessonHistory.js">
          <i className="fas fa-folder-open text-gray-400 text-2xl" data-id="e3u7edx2n" data-path="components/LessonHistory.js"></i>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2" data-id="ottwplwvs" data-path="components/LessonHistory.js">No Saved Activities Yet</h3>
        <p className="text-gray-500 mb-6" data-id="pcymdl7jn" data-path="components/LessonHistory.js">
          Create your first nursery activity to save it here for future reference.
        </p>
        <ReactRouterDOM.Link
          to="/generator"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600" data-id="vpmgbmk5j" data-path="components/LessonHistory.js">

          <i className="fas fa-magic mr-2" data-id="1avgl7og0" data-path="components/LessonHistory.js"></i>
          Create Your First Activity
        </ReactRouterDOM.Link>
      </div>);

  }

  // Sort lessons by creation date (newest first)
  const sortedLessons = [...lessons].sort((a, b) =>
  new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="bg-white rounded-lg shadow-md" data-id="n22k73prq" data-path="components/LessonHistory.js">
      <div className="p-4 border-b" data-id="iuznc146c" data-path="components/LessonHistory.js">
        <h2 className="text-lg font-semibold text-gray-800" data-id="w6jr8g1bd" data-path="components/LessonHistory.js">Your Saved Activities</h2>
        <p className="text-sm text-gray-500" data-id="bdwcll5fr" data-path="components/LessonHistory.js">Click on an activity to view its details</p>
      </div>
      
      <div className="divide-y" data-id="6xx9miiej" data-path="components/LessonHistory.js">
        {sortedLessons.map((lesson) =>
        <div
          key={lesson.id}
          onClick={() => onViewLesson(lesson)}
          className="p-4 hover:bg-gray-50 cursor-pointer transition duration-150 ease-in-out" data-id="b6wfd8dzm" data-path="components/LessonHistory.js">

            <div className="flex justify-between items-start" data-id="h7p68hd5p" data-path="components/LessonHistory.js">
              <div data-id="eqtekza1h" data-path="components/LessonHistory.js">
                <h3 className="font-medium text-gray-900" data-id="dh0hm9t54" data-path="components/LessonHistory.js">{lesson.topic}</h3>
                <div className="mt-1 flex items-center text-sm text-gray-500" data-id="4agk0e45w" data-path="components/LessonHistory.js">
                  <span className="mr-4" data-id="btepg51k3" data-path="components/LessonHistory.js">{getSubjectName(lesson.subject)}</span>
                  <span className="mr-4" data-id="gqge9vj47" data-path="components/LessonHistory.js">{getGradeName(lesson.grade)}</span>
                  <span data-id="sthf3urht" data-path="components/LessonHistory.js">{getDurationName(lesson.duration)}</span>
                </div>
                <div className="mt-1 text-xs text-gray-400" data-id="7klqs87jq" data-path="components/LessonHistory.js">
                  Created: {formatDate(lesson.createdAt)}
                </div>
              </div>
              <div className="flex" data-id="xa25nky5a" data-path="components/LessonHistory.js">
                <button
                onClick={(e) => handleDelete(e, lesson.id)}
                className="text-gray-400 hover:text-red-500 transition duration-150 ease-in-out" data-id="xmg0dtlnw" data-path="components/LessonHistory.js">

                  <i className="fas fa-trash" data-id="1wbvhom71" data-path="components/LessonHistory.js"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);

}