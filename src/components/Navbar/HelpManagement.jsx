import { use, useState } from "react";
import ToggleBtn from "./ToggleBtn";
import BoxCount from "./BoxCount";
import Card from "./Card";

const HelpManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const helps = use(fetchPromise);
  const [data, setData] = useState(helps);

  const filterData =
    toggleStatus === "All"
      ? data
      : data.filter((element) => element.status === toggleStatus);

  return (
    <>
      <BoxCount data={data} />

      {/* toggle button */}
      <ToggleBtn
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleBtn>

      {filterData.length === 0 ? (
        <p className="text-center text-2xl font-semibold text-red-400">
          No Data Available
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 my-6">
          {filterData.map((help) => (
            <Card
              key={help.ticketId}
              help={help}
              data={data}
              setData={setData}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default HelpManagement;
