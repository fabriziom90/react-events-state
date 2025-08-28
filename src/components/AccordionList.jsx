import React from "react";

import { useState } from "react";

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
  const [activeAccordion, setActiveAccordion] = useState(null);
  return (
    <div className="accordion-list">
      {faqs.map((faq) => {
        return (
          <Accordion
            key={faq.id}
            faq={faq}
            isOpen={activeAccordion === faq.id} //prop che sta passando alla componente un valore tra true e false a seconda se l'uguaglianza risulta vera o meno
            // onToggle={() => setActiveAccordion(faq.id)}
            onToggle={() =>
              setActiveAccordion(activeAccordion === faq.id ? null : faq.id)
            }
          />
        );
      })}
    </div>
  );
};

export default AccordionList;
