function UsageIndicator({ current, limit, label, className = "", onUpgrade }) {
  // Calculate usage percentage
  const percentage = limit === Infinity ? 0 : Math.min(100, current / limit * 100);

  // Determine color based on usage
  const getBarColor = () => {
    if (percentage < 60) return "bg-green-500";
    if (percentage < 85) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Display infinity for unlimited plans
  const displayLimit = limit === Infinity ? "Unlimited" : limit;

  // Format the label (e.g., "activity" -> "Activities")
  const formatLabel = (str) => {
    if (!str) return "";
    // Ensure the first letter is capitalized and add an 's' if it doesn't end with one
    return str.charAt(0).toUpperCase() + str.slice(1) + (str.endsWith('s') ? '' : 's');
  };

  return (
    <div className={`${className}`} data-id="g91ag6q1c" data-path="components/UsageIndicator.js">
      <div className="flex justify-between mb-1" data-id="b0dpixh27" data-path="components/UsageIndicator.js">
        <span className="text-sm font-medium text-gray-700" data-id="0is4auwhl" data-path="components/UsageIndicator.js">
          {formatLabel(label)}
        </span>
        <span className="text-sm font-medium text-gray-700" data-id="ofmmjwvr6" data-path="components/UsageIndicator.js">
          {current} / {displayLimit}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5" data-id="mqrumxl62" data-path="components/UsageIndicator.js">
        <div
          className={`${getBarColor()} h-2.5 rounded-full`}
          style={{ width: `${percentage}%` }} data-id="f4inf2opd" data-path="components/UsageIndicator.js">
        </div>
      </div>
      
      {/* Show upgrade button when usage is high */}
      {percentage > 80 && displayLimit !== "Unlimited" &&
      <div className="mt-2 text-right" data-id="sahi5huqi" data-path="components/UsageIndicator.js">
          <button
          onClick={onUpgrade}
          className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center ml-auto" data-id="2aqd9srzp" data-path="components/UsageIndicator.js">

            <i className="fas fa-arrow-circle-up mr-1" data-id="dxnntypjl" data-path="components/UsageIndicator.js"></i>
            Upgrade for more {label || "usage"}
          </button>
        </div>
      }
    </div>);

}