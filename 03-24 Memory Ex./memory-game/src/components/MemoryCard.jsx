import React, { Component } from "react";
import './MemoryCard.css'

class MemoryCard extends Component {
    render() {

        const memoryCardInnerClass = "MemoryCardInner" 
        if(this.state.isFlipped = true) {
            memoryCardInnerClass.concat(" flipped");
        }

        return (
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img className="logo" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"></img>
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
    }

}

export default MemoryCard;