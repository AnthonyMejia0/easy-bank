import React from "react";

function Reason({ icon, title, desc }) {
  return (
    <div className="flex flex-col lg:w-[16.25rem] items-center lg:items-start space-y-7">
      <img src={icon} alt={`${title} icon`} />
      <h3 className="text-xl">{title}</h3>
      <p className="text-center lg:text-left text-[0.95rem] text-grayish-blue px-1 leading-normal">
        {desc}
      </p>
    </div>
  );
}

export default Reason;
