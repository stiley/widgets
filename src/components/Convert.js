
import React, { useEffect , useState } from 'react';
import axios from 'axios'

const Convert = (props) => {
    const [ translated, setTranslated ] = useState('');
    const [debouncedText, setDebouncedText] = useState( props.text);

    useEffect(()=>{
        const timerID = setTimeout(() => {
            setDebouncedText(props.text);
        },500);
        // cleanup function
        return() => {
            clearTimeout(timerID);
        }
    },[props.text]);

    // request to google API
    useEffect(() => {
        const doTranslation = async () =>{
            const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: props.language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(response.data.data.translations[ 0 ].translatedText)
        };
        doTranslation();

    }, [ props.language, debouncedText ]);
return (
    <div>
        <h1 className="ui header">{translated}</h1>
    </div>
);
}

export default Convert;