const EditingSpace = ({ ratio }) => {
  return (
    <div className="content bg-theme-3 d-flex justify-content-center align-items-center">
      <div className={`ed-origin ${ratio}`}></div>
    </div>
  );
};

export default EditingSpace;
