import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="">
                <Row className="d-flex align-items-center justify-content-center">
                    <MailchimpForm />
                    <Col className="text-center text-sm-around">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/tri-adi-2249621ab/">
                                <img src={navIcon1} alt="Linkedin" />
                            </a>
                            <a href="https://www.instagram.com/bangyadiii/">
                                <img src={navIcon3} alt="" />
                            </a>
                            <a href="https://github.com/bangyadiii">
                                <img src={navIcon3} alt="" />
                            </a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
