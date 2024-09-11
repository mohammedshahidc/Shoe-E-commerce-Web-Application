import React from 'react'

const Notfound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500 text-white w-screen">
        <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-extrabold text-center mb-8">
          404
          <span className="absolute top-0 left-0 w-full h-full text-black opacity-25 blur-lg">
            404
          </span>
        </h1>

        <div className="cloak__wrapper fixed inset-0 overflow-hidden">
          <div className="cloak__container absolute inset-0 flex items-center justify-center">
            <div className="cloak rounded-full w-[250vmax] h-[250vmax] bg-gradient-radial from-transparent to-black"></div>
          </div>
        </div>

        <div className="info text-center max-w-md px-4">
          <h2 className="text-2xl font-light mb-4">We can't find that page</h2>
          <p className="font-light mb-12">
            We're fairly sure that page used to be here, but it seems to have gone missing. We do apologize on its behalf.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Notfound
