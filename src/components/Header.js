
import React, { Component } from 'react';
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
    document.querySelector('.Name').innerHTML = "Name : "+this.state.headers[this.state.headers.length-1].name
    document.querySelector('.Email').innerHTML = "Email : "+this.state.headers[this.state.headers.length-1].email
    document.querySelector('.Phone').innerHTML = "Phone : "+this.state.headers[this.state.headers.length-1].phone
  
  
  }
  
  );


  document.querySelector('.header').style.display = "none"

  var edit = document.querySelector('.edit')

  edit.style.display = "block"

}

/* delTask(e) {
  e.preventDefault()

  var array = this.state.tasks
  var index = e.target.id -1

  array.splice(index, 1)

  this.setState({
    tasks: [...this.state.tasks]
  });

} */

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

export default Header
