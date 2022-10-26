import React from "react";
import telegram from '../assets/home/telegram.svg';
import messenger from '../assets/home/messenger.svg';
import viper from '../assets/home/viper.svg';
import '../styles/contact.css'
const Contact = () => {
  return (
      <>
          <section className="contact">
              <h1>Have any questions?</h1>
              <p>We answer within 30 seconds! We are available for you via convenient messengers.
                  No answering machines or robots. Communicate only with living people. 😊 😊</p>
              <div className="contact-socials justify-content-center d-flex">
                 <div className="socials">
                     <img className="telegram" src={telegram} alt=""/>
                 </div>
                  <div className="socials">
                      <img className="messenger" src={messenger} alt=""/>
                  </div>
                  <div className="socials">
                      <img className="viper" src={viper} alt=""/>
                  </div>
              </div>
          </section>
      </>
  );
}
export default Contact;
