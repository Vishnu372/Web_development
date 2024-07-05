import React from 'react'
import './Contact.css'
import msg_icon from'../../assets/msg-icon.png'
import mail_icon from'../../assets/mail-icon.png'
import phone_icon from'../../assets/phone-icon.png'
import location_icon from'../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

        
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "928e18a6-5177-4b52-b771-1d99a869f5ab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=""/></h3>
            <p>Feel free to reach out through contact from or contact
                information below. Your feedback,questions, and suggestions are
                important to us as we strive to provide exceptional service to out
                university community.
            </p>
            <ul>
                <li><img src={mail_icon} alt=""/>Contact@vishnu2004it@gmail.com</li>
                <li><img src={phone_icon} alt=""/>+91 74134563680</li>
                <li><img src={location_icon} alt=""/>10/b,south street,arannur<br/> karur,TamilNadu,
                India</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder="Enter Yout name" required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=""></img></button>
          </form>
          <span>{result}</span>
          </div>
    </div>
  )
}

export default Contact