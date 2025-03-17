import { Link, useNavigate } from "react-router-dom";
import "./welcomePage.scss";
import { Modal, Row, Col } from "react-bootstrap";
import { useCallback, useMemo, useState } from "react";

const WelcomePage = () => {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();
  const ratioSelectCss = useMemo(() => {
    return {
      border: "3px solid gray",
    };
  },[]);

  const handleClose = useCallback(() => {
    setShow(false);
    setSelectedIndex(null);
  }, []);

  const handleCreate = useCallback(() => {
    localStorage.setItem("selectedRatio", JSON.stringify(selectedIndex === 0 ? "sixteenth-ninth" : "ninth-sixteenth"));
    navigate("/postcard/create");
  }, [navigate,selectedIndex]);

  return (
    <div className="WelcomePage">
      <div className="d-flex flex-column align-items-center justify-content-center bg-theme">
        <div className="ff-Brownie">
          Welcome to&nbsp;
          <span className=" px-4 rounded-5 bg-white">EasyCard</span>
        </div>
        <button
          className="btn-ok fs-3 mt-4 ff-Brownie"
          onClick={() => setShow(true)}
        >
          Create Card
        </button>
        <Modal show={show} centered={true} onHide={handleClose}>
          <Modal.Body className="bg-theme">
            <div className="d-flex justify-content-center gap-5 align-items-center  ">
              <div>
                <div
                  className="sixteenth-ninth"
                  style={selectedIndex === 0 ? ratioSelectCss : {}}
                  onClick={() => setSelectedIndex(0)}
                ></div>
                <div className="text-center text-white">16:9</div>
              </div>
              <div>
                <div
                  className="ninth-sixteenth"
                  style={selectedIndex === 1 ? ratioSelectCss : {}}
                  onClick={() => setSelectedIndex(1)}
                ></div>
                <div className="text-center text-white">9:16</div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-theme">
            <button className=" btn-cancel" onClick={handleClose}>
              Close
            </button>
            <button className=" btn-ok" onClick={handleCreate}>Confirm</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default WelcomePage;
