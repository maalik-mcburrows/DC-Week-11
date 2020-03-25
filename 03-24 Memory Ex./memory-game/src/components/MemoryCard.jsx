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

    clickHandler() {
        alert("card clicked");
    }
}

export default MemoryCard;