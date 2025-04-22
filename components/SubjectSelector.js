function SubjectSelector({ selectedSubject, onSelectSubject }) {
  return (
    <div className="mb-8" data-id="2rihz8hww" data-path="components/SubjectSelector.js">
      <h3 className="text-lg font-medium text-gray-900 mb-4" data-id="aoio49m1s" data-path="components/SubjectSelector.js">Select Subject</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" data-id="w480mpau6" data-path="components/SubjectSelector.js">
        {subjects.map((subject) =>
        <div
          key={subject.id}
          onClick={() => onSelectSubject(subject.id)}
          className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all ${
          selectedSubject === subject.id ?
          'bg-blue-50 border-blue-500 shadow-sm' :
          'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`
          } data-id="qhw8jv1l9" data-path="components/SubjectSelector.js">

            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${
          selectedSubject === subject.id ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'}`
          } data-id="jl4i2e0kk" data-path="components/SubjectSelector.js">
              <i className={`fas ${subject.icon} text-lg`} data-id="hd33d5pfg" data-path="components/SubjectSelector.js"></i>
            </div>
            <span className="text-sm font-medium text-center" data-id="v0koypfwr" data-path="components/SubjectSelector.js">{subject.name}</span>
          </div>
        )}
      </div>
    </div>);

}