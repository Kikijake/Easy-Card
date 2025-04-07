import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./EditingSpace.scss";
const EditingSpace = ({ ratio, transformRef }) => {
  return (
    <div className="content">
      <div className="bg-dark">
        <TransformWrapper
          minScale={0.6}
          maxScale={5}
          initialScale={0.9}
          centerOnInit={true}
          centerZoomedOut={true}
          limitToBounds={false}
          smooth={true}
          ref={transformRef}
        >
          <TransformComponent>
            <div className="ed-container">
              <div className={`ed-box ${ratio}`}></div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default EditingSpace;
