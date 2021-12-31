//a navbar using React
//using React in a js file
//import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
//jsx
const navbar = (
        <nav>
            <h1>Bogger</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

)
ReactDOM.render(navbar , document.getElementById('root'));
