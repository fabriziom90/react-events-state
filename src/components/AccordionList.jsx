import React from "react";
import Accordion from "./Accordion";
const faqs = [
  {
    id: 1,
    title: "Accordion 1",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Accordion 2",
    content: "Lorem ipsum dolor sit amet",
  },
];

const AccordionList = () => {
  return (
    <div className="accordion-list">
      {faqs.map((faq) => {
        return <Accordion key={faq.id} faq={faq} />;
      })}
    </div>
  );
};

export default AccordionList;
