import "./CreatePostCard.scss";
import FilterSection from "../../../components/CreatePostCardPage/FilterSection";
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
        <FilterSection />
      </div>
    </div>
  );
};

export default CreatePostCardPage;
