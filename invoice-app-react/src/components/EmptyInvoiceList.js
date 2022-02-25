import React from 'react';
import illustrationEmpty from "../assets/illustration-empty.svg";

export default function EmptyInvoiceList() {
    return (
        <div className="illustration-empty">
            <img src={illustrationEmpty} alt="illustration-empty" className="illustration-empty-img"/>
            <p className="empty-caption">There is nothing here</p>
            <p className="empty-text">Create an invoice by clicking the</p>
            <p className="empty-text"><span className="empty-span">New <span className="mobile">Invoice</span></span> button and get started
            </p>
        </div>
    )
}
