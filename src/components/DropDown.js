import React, { useEffect, useRef, useState } from 'react';

const DropDown = (props) => {
    const [ open, setOpen ] = useState(false);
    const ref = useRef();
    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        }, { capture: true })
    }, []); // we only want to set up the handler once thus the empty []
    const renderedOptions = props.options.map((option) => {
        if (option.value === props.selected.value) {
            return null;
        }
        return (
            <div
                key={ option.value } className="item"
                onClick={ () => {
                    {
                        props.onSelectedChanged(option)
                    }
                    // console.log("item click")
                } }
            >
                {option.label}
            </div>
        );

    });
    console.log(ref.current);
    return (
        <div ref={ ref } className="ui form">
            <div className="field">
                <label className="label">{props.label}</label>
                <div onClick={ () => {
                    setOpen(!open)
                } }
                     className={ `ui selection dropdown ${ open ? 'visible active' : '' }` }
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div className={ `menu ${ open ? 'visible transition' : '' }` }>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropDown;
