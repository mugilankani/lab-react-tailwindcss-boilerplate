export default function App() {
  return (
    <div className="bg-blue-700 w-full h-screen ">

      <div className=" w-auto h-20 bg-red-300 mb-5 flex p-3 justify-between items-center">
        <div className="flex items-center justify-between min-w-80">
          <h1 className=" text-2xl">Kalvium</h1>
          <h6 className=" text-gray-600">About Us</h6>
          <h6 className=" text-gray-600">Contacts</h6>
          <h6 className=" text-gray-600">Cource</h6>

        </div>
        <div>
          <button className=" border- border p-2 " >
            Login
          </button>
        </div>
      </div>

      <div className="mx-10 my-0 mb-10 bg-red-100 border border-red-100 text-red-700 px-4 py-3 rounded relative my-5">
        
        <strong className="font-bold">Alert!</strong>
        <span className="block sm:inline"> please update</span>
      </div>

      <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl"> 
        <div className="flex-shrink-0">
          <img src="/Kal.png" alt="" className="h-12 w-28" />
        </div>
        <div className="ml-6 pt-1 ">
          <h4 className="text-xl text-gray-800 ">Kalvium Store</h4>
          <p className="text-base text-gray-600">You have a new course</p>
        </div>
      
      </div>
      <div className="mt-12 h-12 bg-gray-400 flex items-center justify-center">
        <p className="text-gray-700">@ 2021 Copyright: Kalvium</p>
      </div>




    </div>
    
  )
}