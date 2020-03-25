import React, { Component } from "react";
import './MemoryCard.css'

class MemoryCard extends Component {
    render() {
        return (
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className="MemoryCardInner">
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
        this.setState(!this.state.isFlipped);
    }

}

export default MemoryCard;