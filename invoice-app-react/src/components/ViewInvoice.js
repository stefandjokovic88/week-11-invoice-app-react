import React from 'react';
import iconArrowLeft from "../assets/icon-arrow-left.svg";
import { useParams } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import EditInvoice from './EditInvoice';


export default function ViewInvoice(props) {
    const {id} = useParams(); //use key = invoice.id from invoice 
    const [data, setData] = useState(props.dataJson.filter(item => item.id === id));

    //delete modal
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

    function openDeleteModal() {
            setDeleteModalIsOpen(true);
        }

    //close delete modal
    function closeDeleteModal() {
        setDeleteModalIsOpen(false);
    }

    //mark as paid
    function markAsPaid() {
        data[0].status = "paid";
    }

    //edit invoice 
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    function openEditModal() {
        setEditModalIsOpen(true);
    }

    //close edit modal
    function closeEditInvoice() {
        setEditModalIsOpen(false);
    }

    return (
        <div className="view-invoice">
            {deleteModalIsOpen ? <DeleteModal cancelDelete={closeDeleteModal} invoiceId={data[0].id} deleteInvoice={() => props.deleteInvoice(id)}/> : null}
            {editModalIsOpen ? <EditInvoice closeEditInvoice={closeEditInvoice} data={data} /> : null}
            <Link to={`/`}> 
            <div className="icon-arrow-left">
                <img src={iconArrowLeft} alt="icon-arrow-left" className="icon-arrow-left-img"/>
                <p>Go back</p>
            </div> 
            </Link>
            <div className="view-invoice-content">
                <div className="view-invoice-header">
                    <div className="view-invoice-left">
                        <p className="view-invoice-status">Status</p>
                        <div className={`status ${data[0].status}`}><div className={`circle ${data[0].status}`}></div>{data[0].status.charAt(0).toUpperCase() + data[0].status.slice(1)}</div>
                    </div>
                    <div className="buttons mobile">
                        <button className="edit-button" onClick={openEditModal}>Edit</button>
                        <button className="delete-button" onClick={openDeleteModal}>Delete</button>
                        <Link to={`/`}><button className="mark-button" onClick={markAsPaid}>Mark as Paid</button> </Link>
                    </div>
                </div>
                <div className="view-invoice-data">
                    <div className="row-1">
                        <div className="row-1-left">
                            <p className="view-invoice-number"><span className="view-invoice-gray">#</span>{data[0].id}</p>
                            <p>{data[0].description}</p>
                        </div>
                        <div className="row-1-right view-invoice-small">
                            <p>{data[0].senderAddress.street}</p>
                            <p>{data[0].senderAddress.city}</p> 
                            <p>{data[0].senderAddress.postCode}</p>    
                            <p>{data[0].senderAddress.country}</p>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="row-2-left">
                            <div>
                                <p className="row-2-top">Invoice Date</p>
                                <p className="row-2-bold">{data[0].createdAt}</p>
                            </div>
                            <div>
                                <p className="row-2-top">Payment Due</p>
                                <p className="row-2-bold">{data[0].paymentDue}</p>
                            </div>
                        </div>
                        <div className="row-2-center">
                            <p className="row-2-top">Bill To</p>
                            <p className="name-margin row-2-bold">{data[0].clientName}</p>
                            <p className="view-invoice-small">{data[0].clientAddress.street}</p>
                            <p className="view-invoice-small">{data[0].clientAddress.city}</p>
                            <p className="view-invoice-small">{data[0].clientAddress.postCode}</p>
                            <p className="view-invoice-small">{data[0].clientAddress.country}</p>
                        </div>
                        <div className="row-2-right">
                            <p className="row-2-top">Sent to</p>
                            <p className="row-2-bold">{data[0].clientEmail}</p>
                        </div>
                    </div>
                    
                    {/* <div className="row-3">
                        <div className="row-3-top">
                            <div className="row-3-left">
                                <div className="row-3-col">
                                    <p className="view-invoice-small mobile">Item Name</p>
                                    {data[0].items.map((dataItem) => (
                                    <p className="row-3-black">{dataItem.name}</p>                                        
                                    ))}
                                </div>
                            </div>
                            <div className="row-3-right">
                                <div className="row-3-col align-center">
                                    <p className="view-invoice-small mobile">QTY.</p>
                                    {data[0].items.map((dataItem) => (
                                    <p className="bold">{dataItem.quantity}</p>
                                    ))}
                                </div>
                                <div className="row-3-col align-right">
                                    <p className="view-invoice-small mobile">Price</p>
                                    {data[0].items.map((dataItem) => (
                                    <p className="bold">£ {dataItem.price}</p>
                                    ))}
                                </div>
                                <div className="row-3-col align-right">
                                    <p className="view-invoice-small mobile">Total</p>
                                    {data[0].items.map((dataItem) => (
                                    <p className="row-3-black">£ {(dataItem.quantity * dataItem.price)}</p>
                                    ))}
                                </div>   
                            </div>
                        </div> */}

                    <div className="row-3-container">
                    <div className="row-3">
                        <div className="row-3-row">
                            <p className="view-invoice-small view-invoice-name mobile">Item Name</p>
                            <p className="view-invoice-small view-invoice-qty mobile align-center">QTY.</p>
                            <p className="view-invoice-small view-invoice-price mobile align-right">Price</p>
                            <p className="view-invoice-small view-invoice-total mobile align-right">Total</p>
                        </div>
                        {data[0].items.map((dataItem) => (
                        <div className="row-3-row">
                            <p className="row-3-black view-invoice-name">{dataItem.name}</p>
                            <p className="bold view-invoice-qty align-center">{dataItem.quantity}</p>
                            <span className="tablet">x</span>
                            <p className="bold view-invoice-price align-right">£ {dataItem.price}</p>
                            <p className="row-3-black view-invoice-total align-right">£ {(dataItem.quantity * dataItem.price)}</p>
                        </div>
                        ))}
                    </div>

                        <div className="row-3-bottom">
                            <p className="mobile">Amount Due</p>
                            <p className="desktop">Grand Total</p>
                            <p className="row-3-bottom-total">£ {data[0].total}</p>
                        </div>
                    </div>

                    <div className="buttons desktop buttons-for-mobile">
                        <button className="edit-button" onClick={openEditModal}>Edit</button>
                        <button className="delete-button" onClick={openDeleteModal}>Delete</button>
                        <Link to={`/`}><button className="mark-button" onClick={markAsPaid}>Mark as Paid</button> </Link>
                    </div>                    

                    </div>
                </div>
                
            </div>
        
        // </div>

    )
}
