import React from "react";
import {Col, Row} from "react-bootstrap";
import image1 from '../assets/home/canvas-vex.png';
import '../styles/buyCrypto.css';

const BuyCrypto = () => {
  return (
   <>
       <div className="demo-class">
           <section className="">
               <Row>
                   <Col lg={4}>
                       <div className="left-se1">
                           <p>Access and exchange hundreds of crypto currencies all in one place.
                               Join 5 million+ people using PECA wallet.</p>
                           <button className="btn btn-dark">Get Veximo Now</button>
                       </div>
                   </Col>
                   <Col lg={4}>
                       <div className="middle-se1">
                           <h1>Buy cryptocurrency in 2 clicks on Dashboard</h1>
                           <p>Dashboard is a tool with which you can track indicators in real time and instantly buy,
                               sell and exchange cryptocurrencies. Its main goal is to make life easier for Kuna users.</p>
                           <div className="right-se1">
                               <ul>
                                   <li>Easy Exchanges</li>
                                   <li>Private & Secure</li>
                                   <li>Quick buy, sell, exchange</li>
                                   <li>Instant tracking</li>
                                   <li>Personal portfolio of cryptocurrencies</li>
                               </ul>
                           </div>
                       </div>
                   </Col>
                   <Col lg={4}>
                       <img src={image1} alt="" className="image1"/>
                   </Col>
               </Row>
           </section>
       </div>
   </>
  );
}
export default BuyCrypto;
