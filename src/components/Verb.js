import React from 'react'

const Verb = () => {
  return (
    <div className="mt-5">
        <section className="flex items-center mb-4">
            <span className="font-serif mr-3 font-bold">verb</span>
            <div className="w-full h-[1px] bg-slate-200"></div>
        </section>
        <h2 className="text-slate-400 font-serif mb-4">Meaning</h2>
        <ul className="list-disc list-inside ml-5 mb-7">
            <li>
                <p>To type on a computer keyboard...</p>
                <p className='text-slate-400'>"Keyboard is the part of this job..."</p>
            </li>
        </ul>
        <div className='w-full h-[1px] bg-slate-200'></div>
    </div>
  )
}

export default Verb