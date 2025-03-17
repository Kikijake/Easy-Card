import { Route, Routes, Navigate } from "react-router-dom";
import { WelcomePage } from "./welcome";
import { CreatePostCard } from "./postcard";
import { RndTest } from "./test";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<>404 Page Not Found</>} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/postcard/create" element={<CreatePostCard />} />
        <Route path="/test/rnd" element={<RndTest />} />
      </Routes>
    </>
  );
};

export default Router;
