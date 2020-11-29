import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search = () =>{
    const [term, setTerm] = useState('programming');
    const [debounceTerm,setDebounceTerm] = useState(term);
    const [results, setResults] = useState([]);

    // updates to debounce term
    useEffect(() =>{
        const timerID = setTimeout(() => {
            setDebounceTerm(term);
        },1000);
        // cleanup function
        return() =>{
            clearTimeout(timerID);
        }
    },[term]);

    useEffect(() =>{
        const search = async () =>{
            const { data } =  await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: debounceTerm
                }
            });
            setResults(data.query.search);
        };
        if(debounceTerm){
            search();
        }
    },[debounceTerm]);

    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    })
    return(
    <div>
           <div className="ui form">
               <div className="field">
                   <label>Enter Search Term</label>
                   <input
                       className="input"
                       value={term}
                       onChange={ (event) =>{
                            setTerm(event.target.value)
                       }}
                   />
               </div>
           </div>
            <div className="ui celled list">
               {renderedResults}
            </div>
       </div>
    )
}

export default Search;
