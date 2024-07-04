import React from "react";

import "./header.css";

export default function Header() {
    return (
        <div>
            <div className="fixed-nav">
                <div className="head flex items-center justify-between h-20">
                    <span className=" text-gray-100 text-xl mx-8">Amit Pharma</span>
                    <span className="text-gray-100 text-xl mx-8">NEFT Form</span>

                </div>
            </div>
        </div>
    );
}
