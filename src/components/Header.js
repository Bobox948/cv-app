
import React, { useState, useEffect } from 'react';
// import Overview from "./Overview";

import logo from './images.jpeg'; // importing the image src


const Header = ()  => {

  
const [state, setState] = useState(
   {
    headers: [], // the array where the headers will be stored
    image: null, // the image state where the image upload will be

  });

 

  

const handleImageChange = event => { // image upload
  setState({
    ...state, image: URL.createObjectURL(event.target.files[0]), 
  });

  document.querySelector('.todel').style.display="none"



}

const addHeader = e => {
  e.preventDefault()

  
   var name = document.getElementById('name').value
   var email = document.getElementById('email').value

   var phone = document.getElementById('phone').value

  setState({
    ...state, headers: [...state.headers, {'name': name, 'email': email, 'phone':phone}] // appending to the header array the objects created
    

  },    
 
  
  );


  document.querySelector('.header').style.display = "none" // when we added the headers, we disable the fields and the "submit" btn

  var edit = document.querySelector('.edit') 

  edit.style.display = "block" // instead we toggle on the edit btn

}

useEffect(() => {
  if (state.headers.length > 0) { // without this condition this weren't working, we have to wait that the state is updated
    document.querySelector('.Name').innerHTML =
      '<b>Name : </b>' + state.headers[state.headers.length - 1].name; // we add to the html the values
    document.querySelector('.Email').innerHTML =
      '<b>Email : </b>' + state.headers[state.headers.length - 1].email;
    document.querySelector('.Phone').innerHTML =
      '<b>Phone : </b>' + state.headers[state.headers.length - 1].phone;
  }
}, [state.headers]);



const openHeader = e => { // when we click on " add informations " the fields and " submit " displays
  e.preventDefault()

  document.querySelector('.header').style.display = "block"

  document.querySelector('.add').outerHTML= ""
}

const edHeader = e => {
  e.preventDefault()


  document.querySelector('.header').style.display = "block" // when we want to edit the headers we disable the edit and display back the fields and the submit btn
  document.querySelector('.edit').style.display = "none"




}


  
   
    const { image } = state;
  

    return ( // rendering 

      <div>

                <h2>About me</h2>
      
                <button className="add" onClick={openHeader}>Add informations</button> {/* Opens header input fields on click */} 


        <div className="header">
        <form onSubmit={addHeader}>

        <input type="text" id="name" placeholder="name"></input>
        <input type="email" id="email" placeholder="email" required></input>
        <input type="tel" id="phone" placeholder="phone"></input>
        <input type="submit" className="submit" value="Submit"></input>
        </form>
        </div>
        <input type="submit" className="edit" value="Edit" onClick={edHeader}></input>


      <div className="head">
      <div className="head2">

      <div className="Name"><b>Name : </b></div>  {/* those fields will be populated with the input values */}
      <div className="Email"><b>Email : </b></div>
      <div className="Phone"><b>Phone : </b></div>
      </div>


      <div>
        <input type="file" accept="image/*" id="picture" onChange={handleImageChange} />  {/* image upload */}
        {image && <img src={image} alt="Profile Picture" width="150" height="200" />}
        <img className="todel" src={logo} width="150" height="200"></img>

      </div>  
    
      </div>

     
      </div>
    );

    

  
}

export default Header


// bellow there is the code with class components, not function components

/* import React, { Component } from 'react';
// import Overview from "./Overview";

import logo from './images.jpeg';


class Header extends Component {
  constructor() {
    super();
  

  this.state = {
    headers: [],
    image: null,

  };

  this.addHeader = this.addHeader.bind(this);
  this.edHeader = this.edHeader.bind(this);
  this.openHeader = this.openHeader.bind(this);
  this.handleImageChange = this.handleImageChange.bind(this);


  
}

handleImageChange(event) {
  this.setState({
    image: URL.createObjectURL(event.target.files[0]),
  });

  document.querySelector('.todel').style.display="none"



}

addHeader(e) {
  e.preventDefault()

  
   var name = document.getElementById('name').value
   var email = document.getElementById('email').value

   var phone = document.getElementById('phone').value

  this.setState({
    headers: [...this.state.headers, {'name': name, 'email': email, 'phone':phone}]
    

  },    
  () => {
    document.querySelector('.Name').innerHTML = "<b>Name : </b>"+this.state.headers[this.state.headers.length-1].name
    document.querySelector('.Email').innerHTML = "<b>Email : </b>"+this.state.headers[this.state.headers.length-1].email
    document.querySelector('.Phone').innerHTML = "<b>Phone : </b>"+this.state.headers[this.state.headers.length-1].phone
  
  
  }
  
  );


  document.querySelector('.header').style.display = "none"

  var edit = document.querySelector('.edit')

  edit.style.display = "block"

}



openHeader(e) {
  e.preventDefault()

  document.querySelector('.header').style.display = "block"

  document.querySelector('.add').outerHTML= ""
}

edHeader(e) {
  e.preventDefault()


  document.querySelector('.header').style.display = "block"
  document.querySelector('.edit').style.display = "none"




}


  render() {

   
    const { image } = this.state;
  

    return (

      <div>

                <h2>About me</h2>
      
                <button className="add" onClick={this.openHeader}>Add informations</button>

        <div className="header">
        <form onSubmit={this.addHeader}>

        <input type="text" id="name" placeholder="name"></input>
        <input type="email" id="email" placeholder="email" required></input>
        <input type="tel" id="phone" placeholder="phone"></input>
        <input type="submit" className="submit" value="Submit"></input>
        </form>
        </div>
        <input type="submit" className="edit" value="Edit" onClick={this.edHeader}></input>


      <div className="head">
      <div className="head2">

      <div className="Name"><b>Name : </b></div>
      <div className="Email"><b>Email : </b></div>
      <div className="Phone"><b>Phone : </b></div>
      </div>


      <div>
        <input type="file" accept="image/*" id="picture" onChange={this.handleImageChange} />
        {image && <img src={image} alt="Profile Picture" width="150" height="200" />}
        <img className="todel" src={logo} width="150" height="200"></img>

      </div>  
    
      </div>

     
      </div>
    );

    

  }
}

export default Header */


/*
delTask(e) {
  e.preventDefault()

  var array = this.state.tasks
  var index = e.target.id -1

  array.splice(index, 1)

  this.setState({
    tasks: [...this.state.tasks]
  });

} 
*/