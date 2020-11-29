import Accordion from "./components/Accordion"
import React from 'react';
import Search from './components/Search';

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
                <Search/>
            </div>
    );
}