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

const PostCardFilter = () => {
  const [show, setShow] = useState(true);
  // const [collapse, setCollapse] = useState(false);

  return (
    <div className={`filter-box bg-theme ${!show ? "hide" : ""}`}>
      {/* Sidebar Btns */}
      <button
        className={`sidebar-btn toggle bg-theme d-flex 
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
        className="sidebar-btn download-btn bg-white d-flex 
          justify-content-center align-items-center"
      >
        <FontAwesomeIcon
          icon={faFileArrowDown}
          className="fs-3 color-theme-2"
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
        <footer
          className="filter-footer text-white"
        >
          Design By @Ye_Htet_San
        </footer>
      </div>
    </div>
  );
};

export default PostCardFilter;
