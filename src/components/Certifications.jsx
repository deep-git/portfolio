import React from 'react'

const Certifications = () => {
  return (
    <div id="certifications" className="min-h-screen mt-52 bg-slate-100 flex flex-col justify-center items-center">
      <div>
        <h2 className="text-3xl">Certifications</h2>
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-10 w-full h-96 flex-wrap">
        <div className="flex-1 flex justify-center items-center h-full bg-slate-200">
          <h3 className="text-2xl">Codecademy Frontend</h3>
        </div>
        <div className="flex-1 flex justify-center items-center h-full bg-slate-200">
          <h3 className="text-2xl">Codecademy Full-stack</h3>
        </div>
      </div>
    </div>
  )
}

export default Certifications