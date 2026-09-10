import bannerLogo from "../../assets/banner-stack.png";

export default function Hero() {
  return (
    <div className="container mx-auto max-w-7xl flex justify-between mt-[80px] mb-[50px] items-center">
      {/* LEFT */}
      <div className="">
        <h1 className=" text-[40px] font-extrabold leading-10">
          Build Your Ideal
          <span>
            <h1 className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600  bg-clip-text text-transparent">
              Development Stack
            </h1>
          </span>
        </h1>

        <p className="pt-6 pb-6">
          Explore frontend, backend, database, and tooling options,
          <br />
          <span>
            compare them side by side, and put together the stack that fits your
          </span>
          <br />
          <span>next project.</span>
        </p>
        <div className="flex gap-5 ">
          <button className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white px-6 py-3 rounded-md">
            Explore Technologies
          </button>
          <button className="border-2 border-gray-200 rounded-md px-6 py-3 ">
            Learn More
          </button>
        </div>
      </div>
      {/* RIGHT */}
      <img src={bannerLogo} alt="" className="w-87.5 h-80" />
    </div>
  );
}
