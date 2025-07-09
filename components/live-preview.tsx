interface LivePreviewProps {
  url: string;
  title: string;
  performanceBadge?: string;
  stats?: Array<{
    value: string;
    label: string;
    color: string; // 'green' | 'primary' | 'orange' | etc.
  }>;
  height?: string;
}

export default function LivePreview({ 
  url, 
  title, 
  performanceBadge = "99+ PageSpeed",
  stats = [
    { value: "3x", label: "More Leads", color: "green" },
    { value: "99+", label: "PageSpeed", color: "primary" },
    { value: "7", label: "Days to Results", color: "orange" }
  ],
  height = "600px"
}: LivePreviewProps) {
  const getStatColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'text-green-600';
      case 'primary':
        return 'text-primary';
      case 'orange':
        return 'text-orange-600';
      case 'blue':
        return 'text-blue-600';
      case 'purple':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  // Extract domain from URL for display
  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="p-8">
      <div className="relative">
        {/* Browser Mockup Header */}
        <div className="bg-gray-100 rounded-t-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-white rounded-lg px-4 py-2 flex items-center">
                <div className="w-4 h-4 text-gray-400 mr-2">🔒</div>
                <span className="text-sm text-gray-600 truncate">{displayUrl}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-6 h-4 bg-gray-300 rounded"></div>
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Live Website Embed */}
        <div 
          className="relative bg-white border-x border-b border-gray-200 rounded-b-xl overflow-hidden" 
          style={{ height }}
        >
          {/* Performance Badge */}
          {performanceBadge && (
            <div className="absolute z-10 top-4 right-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              {performanceBadge}
            </div>
          )}
          
          {/* Embedded iframe */}
          <iframe
            src={url}
            title={title}
            className="w-full h-full border-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-navigation"
            allow="navigation"
          />
        </div>

        {/* Results Highlight Strip */}
        {stats && stats.length > 0 && (
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200/50 px-8 py-4">
            <div className="flex items-center justify-center space-x-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div>
                    <div className={`font-bold text-2xl ${getStatColor(stat.color)}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="h-8 w-px bg-gray-200 ml-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
