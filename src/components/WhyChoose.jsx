import Reason from "./Reason";
import Online from "../images/icon-online.svg";
import Budget from "../images/icon-budgeting.svg";
import Onboard from "../images/icon-onboarding.svg";
import Api from "../images/icon-api.svg";

function WhyChoose() {
  return (
    <div className="bg-light-grayish-blue py-16 lg:py-28 px-3 lg:px-[10.5rem]">
      <div className="pb-10">
        <h2 className="text-dark-blue text-4xl lg:text-[2.5rem] leading-tight text-center lg:text-left">
          Why choose Easybank?
        </h2>
        <p className="text-grayish-blue text-sm lg:text-lg text-center lg:text-left pt-7 pb-5">
          We leverage Open Banking to turn your bank account into your financial
          hub. <br className="hidden lg:block" /> Control your finances like
          never before.
        </p>
      </div>
      <div className="space-y-10 lg:flex lg:justify-between lg:space-y-0">
        <Reason
          icon={Online}
          title="Online Banking"
          desc="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        />

        <Reason
          icon={Budget}
          title="Simple Budgeting"
          desc="See exactly where your money goes each month. Recieve notifications when you're close to your hitting limits."
        />

        <Reason
          icon={Onboard}
          title="Fast Onboarding"
          desc="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
        />

        <Reason
          icon={Api}
          title="Open Api"
          desc="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        />
      </div>
    </div>
  );
}

export default WhyChoose;
