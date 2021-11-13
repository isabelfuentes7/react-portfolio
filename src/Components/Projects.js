import React, { Component } from 'react';

class project extends Component {
  render() {

    if(this.props.data){
      var project = this.props.data.project.map(function(project){
        return  <li key={project.user}>
            <blockquote>
               <p>{project.text}</p>
               <cite>{project.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="project">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Project</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {project}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default project;
