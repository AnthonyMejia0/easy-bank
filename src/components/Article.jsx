function Article({ img, author, title, text }) {
  return (
    <div className="bg-white pb-10 lg:w-[16.25rem]">
      <div className="rounded-t-md overflow-hidden h-[13rem] lg:h-[14rem]">
        <img
          className="-translate-y-4 scale-y-105 lg:w-full lg:h-full"
          src={img}
          alt={`${title}`}
        />
      </div>
      <div className="pt-7 lg:pt-5 space-y-3">
        <p className="pl-7 lg:pl-5 text-sm text-grayish-blue">by {author}</p>
        <h3 className="pl-7 lg:pl-5 pr-8 text-dark-blue text-base cursor-pointer hover:text-lime-green">
          {title}
        </h3>
        <p className="pl-7 lg:pl-5 pr-4 lg:pr-2 text-sm text-grayish-blue">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Article;
