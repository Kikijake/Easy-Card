import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./EditingSpace.scss";
import { useSelector } from "react-redux";
import { Rnd } from "react-rnd";
import { useState } from "react";
const EditingSpace = ({ ratio, transformRef, imageRef }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [testIndex, setTestIndex] = useState(null);
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
          disabled={isDisabled}
          onTransformed={() => {
            setTestIndex(null);
          }}
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
                  position: "relative",
                }}
                onClick={() => {
                  setIsDisabled(false);
                }}
              >
                {stickers.length > 0 &&
                  stickers.map((path, index) => (
                    <Rnd
                      key={index}
                      default={{
                        x: 0,
                        y: 0,
                        width: 200,
                        height: 200,
                      }}
                      lockAspectRatio={true}
                      bounds="parent"
                      onMouseDown={() => {
                        setTestIndex(index);
                        setIsDisabled(true);
                      }}
                      enableResizing={testIndex === index}
                      disableDragging={testIndex !== index}
                    >
                      <img
                        src={path}
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          position: "absolute",
                          border:
                            testIndex === index ? "3px solid #ff3a65" : "none",
                        }}
                      />
                    </Rnd>
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
