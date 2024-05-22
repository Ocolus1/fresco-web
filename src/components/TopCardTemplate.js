

export default function Widget({icon, content, number, width, color}) {
    return (
        <div className={`w-[389.33px] max-w-sm ${color} text-white rounded-lg p-4`}>
          <div className="flex items-center mb-4">
            {icon}
          </div>
          <div className="bg-white/30 p-4 border border-white/50 rounded-lg">
            <div className="text-sm">{content}</div>
            <div className="text-3xl font-bold">{number}</div>
            <div className="mt-4">
              <div className="w-full bg-white rounded-full h-2.5">
                <div className={`${color} h-2.5 rounded-full`} 
                style={{width: width}}
                ></div>
              </div>
            </div>
          </div>
        </div>
    )
}