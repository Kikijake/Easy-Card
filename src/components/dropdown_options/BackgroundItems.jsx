import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSelectedItems } from "../../redux/selectedItems/selected-items-actions";

const BackgroundItems = () => {
  const dispatch = useDispatch();

  const COLORS = [
    { name: "bronze", code: "#D58936" },
    { name: "khaki", code: "#A89B8C" },
    { name: "robin-egg-blue", code: "#52DEE5" },
    { name: "plum", code: "#8F3985" },
  ];

  const IMAGES = [
    "https://plus.unsplash.com/premium_photo-1701534008693-0eee0632d47a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/31356866/pexels-photo-31356866/free-photo-of-majestic-view-of-snow-capped-mount-fuji.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.unsplash.com/photo-1742787584125-d94d44334047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/26734932/pexels-photo-26734932/free-photo-of-raindrops-on-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.unsplash.com/photo-1636955840493-f43a02bfa064?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleOnClick = (background) => {
    dispatch(setSelectedItems("background",background));
  };

  return (
    <Row>
      <style>
        {`
          .bg-box:hover {
            border: 3px solid #ff3a65 !important;
          }
        `}
      </style>
      {COLORS.map((color, index) => (
        <Col xs={6} className="p-1" key={index}>
          <div
            className="bg-box border border-white border-2"
            style={{
              aspectRatio: "3/2",
              backgroundColor: color.code,
              cursor: "pointer",
            }}
            onClick={() => handleOnClick({ color: color.code })}
          ></div>
        </Col>
      ))}
      {IMAGES.map((image, index) => (
        <Col xs={6} className="p-1" key={index}>
          <div
            className="bg-white bg-box"
            style={{
              aspectRatio: "3/2",
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              cursor: "pointer",
            }}
            onClick={() => handleOnClick({ image: image })}
          ></div>
        </Col>
      ))}
    </Row>
  );
};

export default BackgroundItems;
