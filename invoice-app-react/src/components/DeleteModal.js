import React from 'react'
import { Link } from 'react-router-dom'
// import ViewInvoice from './ViewInvoice';

export default function DeleteModal(props) {
    return (
        <div className="delete-modal">
                <div className="delete-modal-content">
                    <p className="delete-modal-content-caption">Confirm Deletion</p>
                    <p className="delete-modal-text">Are you sure you want to delete invoice #{props.invoiceId}? This action cannot be undone.</p>
                    <div className="buttons delete-modal-buttons">
                        <button className="edit-button" onClick={props.cancelDelete}>Cancel</button>
                        <Link to={`/`}><button className="delete-button" onClick={props.deleteInvoice}>Delete</button></Link>
                    </div>
                </div>                            
        </div>
    )
}
