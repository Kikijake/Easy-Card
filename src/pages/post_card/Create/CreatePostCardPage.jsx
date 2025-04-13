import "./CreatePostCard.scss";
import PostCardFilter from "../../../components/create_post_card_page/PostCardFilter";
import EditingSpace from "../../../components/create_post_card_page/EditingSpace";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  redoSelectedItems,
  undoSelectedItems,
} from "../../../redux/selectedItems/selected-items-actions";
const CreatePostCardPage = () => {
  const dispatch = useDispatch();
  const ratio = useMemo(
    () => JSON.parse(localStorage.getItem("selectedRatio")),
    []
  );
  const transformRef = useRef(null);
  const handleResetImage = () => {
    transformRef.current.centerView(ratio === "three-two" ? 0.9 : 0.5);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Ctrl/Cmd + Z
      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        e.preventDefault();
        dispatch(undoSelectedItems());
        console.log("Undo action triggered!");
      }

      // Check for Ctrl/Cmd + Y or Ctrl/Cmd + Shift + Z
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "y" || ((e.key === "z" || e.key === "Z") && e.shiftKey))
      ) {
        e.preventDefault();
        dispatch(redoSelectedItems());
        console.log("Redo action triggered!");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  return (
    <div className="CreatePostCard">
      <EditingSpace ratio={ratio} transformRef={transformRef} />
      <PostCardFilter handleResetImage={handleResetImage} />
    </div>
  );
};

export default CreatePostCardPage;
