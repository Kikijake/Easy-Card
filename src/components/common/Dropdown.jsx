import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Button,
  Collapse,
  Container,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "../../assets/scss/Dropdown.scss";

/**
 *
 * @param {{ title: string, items: node }} param0
 * @returns
 */
const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="dd-container mx-4 mb-3">
        <InputGroup className="dd-header">
          <FormControl value={title} className="dd-title" disabled />
          <Button className="dd-btn px-3" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon
              icon={faCaretDown}
              className={`icon ${isOpen ? "active" : ""}`}
            />
          </Button>
        </InputGroup>
        <Collapse in={isOpen}>
          <div className="dd-body mx-2 p-3">
            <div className="theme-scrollbar">
              <Container>
                {items}
                {/* <div className="row">
                  {[...Array(7)].map((__, index) => (
                    <div className="col-6 p-1" key={index}>
                      <div
                        className="bg-white"
                        style={{
                          aspectRatio: "3/2",
                        }}
                      ></div>
                    </div>
                  ))}
                </div> */}
              </Container>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Dropdown;
