import "./CreatePostCard.scss";
import PostCardFilter from "../../../components/create_post_card_page/PostCardFilter";
import EditingSpace from "../../../components/create_post_card_page/EditingSpace";
import { useMemo, useState } from "react";
const CreatePostCardPage = () => {
  const ratio = useMemo(
    () => JSON.parse(localStorage.getItem("selectedRatio")),
    []
  );
  const [showFilter, setShowFilter] = useState(true);
// HACK Remove this when filter is ready
  console.log(ratio);

  return (
    <div className="CreatePostCard">
      <EditingSpace ratio={ratio} showFilter={showFilter} />
      <PostCardFilter show={showFilter} setShow={setShowFilter} />
    </div>
  );
};

export default CreatePostCardPage;
