import React from "react";

const Card = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:mx-16 mx-5 grid-cols-1 gap-5 lg:mb-10 my-5">
        <div className="border-green-100 border p-2 rounded-md shadow-md flex flex-col justify-between h-full">
          <img
            // src={imageURL}
            alt=""
            className="object-cover object-center w-full rounded-md h-60 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
              <div className="card-actions justify-start">
                <div className="badge badge-outline">
                  <span className="font-bold mr-1">Category:</span>
                  {/* {stockStatus} */}
                </div>
                <div className="badge badge-outline">
                  <span className="font-bold mr-1">Rating:</span>
                  {/* {rating} */}
                </div>
                <div className="badge badge-outline">
                  <span className="font-bold mr-1">Price:</span>
                  {/* {price}$ */}
                </div>
                <div className="badge badge-outline">
                  <span className="font-bold mr-1">Creation date&time:</span>
                  {/* {time}$ */}
                </div>
              </div>
            </span>
            <p className=" tracking-wide"></p>
            <h2 className="text-xl font-semibold ">Name</h2>

            <p className="dark:text-gray-800">description</p>
          </div>

          <div
            // onClick={() => navigate(`/details/${_id}`)}
            className="mt-auto flex justify-center"
          >
            <button className="relative inline-flex items-center px-12 py-1 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-200 rounded-lg hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-purple-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative flex justify-center gap-1 items-center">
                View Details
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
