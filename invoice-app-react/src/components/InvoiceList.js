import React from 'react'
import iconArrowRight from "../assets/icon-arrow-right.svg";
// import Data from "../data.json";
import { Link } from 'react-router-dom';

// const InvoiceList = ({invoices}) => {
const InvoiceList = (props) => {
    // let d = new Date(invoice.paymentDue);
    // let datestring = d.getDate()  + " " + d.toLocaleString('en-us',{month:'short'})+ " " + d.getFullYear();
    
    return (
            <div className="invoices">
            {props.dataJson.map((invoice) => (
            <Link to={`/${invoice.id}`} key={invoice.id}>
                <div className="invoice">
                    <p className="number"><span className="hashtag">#</span>{invoice.id}</p>
                    <p className="date">{invoice.paymentDue}</p>
                    <p className="name">{invoice.clientName}</p>
                    <p className="price">£ {invoice.total}</p>
                    <div className="status-div">
                    <div className={`status ${invoice.status}`}><div className={`circle ${invoice.status}`}></div>{invoice.status ? invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1) : "Pending"}</div>
                    </div>
                    <img src={iconArrowRight} alt="icon-arrow-right" className="icon-arrow-right"/>
                </div>
            </Link>
            ))}
            
            </div>
        
    )
}

export default InvoiceList;
