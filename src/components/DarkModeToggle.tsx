import { useState } from 'react'

export default function DarkModeToggle() {
  const [on, setOn] = useState(true)

  return (
    <div className='darkmode-toggle'>
      <button
        className='toggle w-[3.2rem] bg-main-purple h-[1.6rem] rounded-xl flex items-center'
        onClick={() => setOn(!on)}
      >
        <div
          className={`toggle-button w-[1.2rem] h-[1.2rem] bg-white rounded-xl transition-[left] duration-1000 relative ${
            on ? 'left-[2px]' : 'left-[18px]'
          }`}
        />
      </button>
    </div>
  )
}
