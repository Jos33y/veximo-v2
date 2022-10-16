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
import {Link} from "react-router-dom";


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
            <div className="advice d-flex">
                            <div className="advice-content">
                                <div className="advice-links d-flex">
                                    <Link to="" className="advice-links">Example1</Link>
                                    <Link to="" className="advice-links">Example2</Link>
                                </div>
                                <p className="advice-details">You have 10 referrals, each of which trades $40,000 per week.
                                    The total sum of the trades of all of your referalls will be $400,000 per week.
                                    They will pay $1000 commission, and you will receive 50% of this amount, i.e.
                                    $500, This means, <span>per month on 10 such referrals you will earn $2000</span></p>
                            </div>
                            <div className="advice-content2">
                                <h6>Advice</h6>
                                <p>
                                    Your task is to increase the trading volume of your referrals.
                                    Therefore it's logical to spend time on training your referrals, teaching them
                                    the principles of how the exchange works, etc.
                                   </p>
                                <p> You might have a lot of referalls, each trading in small volumes,
                                    or it could be a small network of whales 😉 Choose your strategy.</p>
                            </div>
            </div>
            <div className="blogger d-flex">
                    <div>
                        <img src={influencer} alt="" className="influencer"/>
                    </div>
                    <div>
                        <h3 className="title">Blogger ?</h3>
                        <p className="message">If you have a blog, lots of subscribers or you would like to create an advertising campaign,
                            get in touch with us using this address - support@kuna.io</p>
                        <p>We have special terms for you.</p>
                    </div>
            </div>
            <div className="QA">
                <Container>
                    <h1>You asked and we answered</h1>
                    <Accordion className="accordion" defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How is the commission calculated from my referalls ?</Accordion.Header>
                            <Accordion.Body className="accordion-body">
                                The trading volume is calculated for each pair, then all summarized.

                                Referral 1. One of your referrals has bought 1 BTC for a price of $4000, and then after 1 minute, sold it for a price of $4010. The value of the trades will be $8010. The total commission will be $20
                                Referral 2. Another of your referrals has traded on the pair ETH/USDT. And during the day he has bought and sold 10 ETH five times.

                                This means that, with an ETH price of $135, over the course of the day, the value of trades is $6750. The size of the commission paid is $16.87

                                This means that, for one day the volume of trades of all of your referrals will make up $14750. Throughout the week, with these trades, you will receive a total of $103,250 of trading value

                                The total amount of commission paid for the week is $258
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>When will the bonus be calculated</Accordion.Header>
                            <Accordion.Body className="accordion-body">
                                Referral bonuses are accrued every Tuesday at 00:00 (UTC). The bonuses will appear on the wallets of each asset.
                                All transactions appear in the replenishment history.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>If my referrals trading volume is less than $400 per week, will I still receive anything ?</Accordion.Header>
                            <Accordion.Body className="accordion-body">
                                Probably not. It depends on the size of the commission fee. If your referrals for the week have paid less than $1 in commission, then you will not receive anything.
                                A good reason to encourage your referrals to trade or to expand your referral network. 😉
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Can we be mutual referrals to each other ?</Accordion.Header>
                            <Accordion.Body className="accordion-body">
                                Unfortunately not ! A referral can only be an account that was registered after your own ?
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Can I create a new account, in order to be a referral for myself ?</Accordion.Header>
                            <Accordion.Body>
                                Yes, of course ! But there is little point in this.
                                It's far better to develop your referral network of friends and acquintances, who will be trading larger amounts.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Where can I see the bonuses from the referral program ?</Accordion.Header>
                            <Accordion.Body className="accordion-body">

                                On the page 'my bonuses' you will see the approximate asset value, which will be credited on Tuesday.
                                Additionally, all referral program transactions are available on the assets pages in the deposit history.
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
