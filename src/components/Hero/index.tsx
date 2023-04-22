/* eslint-disable react/no-unescaped-entities */
export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto p-4 max-w-7xl h-screen z-10 relative gap-4">
      <h1 className="text-7xl font-extrabold text-cyan-500">Fast Store 🚀</h1>
      <p className="text-xl text-center max-w-2xl">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
      </p>
      <button className="rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors ease-in" >Go to products</button>
    </div>
  )
}