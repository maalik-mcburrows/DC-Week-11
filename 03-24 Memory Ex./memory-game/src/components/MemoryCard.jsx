import React, { Component } from "react";
import App from "../App";
import './MemoryCard.css';

class MemoryCard extends Component {
    
    state = { isFlipped: false };
    
    clickHandler() {
        this.setState({ isFlipped: !this.state.isFlipped });
        console.log("flipped");
    };

    render() {
        // this is where sean defined 'isFlipped'
        // const { isFlipped } = this.state;

        var memoryCardInnerClass = "MemoryCardInner" 
        if(this.state.isFlipped) {
            memoryCardInnerClass = memoryCardInnerClass.concat(" flipped");
        }

        // this is the ternary he used, I just used an if statement
        // const memoryCardInnerClass =
        // 'MemoryCardInner ' + (isFlipped === true && 'flipped');

        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img alt="logo" className="logo" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"></img>
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
        );
    }

    // constructor() {
    //     super();
        
    

}

export default MemoryCard;