import Accordion from "./components/Accordion"
import Search from './components/Search';
import React, { useState, useEffect } from 'react';
import DropDown from './components/DropDown'

const options = [
    {
        label:'The colour Red',
        value: 'red'
    },
    {
        label:'The colour Green',
        value: 'green'
    },
    {
        label:'A shade of Blue',
        value: 'blue'
    }

];

const items = [
    {
        title: 'What is react?',
        content: 'React is a front end js framework'
    },
    {
        title: 'Why use react?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use react?',
        content: 'You use react by creating componentsReact is a front end js framework'
    },
]

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropDown, setShowDropDown ] = useState(true);
    return (
            <div>
                <button onClick={()=>{
                    setShowDropDown(!showDropDown);
                }}></button>
                { showDropDown?
                    <DropDown
                        options={options}
                        selected={selected}
                        onSelectedChanged={setSelected}
                    /> : null
                }
            </div>
    );
}