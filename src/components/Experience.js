
import React, { Component } from 'react';
// import Overview from "./Overview";

class Experience extends Component {
  constructor() {
    super();
  

  this.state = {
    experience: [],
    count: 0
  };

  this.addExperience = this.addExperience.bind(this);
  this.edExperience = this.edExperience.bind(this);
  this.openExperience = this.openExperience.bind(this);
  this.subedExperience  = this.subedExperience.bind(this);



  
}

addExperience (e) {
  e.preventDefault()



   var name = document.getElementById('name3').value

   console.log(name.length)
  
   var year = document.getElementById('year2').value

   var place = document.getElementById('place2').value

   
  if (name.length > 0 && year.length > 0 && place.length > 0)

  { this.setState({
    experience: [...this.state.experience, {'id':'b'+this.state.count, 'year': year, 'name': name, 'place': place}],
    count: this.state.count + 1
    

  },    

  
  );}

  else {
    alert("fields are mandatory")
  }



  document.getElementById('year2').value = ""
  document.getElementById('name3').value = ""

  document.getElementById('place2').value = ""

  document.querySelector('.edexperience').style.display = "block"
  document.querySelector('.experience').style.display = "none"

  document.querySelector('.submit3').style.display = "block"
  document.querySelector('.add3').style.display = "block"

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

openExperience (e) {
  e.preventDefault()

  document.querySelector('.experience').style.display = "block"

  document.querySelector('.add3').style.display = "none"

}




edExperience (e) {
  e.preventDefault()

  document.querySelector('.editexperience').style.display = "block"
  document.querySelector('.experience').style.display = "none"
  document.querySelector('.add3').style.display = "block"
  document.querySelector('.edexperience').style.display = "none"



  for (let i=0; i<this.state.experience.length; i++)
  {
  
  var value = document.querySelector(`#b${i}`).innerHTML

  document.querySelector(`#b${i}`).outerHTML= `<input type="text" class="finalinput2" id="b${i}" value="${value}"><br>`
  
  
  
  }



  

  document.querySelector('.edsubmit2').style.display ="block"


  }




subedExperience (e){
  e.preventDefault()


  for (let i=0; i<this.state.experience.length; i++)
  {
  
  var value2 = document.querySelector(`#b${i}`).value

  let pattern1 = /^(\d{4})/

  let year1 = value2.match(pattern1);

  let year = year1[0]

  let pattern2 = /-\s(.*?)\s-/

  let name1 = value2.match(pattern2);

  let name = name1[0]


  let pattern3 = /-\s(.+)$/

  let place1 = value2.match(pattern3);

  let place = place1[0]




const state = [...this.state.experience];
state[i].name = name;
state[i].year = year;
state[i].place = place;

this.setState(state);



  }




  for (let j=0; j<this.state.experience.length; j++)
  {
  
  var value = document.querySelector(`#b${j}`).value

  document.querySelector(`#b${j}`).outerHTML= `<p class="finalinput3" id="b${j}">${value}</p>`
  
  
  
  }

  


  document.querySelector('.edsubmit2').style.display ="none"

  document.querySelector('.edexperience').style.display ="block"


  }



  render() {

   
  
  

    return (

      <div>
                        <h2>Experience</h2>

        <button className="add3" onClick={this.openExperience}>Add experience</button>
        <div className="experience">
        <form onSubmit={this.addExperience}>

        <input type="text" id="year2" placeholder="year" pattern="^\d{4}$" required></input>
        <input type="text" id="name3" placeholder="name"></input>

        <input type="text" id="place2" placeholder="place"></input>
        <input type="submit" className="submit3" value="Add"></input>
        </form>

        </div>

      
        <div className='center'>
        {this.state.experience.map(d => <p key={d.id} className="list2" id={d.id}>{d.year} - {d.name} - {d.place}</p>)}
        </div>

      
          

      <input type="submit" className="edexperience" value="Edit" onClick={this.edExperience}></input>

      <div className="editexperience">

     
      

        <input type="submit" className="edsubmit2" value="Submit edit" onClick={this.subedExperience}></input>
        </div>

      </div>
    );

    

  }
}

export default Experience
