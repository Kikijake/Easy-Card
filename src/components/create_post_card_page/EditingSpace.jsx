import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./EditingSpace.scss";
import { useSelector } from "react-redux";
const EditingSpace = ({ ratio, transformRef, imageRef }) => {
  const { background, stickers } = useSelector((state) => state.selectedItems);
  return (
    <div className="content">
      <div className="bg-dark">
        <TransformWrapper
          minScale={0.6}
          maxScale={5}
          initialScale={ratio === "three-two" ? 0.9 : 0.5}
          centerOnInit={true}
          centerZoomedOut={true}
          limitToBounds={false}
          smooth={true}
          ref={transformRef}
        >
          <TransformComponent>
            <div className="ed-container">
              <div
                ref={imageRef}
                className={`ed-box ${ratio} overflow-hidden`}
                style={{
                  backgroundImage: `url(${background.image || ""})`,
                  backgroundSize: "cover",
                  backgroundColor: `${background.color || ""}`,
                  backgroundPosition: "center",
                }}
              >
                {stickers.length > 0 &&
                  stickers.map((path, index) => (
                      <img
                        src={path}
                        key={index}
                        style={{ width: "5%", objectFit: "contain" }}
                      />
                  ))}
              </div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default EditingSpace;
