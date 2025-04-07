import { Link, useNavigate } from "react-router-dom";
import "./WelcomePage.scss";
import { Modal, Row, Col } from "react-bootstrap";
import { useCallback, useMemo, useState } from "react";

const WelcomePage = () => {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const ratioSelectCss = useMemo(() => {
    return {
      border: "3px solid #FF3A65",
    };
  },[]);

  const handleClose = useCallback(() => {
    setShow(false);
    setSelectedIndex(0);
  }, []);

  const handleCreate = useCallback(() => {
    localStorage.setItem("selectedRatio", JSON.stringify(selectedIndex === 0 ? "sixteenth-ninth" : "ninth-sixteenth"));
    navigate("/postcard/create");
  }, [navigate,selectedIndex]);

  return (
    <div className="WelcomePage">
      <div className="d-flex flex-column align-items-center justify-content-center bg-theme">
        <div className="ff-SM04_Moon-Bold text-white text-center">
          Welcome to&nbsp;
          <span className=" px-2 px-lg-4 pb-1 logo bg-white color-theme-2">
            EasyCard
          </span>
        </div>
        <button className="btn-ok mt-4" onClick={() => setShow(true)}>
          Create Card
        </button>
        <Modal show={show} dialogClassName="theme-scrollbar" centered={true} onHide={handleClose}>
          <Modal.Header className="bg-theme" closeButton>
            <h2 className="ff-SM04_Moon-Bold text-white p-0 m-0">Pick a ratio</h2>
          </Modal.Header>
          <Modal.Body className="bg-theme">
            <div className="d-flex justify-content-center flex-wrap gap-5 align-items-center  ">
              <div>
                <div
                  className="sixteenth-ninth"
                  style={selectedIndex === 0 ? ratioSelectCss : {}}
                  onClick={() => setSelectedIndex(0)}
                ></div>
                <div className="text-center text-white ff-SM04_Moon-Thin">
                  16:9
                </div>
              </div>
              <div>
                <div
                  className="ninth-sixteenth"
                  style={selectedIndex === 1 ? ratioSelectCss : {}}
                  onClick={() => setSelectedIndex(1)}
                ></div>
                <div className="text-center text-white ff-SM04_Moon-Thin">
                  9:16
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-theme">
            <button className=" btn-cancel" onClick={handleClose}>
              Close
            </button>
            <button className=" btn-ok" onClick={handleCreate}>
              Confirm
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default WelcomePage;
