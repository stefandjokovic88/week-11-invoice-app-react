import React from 'react'
import iconArrowDown from "../assets/icon-arrow-down.svg";
// import useFetch from './UseFetch';
import InvoiceList from './InvoiceList';
// import Data from "../data.json";
import EmptyInvoiceList from './EmptyInvoiceList';
import NewInvoice from './NewInvoice';
import { useState } from 'react';
// import { useState } from 'react';
// import LeftBlock from './LeftBlock';
import Filter from './Filter';

export default function Main(props) {
    // const {data:invoices, isPending, error} = useFetch("http://localhost:8000/invoices");
    const invoicesLength = props.dataJson.length;

    //open new invoice modal
    const [newInvoice, setNewInvoice] =useState(false);
    
    function showNewInvoice() {
        setNewInvoice(true);
    }

    //close new invoice modal
    function closeNewInvoice() {
        setNewInvoice(false);
    }

    //open filter menu
    const [filter, setFilterStatus] = useState(false);

    function showFilterMenu() {
        setFilterStatus(true);
        if (filter) {
            setFilterStatus(false);
        }
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
        <div className="main">
            <div className="content">
                <header>
                    <div className="header-left">
                        <p className="invoices-caption">Invoices</p>
                        {invoicesLength ? <p><span className="mobile">There are</span> {invoicesLength} total <span className="mobile">invoices</span></p> : <p className="empty-text">No invoices</p>}              
                    </div>
                    <div className="header-right">
                        <div className="filter-container">
                            <div className="filter" onClick={showFilterMenu}>
                                <p>Filter <span className="mobile">by status</span></p>
                                {filter ? <div className="icon-arrow-up">
                                                <img src={iconArrowDown} alt="icon-arrow-up" />
                                          </div> 
                                          : <div className="icon-arrow-down">
                                                <img src={iconArrowDown} alt="icon-arrow-down" />
                                            </div>}
                            </div>
                            {filter ? <Filter filterInvoice={props.filterInvoices}/> : null}
                                    
                        </div>
                        <div className="new-invoice" onClick={showNewInvoice}>
                            <div className="plus">
                                +
                            </div>
                            <p>New <span className="mobile">Invoice</span></p>
                        </div>
                    </div>
                </header>
                <div>
                    {/* {error && <div>could not fetch the data for that resource</div>}
                    {invoices && <InvoiceList invoices={invoices} />}
                    {isPending && <div>Loading...</div>}    */}
                    {invoicesLength ? <InvoiceList dataJson={props.dataJson} /> : <EmptyInvoiceList/>}
                    {newInvoice ? <NewInvoice closeNewInvoice={closeNewInvoice} handleChange={props.handleChange} handleChangeSender={props.handleChangeSender} handleChangeClient={props.handleChangeClient} handleChangeItem={props.handleChangeItem} handleSubmit={props.handleSubmit} saveAsDraft={props.saveAsDraft}/> : null}
                </div>
            </div>
        </div>
    )
}
