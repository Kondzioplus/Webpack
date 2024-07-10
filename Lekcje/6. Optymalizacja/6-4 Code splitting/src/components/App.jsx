import React from 'react';
import Timer from './Timer';
import * as styles from './App.scss';
import CSSModules from 'react-css-modules';
import { hot } from 'react-hot-loader/root';



class App extends React.Component{
    state = {
        counter: 0,
        date: new Date(),
        Timer: null,
    }

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1,
                date: new Date(),
            })
        }, 1000)
    }
    
    UNSAFE_() {
        clearInterval(this.id);
    }

    handleClick = () => {
        import('./Timer.jsx').then(module => {
            this.setState({
                Timer: module.default,
        })
    })
};
    render() {
        
        return (
            <div styleName="app">
            { !this.state.Timer ?
            <button onClick = {this.handleClick}>Show Timer</button> :
                <Timer h={this.state.date.getHours()} 
                       m={this.state.date.getMinutes()} 
                       s={this.state.date.getSeconds()} />
            }
            </div>
        )
    }
} 


export default hot(CSSModules(App, styles));