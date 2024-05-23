

export default function Widget({icon, content, number, width, color, divWidth, numberFont, widthHeight, contentFont}) {
    return (
        <div className={` ${divWidth} max-w-sm ${color} text-white rounded-lg p-4`}>
          <div className="flex items-center mb-4">
            {icon}
          </div>
          <div className="bg-white/30 p-4 border border-white/50 rounded-lg">
          <div className={`${contentFont}`}>{content}</div>
            <div className={` ${numberFont} font-bold`}>{number}</div>
            <div className="mt-4">
              <div className={`w-full bg-white rounded-full ${widthHeight}`}>
                <div className={`${color} ${widthHeight} rounded-full`} 
                style={{width: width}}
                ></div>
              </div>
            </div>
          </div>
        </div>
    )
}