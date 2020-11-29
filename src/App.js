import Accordion from './components/Accordion'
import Search from './components/Search';
import DropDown from './components/DropDown'
import Translate from './components/Translate';
import React, { useState, useEffect } from 'react';

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

    return (
        <div>
            <Translate />
        </div>
    );
}