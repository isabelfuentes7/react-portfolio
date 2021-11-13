import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
     
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
     
    }

    return (
      <section id="about">
         
      <div className="row">
         <div className="twelve columns">
            <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
         </div>
         <div className="twelve columns main-col">
            <h2>About Me</h2>

            <h4>{bio}</h4>
        
         </div>
      </div>

   </section>
    );
  }
}

export default About;
