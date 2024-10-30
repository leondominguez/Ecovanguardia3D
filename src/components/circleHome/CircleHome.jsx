
import "./CircleHome.css"
function CircleHome() {
    
  return (
    <div className="flex flex-col items-center" style={{width: "200px"}}>
      {/* Circular badge background */}
      <div className="relative bg-gray-100 rounded-full p-6 w-24 h-24 flex items-center justify-center">
        {/* Green dot at top */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full" />
        
        {/* SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Water waves */}
          <path
            d="M2 12C2 12 5 8 12 8C19 8 22 12 22 12"
            stroke="#4B5563"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Turtle/jellyfish body */}
          <path
            d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
            fill="#4B5563"
          />
          {/* Bubbles */}
          <circle cx="7" cy="6" r="1" fill="#4B5563" />
          <circle cx="17" cy="6" r="1" fill="#4B5563" />
        </svg>
      </div>
      
      {/* Text below */}
      <div className="mt-2 text-center">
        <p className="text-gray-700 font-medium">Contaminacion</p>
        <p className="text-gray-700 font-medium">del agua</p>
      </div>
    </div>
  )
}

export default CircleHome