import React, { Component } from "react";
import './MemoryCard.css'

class MemoryCard extends Component {
    render() {

        const memoryCardInnerClass = "MemoryCardInner" 
        if(!this.state.isFlipped) {
            memoryCardInnerClass.concat(" flipped");
        }

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

    constructor() {
        super();
        this.state = { isFlipped: false };
    }

    clickHandler() {
        this.setState({ isFlipped: !this.state.isFlipped });
        console.log("flipped");
    }

}

export default MemoryCard;