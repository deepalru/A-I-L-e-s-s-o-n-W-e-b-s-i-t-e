function DurationSelector({ selectedDuration, onSelectDuration }) {
  return (
    <div className="mb-8" data-id="dqd2amex1" data-path="components/DurationSelector.js">
      <h3 className="text-lg font-medium text-gray-900 mb-4" data-id="4nm0td9zw" data-path="components/DurationSelector.js">Select Lesson Duration</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" data-id="o2dpligus" data-path="components/DurationSelector.js">
        {durations.map((duration) =>
        <div
          key={duration.id}
          onClick={() => onSelectDuration(duration.id)}
          className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all ${
          selectedDuration === duration.id ?
          'bg-blue-50 border-blue-500 shadow-sm' :
          'bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`
          } data-id="tjtnouolr" data-path="components/DurationSelector.js">

            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${
          selectedDuration === duration.id ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'}`
          } data-id="8x9iuu3qt" data-path="components/DurationSelector.js">
              <i className={`fas ${duration.icon} text-lg`} data-id="yolebspol" data-path="components/DurationSelector.js"></i>
            </div>
            <span className="text-sm font-medium text-center" data-id="dpdritgm5" data-path="components/DurationSelector.js">{duration.name}</span>
          </div>
        )}
      </div>
    </div>);

}