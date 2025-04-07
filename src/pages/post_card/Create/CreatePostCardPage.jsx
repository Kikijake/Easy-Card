import "./CreatePostCard.scss";
import PostCardFilter from "../../../components/create_post_card_page/PostCardFilter";
import EditingSpace from "../../../components/create_post_card_page/EditingSpace";
import { useMemo } from "react";
const CreatePostCardPage = () => {
  const ratio = useMemo(
    () => JSON.parse(localStorage.getItem("selectedRatio")),
    []
  );

  return (
    <div className="CreatePostCard">
      <EditingSpace ratio={ratio} />
      <PostCardFilter />
    </div>
  );
};

export default CreatePostCardPage;
