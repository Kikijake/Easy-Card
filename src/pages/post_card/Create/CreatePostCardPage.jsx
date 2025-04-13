import "./CreatePostCard.scss";
import PostCardFilter from "../../../components/create_post_card_page/PostCardFilter";
import EditingSpace from "../../../components/create_post_card_page/EditingSpace";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  redoSelectedItems,
  undoSelectedItems,
} from "../../../redux/selectedItems/selected-items-actions";
import { toJpeg } from "html-to-image";

const CreatePostCardPage = () => {
  const dispatch = useDispatch();
  const ratio = useMemo(
    () => JSON.parse(localStorage.getItem("selectedRatio")),
    []
  );
  const [loading, setLoading] = useState(false);
  const transformRef = useRef(null);
  const imageRef = useRef();

  const handleDownloadImage = async () => {
    if (imageRef.current === null) return;
    setLoading(true);
    await toJpeg(imageRef.current, {
      cacheBust: true,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-postcard.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Image conversion error:", err);
      });
    setLoading(false);
  };

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
      <EditingSpace
        ratio={ratio}
        transformRef={transformRef}
        imageRef={imageRef}
      />
      <PostCardFilter
        handleResetImage={handleResetImage}
        handleDownloadImage={handleDownloadImage}
        downloadLoading={loading}
      />
    </div>
  );
};

export default CreatePostCardPage;
