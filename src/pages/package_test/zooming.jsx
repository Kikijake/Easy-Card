import "./test.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const Zooming = () => {
  return (
    <TransformWrapper minScale={0.3}>
      <TransformComponent>
        <img
          src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyfGVufDB8fDB8fHww"
          alt=""
          width={"800px"}
        />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default Zooming;
