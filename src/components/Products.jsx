import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import Card from "./Card";

const Products = () => {
  return (
    <>
      {/* main search */}
      <div className="flex justify-center items-center mb-5 mx-5">
        <input
          id="search-field"
          type="text"
          placeholder="search..."
          class="input input-bordered w-full max-w-xs my-6"
        />
        <button onclick="handleSearch()" class="btn btn-active btn-accent">
          Search
        </button>
      </div>

      {/* all the sorting and categories */}
      <div className="grid grid-cols-3 lg:grid-cols-5  justify-center items-center mb-10 mx-5 lg:mx-20 gap-4">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Brand Name
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Category Name
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Max Price
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Min Price
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>

        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Sort By
          </option>
          <option>Price</option>
          <option>Date Added</option>
        </select>
      </div>

      {/* cards */}
      <Card></Card>

      {/* pagination */}
      <div className="flex flex-col justify-center items-center w-full mb-10">
        <div className="flex">
          <a
            href="#"
            className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
          >
            <div className="flex items-center -mx-1">
              <GoArrowLeft />

              <span className="mx-1">previous</span>
            </div>
          </a>

          <a
            href="#"
            className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          >
            1
          </a>

          <a
            href="#"
            className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          >
            2
          </a>

          <a
            href="#"
            className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          >
            3
          </a>

          <a
            href="#"
            className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          >
            4
          </a>

          <a
            href="#"
            className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          >
            5
          </a>

          <a
            href="#"
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>

              <GoArrowRight />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Products;
