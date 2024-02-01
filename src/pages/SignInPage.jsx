import React from "react";
import logo from "../assets/Ellipse1.png";
import vector from "../assets/Vector1.png";
import github from "../assets/Github1.png";
import twitter from "../assets/Twitter1.png";
import linkedIn from "../assets/LinkedIn1.png";
import discord from "../assets/Discord1.png";
import leftSide from "../assets/LeftSide.png";
import SignInForm from "../components/SignInForm";
import googleSignIn from "../assets/GoogleSignIn.png";
import appleSignIn from "../assets/AppleSignIn.png";

const SignInPage = () => {
  return (
    <div className="flex h-[100%] flex-wrap overflow-hidden">
      <div
        className="flex items-center md:items-stretch md:flex-col bg-cover w-full md:w-1/2 p-10 bg-[#605BFF] md:bg-inherit h-[80px] md:h-auto"
        style={{ backgroundImage: `url(${leftSide})` }}
      >
        {/* LOGO */}
        <div
          className="bg-cover flex items-center md:w-20 md:h-20 w-10 h-10 "
          style={{ backgroundImage: `url(${logo})` }}
        >
          <img src={vector} alt="Logo" />
        </div>
        <div className="mx-2 md:flex-grow flex items-center justify-center text-white text-4xl md:text-6xl font-semibold font-sans font-montserrat">
          BASE
        </div>
        <div className="hidden md:flex items-center justify-center space-x-5">
          <img src={github} alt="Github" />
          <img src={twitter} alt="Twitter" />
          <img src={linkedIn} alt="LinkedIn" />
          <img src={discord} alt="Discord" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col text-center md:text-left items-center justify-center px-4 md:px-0">
        <div className="w-full md:w-[400px] flex flex-col gap-2 font-semibold">
          <h1 className="font-bold text-2xl md:text-3xl">Sign In</h1>
          <p>Sign in to your account</p>
          <div className="flex my-2 gap-1">
            <img
              src={googleSignIn}
              alt="Google Sign In"
              className="border rounded cursor-pointer w-1/2"
            />
            <img
              src={appleSignIn}
              alt="Apple Sign In"
              className="border rounded cursor-pointer w-1/2"
            />
          </div>
        </div>
        <div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
