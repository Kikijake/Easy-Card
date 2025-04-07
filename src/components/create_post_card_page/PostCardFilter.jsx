import "./PostCardFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faFileArrowDown,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Col, Collapse, Row } from "react-bootstrap";
import { useState } from "react";

const PostCardFilter = ({ handleResetImage }) => {
  const [show, setShow] = useState(true);
  // const [collapse, setCollapse] = useState(false);

  return (
    <div className={`filter-box bg-theme ${!show ? "hide" : ""}`}>
      {/* Sidebar Btns */}
      <button
        className={`sidebar-btn toggle d-flex 
          justify-content-center align-items-center`}
        onClick={() => setShow(!show)}
      >
        {!show ? (
          <FontAwesomeIcon icon={faAnglesLeft} />
        ) : (
          <FontAwesomeIcon icon={faAnglesRight} />
        )}
      </button>
      <button
        className="sidebar-btn refresh-btn d-flex 
          justify-content-center align-items-center"
        onClick={handleResetImage}
      >
        <FontAwesomeIcon
          icon={faRotateRight}
        />
      </button>
      <button
        className="sidebar-btn download-btn d-flex 
          justify-content-center align-items-center"
        onClick={handleResetImage}
      >
        <FontAwesomeIcon
          icon={faFileArrowDown}
        />
      </button>
      {/* SideBar Btns End */}
      <div className="filter-container theme-scrollbar">
        <div className="filter-body">
          <div className="text-center">
            <Link to="/welcome" className="logo text-center">
              EasyCard
            </Link>
          </div>
        </div>
        <footer className="filter-footer text-white">
          Design By @Ye_Htet_San
        </footer>
      </div>
    </div>
  );
};

export default PostCardFilter;
