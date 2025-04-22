function FeatureCard({ icon, title, description, color = "blue" }) {
  // Define color scheme based on the color prop
  const colorSchemes = {
    blue: {
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hoverBorder: "group-hover:border-blue-500"
    },
    green: {
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hoverBorder: "group-hover:border-green-500"
    },
    purple: {
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      hoverBorder: "group-hover:border-purple-500"
    },
    yellow: {
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      hoverBorder: "group-hover:border-yellow-500"
    },
    red: {
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      hoverBorder: "group-hover:border-red-500"
    },
    indigo: {
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      hoverBorder: "group-hover:border-indigo-500"
    }
  };

  const scheme = colorSchemes[color] || colorSchemes.blue;

  return (
    <div className="group h-full" data-id="ukdrwqebi" data-path="components/FeatureCard.js">
      <div className="h-full p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md card-hover" data-id="1iyac4cpi" data-path="components/FeatureCard.js">
        <div className={`w-12 h-12 ${scheme.iconBg} rounded-full flex items-center justify-center mb-4`} data-id="61v8noeue" data-path="components/FeatureCard.js">
          <i className={`fas ${icon} text-xl ${scheme.iconColor}`} data-id="7o8vm5xyv" data-path="components/FeatureCard.js"></i>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900" data-id="jwu6c2j50" data-path="components/FeatureCard.js">{title}</h3>
        <p className="text-gray-600" data-id="a6q18mwhd" data-path="components/FeatureCard.js">{description}</p>
      </div>
    </div>);

}