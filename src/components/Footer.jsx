import React from 'react'
import Accordion from './Accordion'
import '../App.css'

const Footer = () => {
    const accordionItems = [
        {
            title: 'Can education flashcard be used for all groups?', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ratione hic est voluptates eum iste officiis, quod cupiditate facere fuga necessitatibus natus qui quae ipsa.Natus ducimus iste ab omnis aliquam"
        },
        {
            title: 'How do education flashcard work?', content: 'ipsum dolor sit amet consectetur adipisicing elit.Ratione hic est voluptates eum iste officiis'
        },
        {
            title: 'Can education flashcard be used for test prepartation? ', content: 'eum iste officiis, quod cupiditate facere fuga necessitatibus natus qui quae ipsa.Natus ducimus iste ab omnis aliquam'
        },
    ];

    return (
        <div className="faq">
            <Accordion items={accordionItems} />
        </div>
    )
}

export default Footer
