import React from "react";
import { useState } from "react";

const Accordion = ({ faq, isOpen, onToggle }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-title">
        <h2>{faq.title}</h2>
        <button
          className="accordion-btn"
          //   onClick={() => setIsOpen((current) => !current)}
          onClick={onToggle}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {/* {isOpen ? <p>{faq.content}</p> : ""} */}
      {isOpen && <p>{faq.content}</p>}
    </div>
  );
};

export default Accordion;
