import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const EditingSpace = ({ ratio, showFilter }) => {
  return (
    <div
      className={`content bg-theme-3 ${
        showFilter ? "show-filter" : ""
      } d-flex justify-content-center align-items-center`}
    >
      <div className="bg-dark">
        <TransformWrapper
          minScale={0.6}
          maxScale={5}
          initialScale={1}
          centerOnInit={true}
          centerZoomedOut={true}
          limitToBounds={false}
          smooth={true}
        >
          <TransformComponent>
            <div className="ed-container">
              <div className={`ed-origin ${ratio}`}></div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default EditingSpace;
