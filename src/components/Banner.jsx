const Banner = () => {
  return (
    <>
      <div className="my-5 rounded-lg h-auto mx-5">
        <div className="max-w-7xl mx-auto">
          <>
            <div
              className="rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://i.ibb.co/qmbh6fm/wallpaperflare-com-wallpaper.jpg')`,
                height: "500px",
              }}
            >
              <div
                className=" flex flex-col justify-center items-center h-full w-full"
              >
                <div className="my-auto text-center p-5 rounded-lg">
                  <p className="lg:text-5xl md:text-3xl font-bold bg-gradient-to-r from-green-300 via-pink-300 to-yellow-300 text-transparent bg-clip-text animate-gradient max-w-2xl">
                    Welcome to ProductHub! <br />
                    Here You Can Get All The Product You Want
                  </p>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Banner;
