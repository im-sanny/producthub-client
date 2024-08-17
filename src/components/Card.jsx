import React from "react";

const Card = ({ product }) => {
  const {
    category,
    description,
    productName,
    ratings,
    price,
    createdAt,
    productImage,
  } = product || {};
  return (
    <>
      <div className="border-green-100 border p-2 rounded-md shadow-md flex flex-col justify-between h-full w-full">
        <img
          src={productImage}
          alt=""
          className="object-cover object-center w-full rounded-md h-60 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            <div className="card-actions justify-start">
              <div className="badge badge-outline">
                <span className="font-bold mr-1">Category:</span>
                {category}
              </div>
              <div className="badge badge-outline">
                <span className="font-bold mr-1">Creation date&time:</span>
                {createdAt}
              </div>
              <div className="badge badge-outline">
                <span className="font-bold mr-1">Rating:</span>
                {ratings}
              </div>

              <div className="badge badge-outline">
                <span className="font-bold mr-1">Price:</span>
                {price}$
              </div>
            </div>
          </span>
          <p className=" tracking-wide"></p>
          <h2 className="text-xl font-semibold ">{productName}</h2>
          <p className="dark:text-gray-800">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
