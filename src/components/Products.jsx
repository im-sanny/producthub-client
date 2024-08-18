import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const queryParams = new URLSearchParams({
        page: currentPage,
        limit: 8,
        search: searchQuery,
        brand: selectedBrand,
        category: selectedCategory,
        minPrice,
        maxPrice,
        sort: sortOption,
      });

      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/products?${queryParams}`
      );
      setProducts(data.products);
      setTotalPages(data.totalPages);
    };
    getData();
  }, [
    currentPage,
    searchQuery,
    selectedBrand,
    selectedCategory,
    minPrice,
    maxPrice,
    sortOption,
  ]);

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedBrand("");
    setSelectedCategory("");
    setMinPrice("");
    setMaxPrice("");
    setSortOption("");
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      {/* main search */}
      <div className="flex justify-center items-center mb-5 mx-5">
        <input
          id="search-field"
          type="text"
          placeholder="search..."
          className="input input-bordered w-full max-w-xs my-6"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleFilterChange();
          }}
        />
        <button
          onClick={handleFilterChange}
          className="btn btn-active btn-accent"
        >
          Search
        </button>
        <button onClick={handleReset} className="btn btn-secondary ml-2">
          Reset
        </button>
      </div>

      {/* all the sorting and categories */}
      <div className="grid grid-cols-3 lg:grid-cols-5 justify-center items-center mb-10 mx-5 lg:mx-20 gap-4">
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedBrand}
          onChange={(e) => {
            setSelectedBrand(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="" disabled>
            Brand Name
          </option>
          <option>SoundMax</option>
          <option>TechHold</option>
          <option>SafeCarry</option>
          <option>FitPro</option>
          <option>EcoFlex</option>
        </select>

        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="" disabled>
            Category Name
          </option>
          <option>Electronics</option>
          <option>Accessories</option>
          <option>Bags</option>
          <option>Wearables</option>
          <option>Fitness</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          className="input input-bordered w-full max-w-xs"
          value={minPrice}
          onChange={(e) => {
            setMinPrice(e.target.value);
            handleFilterChange();
          }}
        />

        <input
          type="number"
          placeholder="Max Price"
          className="input input-bordered w-full max-w-xs"
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(e.target.value);
            handleFilterChange();
          }}
        />

        <select
          className="select select-bordered w-full max-w-xs"
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="" disabled>
            Sort By
          </option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Date Added: Newest First</option>
        </select>
      </div>

      {/* cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 lg:mb-10 my-5 lg:mx-16 mx-5">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>

      {/* pagination */}
      <div className="flex flex-col justify-center items-center w-full mb-10">
        <div className="flex flex-wrap justify-center items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === 1
                ? "text-gray-500 cursor-not-allowed"
                : "text-gray-700 hover:text-white bg-white dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500"
            } rounded-md`}
            disabled={currentPage === 1}
          >
            <div className="flex items-center -mx-1">
              <GoArrowLeft />
              <span className="mx-1 hidden sm:inline">Previous</span>
            </div>
          </button>

          {/* Page Numbers for larger screens */}
          <div className="hidden sm:flex">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed"
                : "text-gray-700 hover:text-white bg-white dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500"
            } rounded-md`}
            disabled={currentPage === totalPages}
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1 hidden sm:inline">Next</span>
              <GoArrowRight />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
