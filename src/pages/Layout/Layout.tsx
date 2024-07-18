import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import MenuBar from "./MenuBar";
import SideBar from "./SideBar";
import { Collapse } from "react-bootstrap";

const Layout = ({ children }: any) => {
  const [open, setOpen] = React.useState(true);

  return (
    <Container fluid>
      <Row className="nav">
        <MenuBar />
      </Row>

      <Row className="body">
        <Collapse in={open}>
          <Col sm={2} className="sidebar">
            <SideBar />
          </Col>
        </Collapse>
        <button
          className="d-block d-sm-none sidebar-collapse"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          X
        </button>

        <Col sm={10} className="content">
          <div className="content-inner">{children}</div>
        </Col>
      </Row>
    </Container>
  );
};
export default React.memo(Layout);
