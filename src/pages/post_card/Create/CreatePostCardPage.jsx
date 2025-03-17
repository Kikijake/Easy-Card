import "./CreatePostCard.scss";
import CreatePostCardFilter from "../../../components/createPostCardPage/CreatePostCardFilter";
import EditingSpace from "../../../components/createPostCardPage/EditingSpace";
import { useMemo } from "react";
const CreatePostCardPage = () => {
  const ratio = useMemo(
    () => JSON.parse(localStorage.getItem("selectedRatio")),
    []
  );

  console.log(ratio);

  return (
    <div className="CreatePostCard">
      <div>
        <EditingSpace ratio={ratio}/>
        <CreatePostCardFilter />
      </div>
    </div>
  );
};

export default CreatePostCardPage;
