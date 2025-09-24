const ToggleBtn = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];
  return (
    <div className="text-right my-8">
      {btns.map((btn, idx) => (
        <button
          key={idx}
          onClick={() => setToggleStatus(btn)}
          className={`${idx === 0 && "rounded-l-md"} 
          ${idx === btns.length - 1 && "rounded-r-md"} toggle-btn ${
            toggleStatus === btn ? "!bg-purple-500 !text-white" : ""
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ToggleBtn;
