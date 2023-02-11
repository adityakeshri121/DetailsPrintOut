import React from "react";
import "./ViewFinalDetails.css";

const ViewFinalDetails = (props) => {
    const dataRx = props.data[props.index];

    return (
        <div>
            <div
                className="flex-row show-details w-42 h-auto absolute -z-0"
                style={{ left: props.valueX - 60, top: props.valueY + 10 }}
            >
                <div>Name: {dataRx.name}</div>
                <div>Name: {dataRx.bank}</div>
                <div>Bank IFSC: {dataRx.accNo}</div>
                <div>Amount: {dataRx.ifscCode}</div>
                <div>Amount: {dataRx.branch}</div>
            </div>
        </div>
    );
};

export default ViewFinalDetails;
