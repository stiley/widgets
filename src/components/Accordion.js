import React, {useState} from 'react';

const Accordion = (({items}) => {
    // array destructuring Here we get the prop we want and a set function
    // which we use in the onTitleClicked method
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClicked = (index) => {
        setActiveIndex(index);
    }
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';
        return <React.Fragment key={item.title}>
            <div
                className={`title ${active}`}
                onClick={() => onTitleClicked(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>
                    {item.content}
                </p>
            </div>
        </React.Fragment>
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
});

export default Accordion;