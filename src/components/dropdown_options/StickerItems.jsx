import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setStickers } from "../../redux/selectedItems/selected-items-actions";
import { Col, Row } from "react-bootstrap";
import loading from "../../assets/animations/loading.json";
import Lottie from "lottie-react";
const imageModules = import.meta.glob("../../assets/images/stickers/*.png", {
  eager: true,
});

const StickerItems = () => {

  const images = useMemo(() => {
    return Object.entries(imageModules).map(([path, mod]) => {
      const name = path.split("/").pop();
      return { name, src: mod.default };
    });
  }, []);
  const dispatch = useDispatch();

  const handleOnClick = (path) => {
    dispatch(setStickers(path));
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
      {images.length > 0 ? (
        images.map((img, index) => (
          <Col xs={6} className="p-1" key={index} onClick={() => handleOnClick(img.src)}>
            <img
              className="bg-box border border-white border-2"
              style={{
                width: "100%",
                cursor: "pointer",
              }}
              src={img.src}
            ></img>
          </Col>
        ))
      ) : (
        <Col>
          <Lottie animationData={loading} />
        </Col>
      )}
    </Row>
  );
};

export default StickerItems;
