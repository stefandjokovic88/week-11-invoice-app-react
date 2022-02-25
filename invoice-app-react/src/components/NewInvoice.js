import React from 'react'
import iconDelete from "../assets/icon-delete.svg"
// import iconCalendar from "../assets/icon-calendar.svg";
import { useState } from 'react';

export default function NewInvoice(props) {

    //payment terms modal
    const [paymentTermsModal, setPaymentTermsModal] = useState(false);

    function showPaymentTerms() {
        setPaymentTermsModal(true);
        if (paymentTermsModal) {
            setPaymentTermsModal(false);
        }
    }

    //save and close new ivoice
    function saveAndClose(e) {
        props.handleSubmit(e);
        props.closeNewInvoice();
    }

    //form
    // const [inputs, setInputs] = useState({});

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(inputs);
        
    // }

    // function handleChange(e) {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    // }

    return (
        <div className="new-invoice-modal">
            <div className="new-invoice-content">
                <p className="new-invoice-caption">New Invoice</p>
                <div className="new-invoice-block" onChange={props.handleChangeSender}>
                    <p className="new-invoice-violet">Bill From</p>
                    <div className="new-invoice-block-block new-invoice-block-block-1">
                        <p>Street Address</p>
                        <input type="text" name="street" value={props.street} />
                    </div>
                    <div className="new-invoice-block-row">
                        <div className="new-invoice-block-block">
                            <p>City</p>
                            <input type="text" name="city" value={props.city} />
                        </div>
                        <div className="new-invoice-block-block">
                            <p>Post Code</p>
                            <input type="text" name="postCode" value={props.postCode} />
                        </div>
                        <div className="new-invoice-block-block">
                            <p>Country</p>
                            <input type="text" name="country" value={props.country} />
                        </div>
                    </div>
                </div>

                <div className="new-invoice-block">
                    <p className="new-invoice-violet">Bill To</p>
                    <div className="new-invoice-block-block new-invoice-block-block-1">
                        <p>Client's Name</p>
                        <input type="text" name="clientName" value={props.clientName} onChange={props.handleChange}/>
                    </div>
                    <div className="new-invoice-block-block new-invoice-block-block-1">
                        <p>Client's Email</p>
                        <input type="text" name="clientEmail" value={props.clientEmail} onChange={props.handleChange}/>
                    </div>
                    <div className="new-invoice-block-block new-invoice-block-block-1">
                        <p>Streeet Address</p>
                        <input type="text" name="street" value={props.clientAddress} onChange={props.handleChangeClient}/>
                    </div>
                    <div className="new-invoice-block-row">
                        <div className="new-invoice-block-block">
                            <p>City</p>
                            <input type="text" name="city" value={props.clientAddress} onChange={props.handleChangeClient}/>
                        </div>
                        <div className="new-invoice-block-block">
                            <p>Post Code</p>
                            <input type="text" name="postCode" value={props.clientAddress} onChange={props.handleChangeClient}/>
                        </div>
                        <div className="new-invoice-block-block">
                            <p>Country</p>
                            <input type="text" name="country" value={props.clientAddress} onChange={props.handleChangeClient}/>
                        </div>
                    </div>
                </div>

                <div className="new-invoice-block">
                    <div className="new-invoice-block-row">
                        <div className="new-invoice-block-block new-invoice-block-block-2">
                            <p>Invoice Date</p>
                            {/* <div className="invoice-date-input"> */}
                                <input type="date" className="invoice-date-input" name="createdAt" value={props.createdAt} onChange={props.handleChange}/>
                                {/* <img src={iconCalendar} alt="icon-calendar" className="icon-calendar"/> */}
                            {/* </div> */}
                        </div>
                        <div className="new-invoice-block-block new-invoice-block-block-2 payment-terms-container">
                            <p>Payment Terms</p>
                            <input type="text" className="payment-terms-input" value="Net 30 Days" onClick={showPaymentTerms}/>
                            {paymentTermsModal ?  
                            <div className="payment-terms-menu" name="paymentTerms" value={props.paymentTerms}>
                                <p>Net 1 Day</p>
                                <p>Net 7 Days</p>
                                <p>Net 14 Days</p>
                                <p>Net 30 Days</p>
                            </div>
                            : null}
                        </div>
                    </div>
                    <div className="new-invoice-block-block new-invoice-block-block-1">
                            <p>Project Description</p>
                            <input type="text" name="description" value={props.description} onChange={props.handleChange}/>
                    </div>
                </div>

                <div className="new-invoice-bottom">
                    <p className="new-invoice-item-list">Item List</p>
                    <div className="new-invoice-block-bottom-row">
                        <p className="new-invoice-block-bottom-item-name">Item Name</p>
                        <p className="new-invoice-block-bottom-qty">Qty.</p>
                        <p className="new-invoice-block-bottom-price">Price</p>
                        <p>Total</p>
                    </div>
                    <div className="new-invoice-block-bottom-row-2" onChange={props.handleChangeItem}>
                        <div className="new-invoice-bottom-left">
                            <input type="text" className="new-invoice-block-bottom-item-name" name="name" value={props.name} />
                            <input type="text" className="new-invoice-block-bottom-qty" name="quantity" value={props.quantity} />
                            <input type="text" className="new-invoice-block-bottom-price" name="price" value={props.price} />
                            <p className="new-invoice-bottom-total" name="total" value={props.total}>{(props.quantity * props.price)}</p>
                            <img src={iconDelete} alt="icon-delete" className="icon-delete"/>
                        </div>
                    </div>
                    <button className="edit-button">+ Add New Item</button>
                </div>
                <div className="new-invoice-buttons">
                    <div>
                        <button className="discard" onClick={props.closeNewInvoice}>Discard</button>
                    </div>
                    <div className="buttons">
                        <button className="save-as-draft" onClick={props.saveAsDraft}>Save as Draft</button>
                        <button className="save-and-send" onClick={saveAndClose} >Save &amp; Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
