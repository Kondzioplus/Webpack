import React from 'react';
import ReactDOM from 'react-dom';
import * as styles from './App.css';
import Timer from './Timer';



const App = () => (
    <div className={ styles.border }>
        <Timer />
    </div>
)

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)

