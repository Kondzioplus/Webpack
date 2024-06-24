import React from 'react';
import * as styles from './Timer.css';
import CSSModules from 'react-css-modules';


const Timer = () => (
    <div styleName="border" className="myGlobal">
        <span>13</span>:
        <span>21</span>:
        <span>12</span>
    </div>
);

export default CSSModules(Timer, styles);