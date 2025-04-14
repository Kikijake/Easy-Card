import "./PostCardFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesLeft,
  faAnglesRight,
  faArrowsRotate,
  faArrowTurnDown,
  faArrowTurnUp,
  faFileArrowDown,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Dropdown from "../common/Dropdown";
import BackgroundItems from "../dropdown_options/BackgroundItems";
import { useDispatch, useSelector } from "react-redux";
import {
  redoSelectedItems,
  undoSelectedItems,
} from "../../redux/selectedItems/selected-items-actions";
import { getIDandItems } from "../../utils";
import Lottie from "lottie-react";
import loading from "../../assets/animations/loading.json";
import StickerItems from "../dropdown_options/StickerItems";

const PostCardFilter = ({
  handleResetImage,
  handleDownloadImage,
  downloadLoading,
}) => {
  const selectedItems = useSelector((state) => state.selectedItems);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [disbleBtn, setDisableBtn] = useState({
    isRedo: true,
    isUndo: true,
  });
  const handleUndo = () => {
    dispatch(undoSelectedItems());
  };

  const handleRedo = () => {
    dispatch(redoSelectedItems());
  };

  useEffect(() => {
    const { activeID, selectedItems } = getIDandItems();
    let isDisable = { ...disbleBtn };
    if (activeID === selectedItems[0].historyID) {
      isDisable.isRedo = true;
    } else {
      isDisable.isRedo = false;
    }
    if (activeID === 0) {
      isDisable.isUndo = true;
    } else {
      isDisable.isUndo = false;
    }
    setDisableBtn(isDisable);
  }, [selectedItems]);

  return (
    <div className={`filter-box bg-theme ${!show ? "hide" : ""}`}>
      {/* Sidebar Btns */}
      <div className="side-btn-wrapper">
        <button className={`sidebar-btn toggle`} onClick={() => setShow(!show)}>
          <FontAwesomeIcon icon={!show ? faAnglesLeft : faAnglesRight} />
        </button>
        <Link to="/easy-card" className="sidebar-btn action-btn" title="Home">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <button
          className="sidebar-btn action-btn"
          onClick={handleDownloadImage}
          title="Download"
        >
          {!downloadLoading ? (
            <FontAwesomeIcon icon={faFileArrowDown} />
          ) : (
            <Lottie animationData={loading} className="loading-icon" />
          )}
        </button>
        <button
          className="sidebar-btn action-btn"
          onClick={handleResetImage}
          title="Resize"
        >
          <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
        <button
          className={`sidebar-btn action-btn ${
            disbleBtn.isUndo ? "disable" : ""
          }`}
          onClick={handleUndo}
          title="Undo"
          disabled={disbleBtn.isUndo}
        >
          <FontAwesomeIcon icon={faArrowTurnUp} className="fa-rotate-270" />
        </button>
        <button
          className={`sidebar-btn action-btn ${
            disbleBtn.isRedo ? "disable" : ""
          }`}
          onClick={handleRedo}
          title="Redo"
          disabled={disbleBtn.isRedo}
        >
          <FontAwesomeIcon icon={faArrowTurnDown} className="fa-rotate-270" />
        </button>
      </div>
      {/* SideBar Btns End */}
      <div className="filter-container theme-scrollbar">
        <div className="filter-body">
          <div className="text-center mb-3">
            <Link to="/easy-card" className="logo text-center">
              EasyCard
            </Link>
          </div>
          <Dropdown title="Backgrounds" items={<BackgroundItems />} />
          <Dropdown title="Stickers" items={<StickerItems />} />
          <Dropdown title="Decorations" items={<BackgroundItems />} />
          <Dropdown title="Filters" items={<BackgroundItems />} />
        </div>
        <footer className="filter-footer text-white py-1">
          Designed By @Ye_Htet_San
        </footer>
      </div>
    </div>
  );
};

export default PostCardFilter;
