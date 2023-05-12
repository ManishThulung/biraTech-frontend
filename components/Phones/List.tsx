import React from "react";
import Accordion from "./Accordion";

const List = () => {
  return (
    <div className="container ">
      <div className="">
        {/* <Accordion title={"Apple"} /> */}
      </div>
      <div className="py-10">
        <Accordion title={"Apple"} />
      </div>
      <div className="py-10">
        <Accordion title={"Apple"} />
      </div>
      <div className="py-10">
        <Accordion title={"Apple"} />
      </div>
    </div>
  );
};

export default List;
