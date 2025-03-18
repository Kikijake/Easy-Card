import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CreatePostCardFilter = ({show, setShow}) => {

  return (
    <div className={`filter-box bg-theme-4 ${!show ? "hide" : ""}`}>
      <button className={`toggle bg-theme-4`} onClick={() => setShow(!show)}>
        {!show ? (
          <FontAwesomeIcon icon={faAnglesLeft} />
        ) : (
          <FontAwesomeIcon icon={faAnglesRight} />
        )}
      </button>
      <div className="ff-Brownie fs-2 text-center">
        <Link to="/welcome">EasyCard</Link>
      </div>
    </div>
  );
};

export default CreatePostCardFilter;
