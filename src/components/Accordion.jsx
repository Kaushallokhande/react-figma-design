import React, { useState } from 'react';
import '../App.css';
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className={`accordion-item ${index === openIndex ? 'open' : ''}`}>
          <div className='text-record'>
            <div className="accordion-header">
              {item.title}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => handleToggle(index)} width='30px' height='30px' style={{margin: '2px'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <div className="accordion-content">
            <div className="content-inner">{index === openIndex && item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
