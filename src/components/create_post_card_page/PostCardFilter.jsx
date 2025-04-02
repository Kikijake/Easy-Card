import "./PostCardFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Col, Collapse, Row } from "react-bootstrap";
import { useState } from "react";

const PostCardFilter = ({ show, setShow }) => {
  // const [collapse, setCollapse] = useState(false);

  return (
    <div className={`filter-box bg-theme ${!show ? "hide" : ""}`}>
      <button
        className={`toggle bg-theme d-flex 
          justify-content-center align-items-center`}
        onClick={() => setShow(!show)}
      >
        {!show ? (
          <FontAwesomeIcon icon={faAnglesLeft} className="text-white fs-3" />
        ) : (
          <FontAwesomeIcon
            icon={faAnglesRight}
            className="text-white fs-3"
          />
        )}
      </button>
      <button
        className="download-btn bg-white d-flex 
          justify-content-center align-items-center"
      >
        <FontAwesomeIcon
          icon={faFileArrowDown}
          className="fs-3 color-theme-2"
        />
      </button>
      <div className="filter-container theme-scrollbar">
        <div className="filter-body">
          <div className="text-center">
            <Link to="/welcome" className="fs-2 logo text-center">
              EasyCard
            </Link>
          </div>
        </div>
        <footer
          className="filter-footer bg-theme-2 ff-SM04_Moon-Regular text-white
          d-flex justify-content-center align-items-center "
        >
          Design By @Ye_Htet_San
        </footer>
      </div>
    </div>
  );
};

export default PostCardFilter;
