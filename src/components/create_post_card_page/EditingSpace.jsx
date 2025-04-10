import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./EditingSpace.scss";
import { useSelector } from "react-redux";
const EditingSpace = ({ ratio, transformRef }) => {
  const background = useSelector((state) => state.background);
  console.log(background);
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
                // src={`${background.image || "#"}`}
                className={`ed-box ${ratio}`}
                style={{
                  backgroundImage: `url(${background.image || ""})`,
                  backgroundSize: "cover",
                  backgroundColor: `${background.color || ""}`,
                  // objectFit: "cover",

                }}
              ></div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default EditingSpace;
