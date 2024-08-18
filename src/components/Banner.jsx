const Banner = () => {
  return (
    <>
      <div className="my-5 rounded-lg h-auto mx-5">
        <div className="max-w-7xl mx-auto">
            <div
              className="rounded-lg bg-cover bg-fixed bg-center"
              style={{
                backgroundImage: `url('https://i.ibb.co/svVbpj0/1849-R0l-VIEp-FTi-A3-MDgt-NTE.jpg')`,
                height: "500px",
              }}
            >
              <div
                className=" flex flex-col justify-center items-center h-full w-full"
              >
                <div className="my-auto text-center p-5 rounded-lg">
                  <p className="lg:text-5xl md:text-3xl font-bold  max-w-2xl">
                    Welcome to ProductHub! <br />
                    Here You Can Get All The Products You Want
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
