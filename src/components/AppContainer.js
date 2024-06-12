import React from 'react'

const AppContainer = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 py-6 sm:py-12"
    >
      <img src="https://play.tailwindcss.com/img/beams.jpg" alt="bg" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative container mx-auto">
        {children}
      </div>
    </div>
  )
}

export default AppContainer