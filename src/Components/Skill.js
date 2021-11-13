import React, { Component } from 'react';

class Skill extends Component {

  
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
     
    

      var skills = this.props.data.skills.map((skills,index)=>{
        return (
          <div key={index} className="row">
            <div className="two columns">
              <h4>{skills.name}</h4>
            </div>
        </div>
        
        )
      })
    }

    return (
      <section id="skill">

  

      <div className="row skill">

         <div className="twelve columns header-col">
            <h1><span>Skills</span></h1>
         </div>


            <p>{skillmessage}
            </p>

            <div className="row skill">
         <div className="twelve columns main-col">
					  {skills}
					</div>
				</div> 
			</div>
   </section> 
    );
  }
}

export default Skill;
