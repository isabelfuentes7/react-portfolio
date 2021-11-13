// import React, { Component } from 'react';

// class Contact extends Component {
//   render() {
   
//       const [formState, setFormState] = useState({
//          name: "",
//          email: "",
//          message: "",
//       });
   
//       const [errorMessage, setErrorMessage] = useState("");
   
//       const { name, email, message } = formState;
   
//       function handleChange(e) {
//          if (e.target.name === "email") {
//             const isValid = validateEmail(e.target.value);
//             if (!isValid) {
//                setErrorMessage("Your email is invalid.");
//             } else {
//                if (!e.target.value.length) {
//                   setErrorMessage(`${e.target.name} is required.`);
//                } else {
//                   setErrorMessage("");
//                }
//             }
//          }
   
//          if (!errorMessage) {
//             setFormState({ ...formState, [e.target.name]: e.target.value });
//          }
//       }
   
//       function handleBlank(e) {
//          if (e.target.name === "Name" || e.target.name === "Message") {
//             if (!e.target.value.length) {
//                setErrorMessage(`${e.target.name} is required.`);
//             } else {
//                setErrorMessage("");
//             }
//          }
   
//          if (!errorMessage) {
//             setFormState({ ...formState, [e.target.name]: e.target.value });
//          }
//       }
//     return (
//       <section id="contact">

//          <div className="row section-head">

//             <div className="twelve columns header-col">

//                <h1>Contact</h1>

//             </div>

//             <div className="twelve columns">

//                   <p className="lead">{message}</p>

//             </div>

//          </div>

//          <div className="row">
//             <div className="eight columns">

//             <form id="contact-form">
// 					<div>
// 						<label htmlFor="Name">Name:</label>
// 						<br></br>
// 						<input
// 							type="text"
// 							defaultValue={name}
// 							onBlur={handleBlank}
// 							name="Name"
// 						/>
// 					</div>
// 					<div>
// 						<label htmlFor="email">Email address:</label>
// 						<br></br>
// 						<input
// 							type="email"
// 							defaultValue={email}
// 							name="email"
// 							onBlur={handleChange}
// 						/>
// 					</div>
// 					<div>
// 						<label htmlFor="Message">Message:</label>
// 						<br></br>
// 						<textarea
// 							name="Message"
// 							defaultValue={message}
// 							onBlur={handleBlank}
// 							rows="5"
// 						/>
// 					</div>
// 					{errorMessage && (
// 						<div>
// 							<p className="error-text">{errorMessage}</p>
// 						</div>
// 					)}
// 					<button type="submit">Submit</button>
// 				</form>
//            <div id="message-warning"> Error boy</div>
// 				   <div id="message-success">
//                   <i className="fa fa-check"></i>Your message was sent, thank you!<br />
// 				   </div>
//            </div>


//             <aside className="four columns footer-widgets">
//                <div className="widget widget_contact">

// 					   <h4>Address and Phone</h4>
// 					   <p className="address">
// 						   {street} <br />
// 						   {city}, {state} {zip}<br />
// 						   <span>{phone}</span>
// 					   </p>
// 				   </div>

//                {/* <div className="widget widget_tweets">
//                   <h4 className="widget-title">Latest Tweets</h4>
//                   <ul id="twitter">
//                      <li>
//                         <span>
//                         This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
//                         Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
//                         <a href="#">http://t.co/CGIrdxIlI3</a>
//                         </span>
//                         <b><a href="#">0 Days Ago</a></b>
//                      </li>
//                      <li>
//                         <span>
//                         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
//                         eaque ipsa quae ab illo inventore veritatis et quasi
//                         <a href="#">http://t.co/CGIrdxIlI3</a>
//                         </span>
//                         <b><a href="#">0 Days Ago</a></b>
//                      </li>
//                   </ul>
// 		         </div> */}
//             </aside>
//       </div>
//    </section>
//     );
//   }
// }

// export default Contact;
import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
      <section id="contact">

              <div className="row section-head">
      
            <div className="twelve columns header-col">
      
                   <h1>Contact</h1>
      
              </div>
      
              <div className="twelve columns">
      
      
                   </div>
      
               </div>
      
               <div className="row">
                  <div className="eight columns">
				<form id="contact-form">
					<div>
						<label htmlFor="Name">Name:</label>
						<br></br>
						<input
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<br></br>
						<input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="Message">Message:</label>
						<br></br>
						<textarea
							name="Message"
							defaultValue={message}
							onBlur={handleBlank}
							rows="5"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button className="submit" type="submit">Submit</button>
				</form>
            </div>
			</div>
		</section>
	);
}

export default Contact;