import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import image2 from "../../assets/auth/Frame 14412.png";
import image1 from "../../assets/auth/Group 7.png";
import image3 from "../../assets/auth/Group 10.png";
import image4 from "../../assets/auth/Frame 14413.png";
import image5 from "../../assets/auth/Frame 1vv413.png";
import image6 from "../../assets/auth/Group 8.png";
import image7 from "../../assets/auth/Frame 14vvv414.png";
import image8 from "../../assets/auth/Group 9.png";
import image9 from "../../assets/auth/Frame 1bbbb4415.png";
function Col_image() {
  return (
    <>
        <Col xs="6" style={{ width: "624px", height: "852px" }}>
            {/* <Image src={image} style={{ width: "624px", height: "852px" }} /> */}
            <Row>
              <Col>
                <Image src={image1}style={{ position: "relative", top: "5px" }} />{" "}
              </Col>
              <Col>
                <Image src={image2} style={{ position: "relative", top: "5px" }}/>{" "}
              </Col>
              <Col>
                <Image src={image3}style={{ position: "relative", top: "5px" }} />{" "}
              </Col>
            </Row>
              <Row>
                <Col sm={4}>
                  <Image src={image5} style={{ position: "relative", top: "23px" }}/>
                </Col>
                <Col sm={8}>
                  <Image src={image4} style={{ position: "relative", top: "21px" }}/>
                </Col>
              </Row>
              {/*  */}
            <Row>
              <Col>
                <Image src={image6}style={{ position: "relative", top: "46px" }} />{" "}
              </Col>
              <Col>
                <Image src={image7}style={{ position: "relative", top: "-139px" }} />{" "}
              </Col>
              <Col>
                <Image src={image9}style={{ position: "relative", top: "-139px" }} />{" "}
                <Image src={image8} style={{ position: "relative", top: "-127px" }}/>{" "}
              </Col>
            </Row>
          </Col>
    </>
  )
}

export default Col_image