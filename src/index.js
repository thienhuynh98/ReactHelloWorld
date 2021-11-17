import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello, World!",
            textColor: "black"
        }
    }
    changeColor = (color)=>{
        if(color === "red")
        {
            this.setState({
                textColor:"red"
            })
        }
        if(color === "blue")
        {
            this.setState({
                textColor:"blue"
            })
        }
    }
    render() {
        return(
            <div>
                <h1>First ReactJS Assignment</h1>
                <h2 style={{color:this.state.textColor}}>{this.state.message}</h2>
                <button onClick={()=>{this.changeColor("red")}} style={{backgroundColor:"red", color:"white", margin:5}}>Red</button>
                <button onClick={()=>{this.changeColor("blue")}} style={{backgroundColor:"blue", color:"white", margin:5}}>Blue</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
