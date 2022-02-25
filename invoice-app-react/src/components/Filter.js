import React from 'react'

export default function Filter(props) {

    return (
        <div className="filter-menu"> 
            <label class="filter-menu-container">
                <input type="checkbox" value="draft" onChange={(e) => props.filterInvoice(e)}/>
                <span class="checkmark"></span>
                <p>Draft</p>
            </label>
            <label class="filter-menu-container">
                <input type="checkbox" value="pending" onChange={(e) => props.filterInvoice(e)}/>
                <span class="checkmark"></span>
                <p>Pending</p>
            </label>
            <label class="filter-menu-container">
                <input type="checkbox" value="paid" onChange={(e) => props.filterInvoice(e)}/>
                <span class="checkmark"></span>
                <p>Paid</p>
            </label>
        </div>
    )
}
