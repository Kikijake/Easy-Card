import "./PostCardFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faExpand,
  faFileArrowDown,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Col, Collapse, Row } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBackground } from "../../redux";
import Dropdown from "../common/Dropdown";
import BackgroundItems from "../dropdown_options/BackgroundItems";

const PostCardFilter = ({ handleResetImage }) => {
  const [show, setShow] = useState(true);
  // const dispatch = useDispatch();
  // const handleOnClick = () => {
  //   dispatch(setBackground(<h1>hello</h1>));
  // };

  return (
    <div className={`filter-box bg-theme ${!show ? "hide" : ""}`}>
      {/* Sidebar Btns */}
      <button
        className={`sidebar-btn toggle d-flex 
          justify-content-center align-items-center`}
        onClick={() => setShow(!show)}
      >
        <FontAwesomeIcon icon={!show ? faAnglesLeft : faAnglesRight} />
      </button>
      <button
        className="sidebar-btn download-btn d-flex 
          justify-content-center align-items-center"
        onClick={handleResetImage}
      >
        <FontAwesomeIcon icon={faFileArrowDown} />
      </button>
      <button
        className="sidebar-btn refresh-btn d-flex 
          justify-content-center align-items-center"
        onClick={handleResetImage}
      >
        <FontAwesomeIcon icon={faExpand} />
      </button>
      {/* SideBar Btns End */}
      <div className="filter-container theme-scrollbar">
        <div className="filter-body">
          <div className="text-center mb-3">
            <Link to="/welcome" className="logo text-center">
              EasyCard
            </Link>
          </div>
          <Dropdown title="Backgrounds" items={<BackgroundItems />} />
          <Dropdown title="Decorations" items={<BackgroundItems />} />
          <Dropdown title="Stickers" items={<BackgroundItems />} />
          <Dropdown title="Filters" items={<BackgroundItems />}/>
        </div>
        <footer className="filter-footer text-white py-1">
          Design By @Ye_Htet_San
        </footer>
      </div>
    </div>
  );
};

export default PostCardFilter;
