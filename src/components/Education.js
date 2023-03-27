
import React, { Component } from 'react';
// import Overview from "./Overview";

class Education extends Component {
  constructor() {
    super();
  

  this.state = {
    education: [],
    count: 0
  };

  this.addEducation = this.addEducation.bind(this);
  this.edEducation = this.edEducation.bind(this);
  this.openEducation = this.openEducation.bind(this);
  this.subedEducation = this.subedEducation.bind(this);



  
}

addEducation(e) {
  e.preventDefault()



   var name = document.getElementById('name2').value

   console.log(name.length)
  
   var year = document.getElementById('year').value

   var place = document.getElementById('place').value

   
  if (name.length > 0 && year.length > 0 && place.length > 0)

  { this.setState({
    education: [...this.state.education, {'id':'a'+this.state.count, 'name': name, 'year': year, 'place': place}],
    count: this.state.count + 1
    

  },    

  
  );}

  else {
    alert("fields are mandatory")
  }



  document.getElementById('year').value = ""
  document.getElementById('name2').value = ""

  document.getElementById('place').value = ""

  document.querySelector('.ededucation').style.display = "block"
  document.querySelector('.education').style.display = "none"

  document.querySelector('.submit2').style.display = "block"
  document.querySelector('.add2').style.display = "block"


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

openEducation(e) {
  e.preventDefault()

  document.querySelector('.education').style.display = "block"

  document.querySelector('.add2').style.display = "none"

}





edEducation(e) {
  e.preventDefault()

  document.querySelector('.editeducation').style.display = "block"
  document.querySelector('.education').style.display = "none"
  document.querySelector('.add2').style.display = "block"
  document.querySelector('.ededucation').style.display = "none"



  for (let i=0; i<this.state.education.length; i++)
  {
  
  var value = document.querySelector(`#a${i}`).innerHTML

  document.querySelector(`#a${i}`).outerHTML= `<input type="text" class="finalinput" id="a${i}" value="${value}"><br>`
  
  
  
  }



  

  document.querySelector('.edsubmit').style.display ="block"


  }






subedEducation(e){
  e.preventDefault()


  for (let i=0; i<this.state.education.length; i++)
  {
  
  
    var value2 = document.querySelector(`#a${i}`).value

    let pattern1 = /^(\d{4})/
  
    let year1 = value2.match(pattern1);
  
    let year = year1[0]
  
    let pattern2 = /-\s(.*?)\s-/
  
    let name1 = value2.match(pattern2);
  
    let name = name1[0]
  
  
    let pattern3 = /-\s(.+)$/
  
    let place1 = value2.match(pattern3);
  
    let place = place1[0]




const state = [...this.state.education];
state[i].name = name;
state[i].year = year;
state[i].place = place;

this.setState(state);



  }




  for (let j=0; j<this.state.education.length; j++)
  {
  
  var value = document.querySelector(`#a${j}`).value

  document.querySelector(`#a${j}`).outerHTML= `<p class="finalinput2" id="a${j}">${value}</p>`
  
  
  
  }

  


  document.querySelector('.edsubmit').style.display ="none"

  document.querySelector('.ededucation').style.display ="block"


  }



  render() {

   
  
  

    return (

      <div>
                        <h2>Education</h2>

        <button className="add2" onClick={this.openEducation}>Add Education</button>
        <div className="education">
          <form onSubmit={this.addEducation}>
        <input type="text" id="year" placeholder="year" pattern="^\d{4}$" required></input>
        <input type="text" id="name2" placeholder="name"></input>
        <input type="text" id="place" placeholder="place"></input>
        <input type="submit" className="submit2" value="Add"></input>
        </form>
        </div>

      
        <div className='center'>

        {this.state.education.map(d => <p key={d.id} className="list2" id={d.id}>{d.year} - {d.name} - {d.place}</p>)}
        </div>

      
          

      <input type="submit" className="ededucation" value="Edit" onClick={this.edEducation}></input>

      <div className="editeducation">

     
      

        <input type="submit" className="edsubmit" value="Submit edit" onClick={this.subedEducation}></input>
        </div>

      </div>
    );

    

  }
}

export default Education
