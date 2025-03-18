import { Route, Routes, Navigate } from "react-router-dom";
import { WelcomePage } from "./welcome";
import { CreatePostCard } from "./postcard";
import { RndTest, ZoomingTest } from "./test";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<>404 Page Not Found</>} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/postcard/create" element={<CreatePostCard />} />
        <Route path="/test/rnd" element={<RndTest />} />
        <Route path="/test/zooming" element={<ZoomingTest />} />
      </Routes>
    </>
  );
};

export default Router;
