import React, { Component } from "react";
import './MemoryCard.css';

class MemoryCard extends Component {
    
    render() {
        // this is where sean defined 'isFlipped'
        // const { isFlipped } = this.state;

        var memoryCardInnerClass = "MemoryCardInner" 
        if(this.props.isFlipped) {
            memoryCardInnerClass = memoryCardInnerClass.concat(" flipped");
        }

        // this is the ternary he used, I just used an if statement
        // const memoryCardInnerClass =
        // 'MemoryCardInner ' + (isFlipped === true && 'flipped');

        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img alt="logo" className="logo" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"></img>
                    </div>
                    <div className="MemoryCardFront">
                        {this.props.symbol}
                    </div>
                </div>
            </div>
        );
    }

    // constructor() {
    //     super();
        
    

}

export default MemoryCard;