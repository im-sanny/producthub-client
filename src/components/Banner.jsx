const Banner = () => {
  return (
    <>
      <div className="my-5 rounded-lg h-auto mx-5">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `url('https://i.ibb.co/VvqhrLP/pexels-karolina-grabowska-5650052.jpg')`,
              height: "500px",
            }}
          >
            <div className=" flex flex-col justify-center items-center h-full w-full">
              <div className="my-auto text-center p-5 rounded-lg">
                <p className="lg:text-4xl text-2xl font-bold text-white shadow-yellow-100 shadow-xl">
                  Discover Your Ideal Products at ProductHub!
                </p>
                <p className="text-2xl text-white font-semibold">
                  Find Everything You Need, All in One Place
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
