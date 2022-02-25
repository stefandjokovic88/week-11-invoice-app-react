import React from 'react'
import iconDelete from "../assets/icon-delete.svg"
// import iconCalendar from "../assets/icon-calendar.svg";

export default function EditInvoice(props) {
    return (
        <div className="new-invoice-modal">
            <div className="new-invoice-content">
                <p className="new-invoice-caption">Edit <span className="hashtag">#</span>{props.data[0].id}</p>
                <div className="new-invoice-block">
                    <p className="new-invoice-violet">Bill From</p>
                    <div className="new-invoice-block-block new-invoice-block-block-1">
                        <p>Street Address</p>
                        <input type="text" placeholder={props.data[0].senderAddress.street}/>
                    </div>
                    <div className="new-invoice-block-row">
                        <div className="new-invoice-block-block">
                            <p>City</p>
                            <input type="text" placeholder={props.data[0].senderAddress.city}/>
                        </div>
                        <div className="new-invoice-block-block">
                            <p>Post Code</p>
                            <input type="text" placeholder={props.data[0].senderAddress.postCode}/>
                        </div>
                        <div className="new-invoice-block-block">
                            <p>Country</p>
                            <input type="text" placeholder={props.data[0].senderAddress.country}/>
                        </div>
                    </div>
                </div>

                <div className="new-invoice-block">
                    <p className="new-invoice-violet">Bill To</p>
                    <div className="new-invoice-block-block new-invoice-block-block-1">
                        <p>Client's Name</p>
                        <input type="text" placeholder={props.data[0].clientName}/>
                    </div>
                    <div className="new-invoice-block-block new-invoice-block-block-1">
                        <p>Client's Email</p>
                        <input type="text" placeholder={props.data[0].clientEmail}/>
                    </div>
                    <div className="new-invoice-block-block new-invoice-block-block-1">
                        <p>Streeet Address</p>
                        <input type="text" placeholder={props.data[0].clientAddress.street}/>
                    </div>
                    <div className="new-invoice-block-row">
                        <div className="new-invoice-block-block">
                            <p>City</p>
                            <input type="text" placeholder={props.data[0].clientAddress.city}/>
                        </div>
                        <div className="new-invoice-block-block">
                            <p>Post Code</p>
                            <input type="text" placeholder={props.data[0].clientAddress.postCode}/>
                        </div>
                        <div className="new-invoice-block-block">
                            <p>Country</p>
                            <input type="text" placeholder={props.data[0].clientAddress.country}/>
                        </div>
                    </div>
                </div>

                <div className="new-invoice-block">
                    <div className="new-invoice-block-row">
                        <div className="new-invoice-block-block new-invoice-block-block-2">
                            <p>Invoice Date</p>
                            {/* <div className="invoice-date-input"> */}
                                <input type="text" className="invoice-date-input" value={props.data[0].createdAt}/>
                                {/* <img src={iconCalendar} alt="icon-calendar" className="icon-calendar"/> */}
                            {/* </div> */}
                        </div>
                        <div className="new-invoice-block-block new-invoice-block-block-2">
                            <p>Payment Terms</p>
                            <input type="text" className="payment-terms-input" value={props.data[0].paymentTerms} />
                        </div>
                    </div>
                    <div className="new-invoice-block-block new-invoice-block-block-1">
                            <p>Project Description</p>
                            <input type="text" placeholder={props.data[0].description}/>
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
                    <div className="new-invoice-block-bottom-row-2">
                    {props.data[0].items.map((dataItem) => (
                        <div className="new-invoice-bottom-left">
                            <input type="text" className="new-invoice-block-bottom-item-name" placeholder={dataItem.name}/>
                            <input type="text" className="new-invoice-block-bottom-qty" placeholder={dataItem.quantity}/>
                            <input type="text" className="new-invoice-block-bottom-price" placeholder={dataItem.price.toFixed(2)}/>
                            <p className="new-invoice-bottom-total">{(dataItem.quantity * dataItem.price).toFixed(2)}</p>
                            <img src={iconDelete} alt="icon-delete" className="icon-delete"/>
                        </div>
                    ))}
                    </div>
                    <button className="edit-button">+ Add New Item</button>
                </div>
                <div className="new-invoice-buttons">
                    <div className="buttons">
                        <button className="cancel-edit" onClick={props.closeEditInvoice}>Cancel</button>
                        <button className="save-and-send">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
