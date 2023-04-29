"use client";
import Link from "next/link";
import Image from "next/image";
import banner from "../../public/images/phones/phone1.png";
import cardPhone from "../../public/images/phones/cardPhone.jpg";
import {
  useGetPhoneByIdQuery,
  useGetPhonesQuery,
} from "@/redux/services/phoneApi";

const Hero = () => {
  const { isLoading, isFetching, data, error } = useGetPhonesQuery(null);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isFetching) {
    return <div>fetching</div>;
  }
  if (error) {
    console.log(error, "error");
    return <div>loading</div>;
  }
  console.log(data, "data");

  return (
    <>
      <section
        id="home"
        className="  pt-[50px] md:pb-[50px] md:pt-[50px] xl:pb-[50px] xl:pt-[50px]"
      >
        <div className="container">
          {/* banner */}
          <div className="flex  items-center pb-14">
            <div className="h-[380px] w-[500px]">
              <Image src={banner} alt="banner" className="h-full w-full" />
            </div>
            <div>
              <h2 className="font-sans text-5xl font-bold">top smart phones</h2>
              <h2 className="font-sans text-5xl font-bold">2022</h2>
              <button className="text-red-400 font-sans hover:underline">
                Read more
              </button>
            </div>
          </div>
          {/* mobile cards */}
          <div className="flex item-center gap-5">
            <div className="max-w-sm w-[20%] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <div className="w-full h-[35vh]">
                <Image
                  className="rounded-t-xl w-full h-full"
                  src={cardPhone}
                  alt="mobile"
                />
              </div>
              <div className="bg-[#252728] px-2 pb-10 pt-1 ">
                <h4 className="font-sans font-bold text-white">
                  Upcomming smartphones
                </h4>
                <button className="text-gray-500">Read more</button>
              </div>
            </div>
            <div className="max-w-sm w-[20%] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <div className="w-full h-[35vh]">
                <Image
                  className="rounded-t-xl w-full h-full"
                  src={cardPhone}
                  alt="mobile"
                />
              </div>
              <div className="bg-[#252728] px-2 pb-10 pt-1 ">
                <h4 className="font-sans font-bold text-white">
                  Upcomming smartphones
                </h4>
                <button className="text-gray-500">Read more</button>
              </div>
            </div>
            <div className="max-w-sm w-[20%] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <div className="w-full h-[35vh]">
                <Image
                  className="rounded-t-xl w-full h-full"
                  src={cardPhone}
                  alt="mobile"
                />
              </div>
              <div className="bg-[#252728] px-2 pb-10 pt-1 ">
                <h4 className="font-sans font-bold text-white">
                  Upcomming smartphones
                </h4>
                <button className="text-gray-500">Read more</button>
              </div>
            </div>
            <div className="max-w-sm w-[40%]   rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <div className="w-[100%] h-[35vh]">
                <Image
                  className="rounded-t-xl w-full h-full"
                  src={cardPhone}
                  alt="mobile"
                />
              </div>
              <div className="bg-[#252728] px-2 pb-10 pt-1 ">
                <h4 className="font-sans font-bold text-white">
                  Upcomming smartphones
                </h4>
                <button className="text-gray-500">Read more</button>
              </div>
            </div>
          </div>
          {/* mobile cards */}
          <div className="flex item-center my-20 gap-5">
            <div className="max-w-sm w-[25%] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <div className="w-full h-[35vh]">
                <Image
                  className="rounded-t-xl w-full h-full"
                  src={cardPhone}
                  alt="mobile"
                />
              </div>
              <div className="bg-[#252728] px-2 pb-10 pt-1 ">
                <h4 className="font-sans font-bold text-white">
                  Upcomming smartphones
                </h4>
                <button className="text-gray-500">Read more</button>
              </div>
            </div>
            <div className="max-w-sm w-[25%] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <div className="w-full h-[35vh]">
                <Image
                  className="rounded-t-xl w-full h-full"
                  src={cardPhone}
                  alt="mobile"
                />
              </div>
              <div className="bg-[#252728] px-2 pb-10 pt-1 ">
                <h4 className="font-sans font-bold text-white">
                  Upcomming smartphones
                </h4>
                <button className="text-gray-500">Read more</button>
              </div>
            </div>
            <div className="max-w-sm w-[25%]  rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <div className="w-full h-[35vh]">
                <Image
                  className="rounded-t-xl w-full h-full"
                  src={cardPhone}
                  alt="mobile"
                />
              </div>
              <div className="bg-[#252728] px-2 pb-10 pt-1 ">
                <h4 className="font-sans font-bold text-white">
                  Upcomming smartphones
                </h4>
                <button className="text-gray-500">Read more</button>
              </div>
            </div>
            <div className="max-w-sm w-[25%]  rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <div className="w-full h-[35vh]">
                <Image
                  className="rounded-t-xl w-full h-full"
                  src={cardPhone}
                  alt="mobile"
                />
              </div>
              <div className="bg-[#252728] px-2 pb-10 pt-1 ">
                <h4 className="font-sans font-bold text-white">
                  Upcomming smartphones
                </h4>
                <button className="text-gray-500">Read more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tl mt-10 from-slate-200 to-zinc-200">
          <div className="container flex items-center justify-between">
            <div>
              <h5 className="font-sans text-4xl font-bold">
                {" "}
                Learn about 5G and every other networks
              </h5>
              <button className="text-red-400 hover:underline">
                Read more
              </button>
            </div>
            <div>
              <div className="h-[300px] w-[300px]">
                <Image src={banner} alt="banner" className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tl my-10 bg-[#9ADCE6]">
          <div className="container flex items-center justify-between">
            <div>
              <h5 className="font-sans text-4xl font-bold">
                {" "}
                Recommend phones see what people like
              </h5>
              <button className="text-red-400 hover:underline">
                Read more
              </button>
            </div>
            <div>
              <div className="h-[300px] w-[300px]">
                <Image src={banner} alt="banner" className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
