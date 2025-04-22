function GradeSelector({ selectedGrade, onSelectGrade }) {
  return (
    <div className="mb-8" data-id="vi27y2ikk" data-path="components/GradeSelector.js">
      <h3 className="text-lg font-medium text-gray-900 mb-4" data-id="zub7fprtq" data-path="components/GradeSelector.js">Select Grade Level</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" data-id="l3o7xx6dt" data-path="components/GradeSelector.js">
        {grades.map((grade) =>
        <div
          key={grade.id}
          onClick={() => onSelectGrade(grade.id)}
          className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all ${
          selectedGrade === grade.id ?
          'bg-blue-50 border-blue-500 shadow-sm' :
          'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`
          } data-id="4l99m8uwy" data-path="components/GradeSelector.js">

            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${
          selectedGrade === grade.id ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'}`
          } data-id="9bnq17iyn" data-path="components/GradeSelector.js">
              <i className={`fas ${grade.icon} text-lg`} data-id="f2loy113z" data-path="components/GradeSelector.js"></i>
            </div>
            <span className="text-sm font-medium text-center" data-id="b9vbd6p97" data-path="components/GradeSelector.js">{grade.name}</span>
          </div>
        )}
      </div>
    </div>);

}