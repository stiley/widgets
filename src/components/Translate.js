import React, { useState } from 'react';
import DropDown from './DropDown';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    }, {
        label: 'Hindi',
        value: 'hi'
    }

];

const Translate = (props) => {
    const [ language, setLanguage ] = useState(options[ 0 ])
    const [ text, setText ] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={ text } onChange={ (e) => {
                        setText(e.target.value);
                    } }/>
                </div>
            </div>
            <DropDown options={ options } selected={ language } onSelectedChanged={ setLanguage } label="Select a language"/>
        </div>
    );
}

export default Translate;