import "./CreatePostCard.scss";
import CreatePostCardFilter from "../../../components/createPostCardPage/CreatePostCardFilter";
import EditingSpace from "../../../components/createPostCardPage/EditingSpace";
import { useMemo, useState } from "react";
import { Col, Row } from "react-bootstrap";
const CreatePostCardPage = () => {
  const ratio = useMemo(
    () => JSON.parse(localStorage.getItem("selectedRatio")),
    []
  );
  const [showFilter, setShowFilter] = useState(true);

  console.log(ratio);

  return (
    <div className="CreatePostCard">
      <EditingSpace ratio={ratio} showFilter={showFilter} />
      <CreatePostCardFilter show={showFilter} setShow={setShowFilter} />
    </div>
  );
};

export default CreatePostCardPage;
