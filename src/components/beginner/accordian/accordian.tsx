import type { FC } from "react";
import { config as items } from "./accordian.config";
import AccordianItem from "./accordianItem";

const Accordian: FC<{}> = ({}) => {
  return (
    <div className="w-120 mx-auto">
      {items.map((item) => (
        <AccordianItem
          key={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordian;
