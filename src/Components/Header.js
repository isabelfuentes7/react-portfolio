import React, { Component } from 'react';
import styles from '../assets/customCss.module.css'; 
var bg=require('../assets/p4.jpg')
class Header extends Component {
  render() {

    if(this.props.data){
    
      var name = this.props.data.name;
      var description= this.props.data.description;
      var resumeDownload=this.props.data.resumedownload
       this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }
   function onResumeClick() {
      window.open(resumeDownload);
    }
    return (
      <header id="home" className='background-image' style ={ { backgroundImage: "url("+bg+")" } }>
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className={styles.primaryColor}><a  href="#home" >Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Work</a></li>
            <li><a className="smoothscroll" href="#skill">Skills</a></li>
            <li><a className="smoothscroll" href="#portfolio">Project</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
               
          <li >
            <a  onClick={onResumeClick} > Resume</a>  
          </li>  
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            
         </div>
      </div>

  

   </header>
    );
  }
}

export default Header;
