import './App.css';
import LeftBlock from './components/LeftBlock';
import Main from './components/Main';
// import dataFile from './data.json';
// import useFetch from './components/UseFetch';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ViewInvoice from './components/ViewInvoice';
// import InvoiceList from './components/InvoiceList';
import { useState, useEffect } from 'react';
import './index.css';
import Data from "./data.json";
import iconMoon from "./assets/icon-moon.svg";
import iconSun from "./assets/icon-sun.svg";
// import { useParams } from 'react-router';
// const getData = () => {
//   fetch(dataFile)
//       .then(response => response.json())
//       .then(data => { 
//         document.querySelector(".name").innerHTML = data.clientName;
//       });
//     }

// window.onload = getData();




function App() {

  const [dataJson, setDataJson] = useState(Data.invoices);
  

  //dark mode
  const [mode, setDarkMode] = useState(false);
  const [modeImg, setModeImg] = useState(iconMoon);
  
  function darkMode() {
    setDarkMode(true);
    setModeImg(iconSun);
    if (mode) {
      setDarkMode(false);
      setModeImg(iconMoon);
    }
  }  

  //delete invoice
  function deleteInvoice(id) {
    setDataJson(dataJson.filter(item => item.id !== id))
  }

  //filter invoices
  // const categories = ["paid", "pending", "draft"];
  // const [category, setCategory] = useState("");
  const [newDataJson, setNewDataJson] = useState(dataJson); 
  function filterInvoices(e) {
    let isChecked = e.target.checked;
    let checkedValue = e.target.value;
    // console.log(isChecked)
    // console.log(checkedValue)
    if (isChecked) {
        setDataJson(newDataJson.filter(item => item.status === checkedValue))
      } 
      else setDataJson(newDataJson);
    
    // if (isChecked === false) {
    //   setDataJson(newDataJson.filter(item => item.status !== checkedValue))
    // }
      
      // if ((isChecked && checkedValue === "pending") && (isChecked && checkedValue === "paid") && (isChecked && checkedValue === "pending")) {
      //   setDataJson(newDataJson);
      // } 
     
      // if (isChecked && checkedValue === "paid") {
      //   setDataJson(dataJson.filter(item => item.status === "paid"))
      // } 
      // else setDataJson(newDataJson);
      
    // }

    // else alert("lala");
    
}



//generate random id
function generateString(length) {

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = Math.random().toString(9).substring(2,6).toUpperCase();
  
    let randomId = "";
    let result = "";
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        
    }
    randomId = result + numbers;
    return randomId;
}
// randomId = numbers+generateString(4)
// console.log(generateString(4))

// var letters = generateString(4)
// var randomId = numbers + letters;

//form
const [inputs, setInputs] = useState({});
// const [senderAddress] = useState({});
// const [clientAddress] = useState({});

function handleChangeSender(e) {
  const name = e.target.name;
  const value = e.target.value;
  setInputs(values => ({...values, senderAddress: {...values.senderAddress,[name]: value}}))
}

function handleChangeClient(e) {
  const name = e.target.name;
  const value = e.target.value;
  setInputs(values => ({...values, clientAddress: {...values.clientAddress,[name]: value}}))
}

function handleChangeItem(e) {
  const name = e.target.name;
  const value = e.target.value;
  // const copy = inputs.items ? [...inputs.items] : []
  // setInputs(values => ({...values, items: [...copy, {...values.items,[name]: value}]}))  
  setInputs(values => ({...values, items: [{...values.items,[name]: value}]}))
}

function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  setInputs(values => ({...values, [name]: value}));
}

function handleSubmit(e) {
    e.preventDefault();
    setDataJson([...dataJson, inputs]);
    console.log(dataJson);
    // var qty = inputs.quantity;
    // console.log(qty);
    // var price = parseFloat(inputs.price);
    // console.log(price);
    // var total = qty * price;
    // inputs.total = total;
    inputs.status = "pending";
    inputs.id = generateString(2);  
}

// useEffect(() => {
//   console.log(dataJson);
// }, [dataJson]);

//save as draft 
  function saveAsDraft(e) {
    e.preventDefault();
    setDataJson([...dataJson, inputs]);
    console.log(dataJson);
    var qty = parseFloat(inputs.quantity);
    var price = parseFloat(inputs.price);
    var total = qty * price;
    inputs.total = total;
    inputs.status = "draft";
    inputs.id = generateString(2);
  }

  return (
  <Router>
    <div className={mode ? "dark" : "container"}>
      <LeftBlock darkMode={darkMode} modeImg={modeImg}/>
      <Switch>
        <Route exact path="/">
          <Main dataJson={dataJson} filterInvoices={filterInvoices} handleChange={handleChange} handleChangeSender={handleChangeSender} handleChangeClient={handleChangeClient} handleChangeItem={handleChangeItem} handleSubmit={handleSubmit} saveAsDraft={saveAsDraft}/>
        </Route> 
        <Route path="/:id">
          <ViewInvoice dataJson={dataJson} deleteInvoice={deleteInvoice}/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
