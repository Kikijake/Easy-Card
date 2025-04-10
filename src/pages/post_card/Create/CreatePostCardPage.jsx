import "./CreatePostCard.scss";
import PostCardFilter from "../../../components/create_post_card_page/PostCardFilter";
import EditingSpace from "../../../components/create_post_card_page/EditingSpace";
import { useMemo, useRef } from "react";
const CreatePostCardPage = () => {
  const ratio = useMemo(
    () => JSON.parse(localStorage.getItem("selectedRatio")),
    []
  );
  const transformRef = useRef(null);
  const handleResetImage = () => {
    transformRef.current.centerView(ratio === "three-two" ? 0.9 : 0.5);
  };

  return (
    <div className="CreatePostCard">
      <EditingSpace ratio={ratio} transformRef={transformRef} />
      <PostCardFilter handleResetImage={handleResetImage} />
    </div>
  );
};

export default CreatePostCardPage;
