import Article from "./Article";
import Money from "../images/image-currency.jpg";
import Food from "../images/image-restaurant.jpg";
import Plane from "../images/image-plane.jpg";
import Confetti from "../images/image-confetti.jpg";

function Articles() {
  return (
    <div className="bg-very-light-gray py-24 lg:px-[10.5rem]">
      <h2 className="text-center lg:text-left text-dark-blue text-[2rem] lg:text-[2.5rem] mb-8">
        Latest Articles
      </h2>
      <div className="flex flex-col lg:flex-row space-y-20 lg:space-y-0 justify-center lg:justify-between px-5 lg:px-0">
        <Article
          img={Money}
          author="Claire Robinson"
          title="Recieve money in any currency with no fees"
          text="The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single ..."
        />

        <Article
          img={Food}
          author="Wilson Hutton"
          title="Treat yourself without worrying about money"
          text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
        />

        <Article
          img={Plane}
          author="Wilson Hutton"
          title="Take your Easybank card wherever you go"
          text="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
        />

        <Article
          img={Confetti}
          author="Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          text="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
        />
      </div>
    </div>
  );
}

export default Articles;
