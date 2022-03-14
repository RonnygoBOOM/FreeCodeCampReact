import React from 'react';

function Content() {
    return (
        <>
            <div className="bg-image">
                <img src="./logo512.png" alt="half-logo" className="half-logo"></img>
            </div>
            <div className="main-content">      
                <h1>Reasons I'm excited to learn react:</h1> 
                <ul className="unordered-list">

                    <li>
                        For my own personal <bold>Growth</bold>
                    </li>
                    <li>    
                        Creativity
                    </li>
                    <li>
                        Career
                    </li>
                </ul>
            </div>  
        </>
    );
}

export default Content;