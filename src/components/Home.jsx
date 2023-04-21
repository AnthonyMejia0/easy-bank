import MobileBG from "../images/bg-intro-mobile.svg";
import DesktopBG from "../images/bg-intro-desktop.svg";
import Mockups from "../images/image-mockups.png";

function Home() {
  return (
    <div className="pb-24 lg:h-[calc(68.5vh-5rem)] bg-very-light-gray">
      <div className="lg:grid lg:grid-cols-12 lg:h-full">
        <div className="relative lg:hidden">
          <img
            className="absolute -translate-y-16 w-full"
            src={MobileBG}
            alt="Mobile Background"
          />
          <img
            className="-translate-y-[31%] w-full scale-[91.5%]"
            src={Mockups}
            alt="Mobile Mockups"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start -mt-36 lg:mt-32 lg:ml-[10.5rem] lg:col-span-6 space-y-5 lg:space-y-7">
          <h1 className="text-[2.5rem] lg:text-[3.275rem] text-dark-blue text-center lg:text-left leading-tight">
            Next generation <br /> digital banking
          </h1>
          <p className="text-grayish-blue text-sm lg:text-[1.05rem] lg:leading-7 text-center lg:text-left w-[80vw] lg:w-[77%] mx-auto lg:mx-0 pb-2">
            Take your financial life online. Your EasyBank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="px-7 py-3 lg:px-[2.2rem] rounded-full text-white font-bold text-sm lg:text-base bg-gradient-to-r from-lime-green to-bright-cyan hover:opacity-50 cursor-pointer">
            Request Invite
          </button>
        </div>
        <div className="relative hidden z-0 lg:block lg:col-span-6">
          <img
            className="scale-[1.7] -translate-y-[9.75%] translate-x-[20.5%]"
            src={DesktopBG}
            alt="Desktop Background"
          />
          <img
            className="absolute top-0 right-10 -translate-y-[11%] translate-x-[21%] scale-105"
            src={Mockups}
            alt="Mockups"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
