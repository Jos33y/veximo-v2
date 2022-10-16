import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import '../styles/services.css';
import  support from '../assets/home/undraw_connected_re_lmq2 (1).svg';
import secure from '../assets/home/undraw_security_on_re_e491 (2).svg';
import p2p from '../assets/home/undraw_bitcoin_p2p_re_1xqa (1).svg';

const Services = () => {
  return (
      <>
          <Container>
              <section className="services">
                  <h1>what veximo offers you</h1>
                  <Row className="row-section">
                      <Col lg={3}>
                          <img src={p2p} alt="" className="p2p"/>
                          <h4>Best Rates</h4>
                          <p>We offer a variety of payment methods, depending on your region.
                              You can buy bitcoin online with Bank Transfer and Mobile Money.
                              You can also buy crypto directly from a Yellow Card merchant near you.</p>
                      </Col>
                      <Col lg={3}>
                          <img src={p2p} alt="" className="p2p"/>
                          <h4>Payment Gateways P2P</h4>
                          <p>We offer a variety of payment methods, depending on your region. You can buy
                              bitcoin online with Bank Transfer and Mobile Money. You can also buy crypto
                              directly from a Yellow Card merchant near you.</p>
                      </Col>
                      <Col lg={3}>
                          <img src={secure} alt="" className="secure"/>
                          <h4>Secure</h4>
                          <p>PiggyVest uses the highest levels of Internet Security. To ensure that your information is completely
                              protected from fraud, we use 256 bits SSL security encryption. Additionally, our payment processors are PCI-
                              compliant ensuring security of your data.
                              All cards and bank data are encrypted to prevent unauthorised access.</p>
                      </Col>
                      <Col lg={3}>
                          <img src={support} alt="" className="support"/>
                          <h4>Live Support</h4>
                          <p>24/7 live support for customer interaction</p>
                      </Col>
                  </Row>
              </section>
          </Container>

      </>
  );
}
export default Services;
