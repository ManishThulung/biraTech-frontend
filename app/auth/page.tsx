"use client";
import { useState } from "react";

const page = () => {
  const [signup, setSignup] = useState(false);
  return (
    <>
      <div className="bg-[#FAFAFA]  py-5 ">
        <div className="xl:container px-4 xl:px-36 xl:mx-auto mt-20">
          <div className="flex justify-center">
            <div>
              <div className="bg-[#e5f1f9] xl:mx-20 mx-10 rounded-full px-2 py-2">
                <button className="text-white text-[13px] mx-3 py-[3px] px-8 rounded-full bg-[#0063a0]">
                  Login
                </button>
                <button className="text-blue-500 hover:text-white hover:bg-[#0063a0] text-[13px] py-[3px] px-8 rounded-full">
                  Register
                </button>
              </div>
              {!signup && (
                <>
                  <div>
                    <label className="text-sm">User name</label>
                    <br />
                    <input
                      placeholder="Enter your User Name"
                      className="px-5 xl:w-[400px] w-full text-black my-3 text-sm py-2  border border-blue-400 focus:ring-blue-500 rounded-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Password</label>
                    <br />
                    <input
                      placeholder="Enter your Password"
                      className="px-5 xl:w-[400px] w-full my-1 text-sm py-2 text-black  border border-blue-400 focus:ring-blue-500 rounded-full"
                    />
                  </div>
                  <div className="flex text-[13px] mt-2 justify-between">
                    <div>
                      <input type="checkbox" defaultValue="" id="remember me" />
                      <label
                        className="inline-block mx-1 hover:cursor-pointer"
                        htmlFor="remember me"
                      >
                        Remember me
                      </label>
                    </div>
                    <div>
                      <span className="text-[13px]">Forget Password ?</span>
                    </div>
                  </div>
                </>
              )}

              {signup && (
                <>
                  <div>
                    <label className="text-sm">Email Address</label>
                    <br />
                    <input
                      placeholder="Enter your Email"
                      className="px-5 xl:w-[400px] w-full text-black my-3 text-sm py-2 border border-blue-400 focus:ring-blue-500 rounded-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm">User name</label>
                    <br />
                    <input
                      placeholder="Enter your User name"
                      className="px-5 xl:w-[400px] w-full my-1 text-sm py-2 text-black border border-blue-400 focus:ring-blue-500 rounded-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Password</label>
                    <br />
                    <input
                      placeholder="Enter your Password"
                      className="px-5 xl:w-[400px] w-full my-1 text-sm py-2 text-black border border-blue-400 focus:ring-blue-500 rounded-full"
                    />
                  </div>
                </>
              )}

              <div className="flex justify-end py-8">
                <button onClick={()=>{
                   setSignup(!signup)
                }} className="text-white text-[14px] py-[5px] px-14 rounded-full bg-[#0063a0]">
                  {signup ? "Signup" : "Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
