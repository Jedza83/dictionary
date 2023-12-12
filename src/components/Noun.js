
const Noun = () => {
  return (
    <div className="mt-5">
        <section className="flex items-center mb-4">
            <span className="font-serif mr-3 font-bold">noun</span>
            <div className="w-full h-[1px] bg-slate-200"></div>
        </section>
        <h2 className="text-slate-400 font-serif mb-4">Meaning</h2>
        <ul className="list-disc list-inside ml-5 mb-7">
            <li>A set of keys used...</li>
            <li>A component of many instruments...</li>
            <li>A device with keys of a musical keyboard...</li>
        </ul>
        <div className="flex items-center flex-wrap font-serif">
            <h2 className="text-slate-400 mr-3">Synonymus</h2>
            <h2 className="text-violet-500 mr-2">electronic keyboard</h2>
        </div>
    </div>
  )
}

export default Noun