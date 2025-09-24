const ToggleBtn = ({ toggleStatus, setToggleStatus }) => {
  return (
    <div className="text-right my-8">
      <button
        onClick={() => setToggleStatus("All")}
        className={`rounded-l-md toggle-btn ${
          toggleStatus === "All" ? "!bg-purple-500 !text-white" : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => setToggleStatus("Pending")}
        className={`rounded-l-md toggle-btn ${
          toggleStatus === "Pending" ? "!bg-purple-500 !text-white" : ""
        }`}
      >
        Pending
      </button>
      <button
        onClick={() => setToggleStatus("Submitted")}
        className={`rounded-l-md toggle-btn ${
          toggleStatus === "Submitted" ? "!bg-purple-500 !text-white" : ""
        }`}
      >
        Submitted
      </button>
      <button
        onClick={() => setToggleStatus("Reviewed")}
        className={`rounded-l-md toggle-btn ${
          toggleStatus === "Reviewed" ? "!bg-purple-500 !text-white" : ""
        }`}
      >
        Reviewed
      </button>
    </div>
  );
};

export default ToggleBtn;
