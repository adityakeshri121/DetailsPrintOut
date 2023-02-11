import React, { useState } from "react";
import PartyTemplate from "../partyTemplate/PartyTemplate";
import "./StateListDisplay.css";

export default function StateListDisplay(props) {
    const biharArray = props.biharArray;
    const otherStateArray = props.otherStateArray;

    const [state, setState] = useState(otherStateArray);

    const handleBihar = () => {
        setState(biharArray);
    };

    const handleOther = () => {
        setState(otherStateArray);
    };

    return (
        <div className="mt-20">
            <div className="flex justify-start select-state">
                <button className="button button1" onClick={handleOther}>
                    Other State
                </button>
                <button className="button button1 ml-8" onClick={handleBihar}>
                    Bihar
                </button>
            </div>

            <div className="flex justify-center mt-6">
                <div className="form-div">
                    <PartyTemplate state={state} />
                </div>
            </div>
        </div>
    );
}
