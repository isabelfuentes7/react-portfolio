import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
     
      var work = this.props.data.work.map(function(work,index){
        return <div className="row" key={index}>
          
            <h4>{work.title},{work.company}<span></span> <em className="date" style={{textAlign:'right',float:'right'}}>{work.years}</em></h4>
            <p>{work.description}</p>
        </div>
      })

      
    }

    return (
      <section id="resume">



      <div className="row work">

         <div className="twelve columns header-col">
            <h1>Work</h1>
         </div>
         </div>
         <div className="row work">
         <div className="twelve columns main-col">
          {work}
        </div>
    </div>

   </section> 
    );
  }
}

export default Resume;
