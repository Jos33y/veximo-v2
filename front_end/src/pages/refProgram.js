import React from "react";
import NavHeader from "../component/Header";
import '../styles/refProgram.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import link from '../assets/home/undraw_share_link_re_54rx.svg';
import connection from '../assets/home/undraw_connection_re_lcud.svg';
import recieveCoin from '../assets/home/undraw_bitcoin_re_urgq.svg';
import Table from 'react-bootstrap/Table';
import influencer from '../assets/home/undraw_influencer_re_1fkb.svg';
import Contact from "../component/contact";
import Accordion from 'react-bootstrap/Accordion';
import Footer from "../component/footer";
import {Link, NavLink} from "react-router-dom";


const RefProgram = () => {
  return (
      <>
          <NavHeader />
        <section className="ref-program">
          <h1 className="title">Referral program</h1>
            <div className=" ref-details d-flex">
                    <div>
                        <p>You earned enough this week</p>
                    </div>
                    <div>
                        <h3 className="commission-details">Receive <span>up to 75% </span>commission on all of your referrals.
                            The higher the trading volume, the higher the profit</h3>
                        <button className="btn btn-dark">Receive your referral link</button>
                    </div>
            </div>
            <div className="process">
                <h1>How does it work</h1>
                <Row>
                    <Col>
                        <img className="ref-img" src={link} alt="" />
                        <h5>
                            1. Receive your link
                        </h5>
                        <p className="process-details">
                            Generate your referral code
                        </p>
                    </Col>
                    <Col>
                        <img className="ref-img" src={connection} alt="" />
                        <h5>
                            2. Invite friends
                        </h5>
                        <p className="process-details">
                            Send the link to friends and receive a
                            percentage of every completed transaction that they make.
                        </p>
                    </Col>
                    <Col>
                        <img className="ref-img" src={recieveCoin} alt="" />
                        <h5>
                            3. Start earning

                        </h5>
                        <p className="process-details">
                            Receive
                            up to 75% commission on all your referalls. The greater the volume of trades,
                            the greater the profit.

                        </p>
                    </Col>
                </Row>
            </div>
            <div className="profit-table">
                <Container>
                    <h1 className="title">Profit distribution table</h1>
                    <div className="profit-table-link d-flex">
                        <Link to="" className="profit-links">Normal conditions</Link>
                        <Link to="" className="profit-links">Terms for partners</Link>
                    </div>
                    <Table>
                        <thead>
                        <tr>
                            <th className="profit-table-commission">Commission from all of your
                                referrals for the week</th>
                            <th>$0 - $1</th>
                            <th>$1 - $50</th>
                            <th>$50 - $250</th>
                            <th>$250 +</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Approximate trading volume</td>
                            <td>$1 - $400</td>
                            <td>$400 - $20k</td>
                            <td>$20k - $100k</td>
                            <td>$100k +</td>
                        </tr>
                        <tr>
                            <td>Interest earned</td>
                            <td>0%</td>
                            <td>25%</td>
                            <td>35%</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <td>Your weekly earnings</td>
                            <td>😔</td>
                            <td>$0.25 - $12.5</td>
                            <td>$17.5 - $87.5</td>
                            <td>$125 +</td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
            <div className="advice">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="d-flex">
                                <Link to="" className="advice-links">Example1</Link>
                                <Link to="" className="advice-links">Example2</Link>
                            </div>
                            <p>You have 10 referrals, each of which trades $40,000 per week.
                                The total sum of the trades of all of your referalls will be $400,000 per week.
                                They will pay $1000 commission, and you will receive 50% of this amount, i.e.
                                $500, This means, per month on 10 such referrals you will earn $2000</p>
                        </Col>
                        <Col lg={4}>
                            <p>Advice
                                Your task is to increase the trading volume of your referrals.
                                Therefore it's logical to spend time on training your referrals, teaching them
                                the principles of how the exchange works, etc.
                                You might have a lot of referalls, each trading in small volumes,
                                or it could be a small network of whales 😉 Choose your strategy.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="d-flex">
                    <div>
                        <img src={influencer} alt="" className="influencer"/>
                    </div>
                    <div>
                        <h3>Blogger ?</h3>
                        <p>If you have a blog, lots of subscribers or you would like to create an advertising campaign,
                            get in touch with us using this address - support@kuna.io</p>
                        <p>We have special terms for you.
                            P.S.Mum said that it is not a profession but we know that !</p>
                    </div>
            </div>
            <div>
                <Container>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
        </section>
          <Contact />
          <Footer />
      </>
  );
}
export default RefProgram;
