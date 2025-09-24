const Card = ({ help, data, setData }) => {
  const handleClick = () => {
    const currentData = data.find(
      (element) => element.ticketId == help.ticketId
    );

    if (currentData.status == "Pending") {
      currentData.status = "Submitted";
    } else if (currentData.status == "Submitted") {
      currentData.status = "Reviewed";
    }
    const restData = data.filter(
      (element) => element.ticketId != help.ticketId
    );
    setData([currentData, ...restData]);
  };
  return (
    <div onClick={handleClick}>
      <a
        href="#"
        className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
      >
        <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
          <div className="sm:order-last sm:shrink-0">
            <img
              alt=""
              src={help.userImg}
              className="size-16 rounded-full object-cover sm:size-[72px]"
            />
          </div>

          <div className="mt-4 sm:mt-0">
            <h3 className="text-lg font-medium text-pretty text-gray-900">
              {help.subject}
            </h3>

            <p className="mt-1 text-sm text-gray-700">By {help.requestedBy}</p>

            <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
              {help.description}
            </p>
          </div>
        </div>

        <dl className="mt-6 flex gap-4 lg:gap-6">
          <div className="px-4 py-2 space-y-1">
            <dt className="text-xl font-medium ">Priority</dt>

            <button
              className={`text-xl font-medium cursor-pointer px-2 py-1 rounded-md ${
                help.priority === "High"
                  ? "bg-red-200 text-red-700"
                  : help.priority === "Medium"
                  ? "bg-cyan-200 text-cyan-600"
                  : "bg-yellow-100 text-yellow-500"
              }`}
            >
              {help.priority}
            </button>
          </div>

          <div className="px-4 py-2 space-y-1">
            <dt className="text-xl font-medium ">Status</dt>

            <dd
              className={`text-xl ${
                help.status === "Submitted"
                  ? "bg-green-100 text-green-500"
                  : help.status === "Reviewed"
                  ? "bg-purple-200 text-pink-500"
                  : "bg-red-100 text-red-500"
              } cursor-pointer px-2 py-1 rounded-md`}
            >
              {help.status}
            </dd>
          </div>
        </dl>
      </a>
    </div>
  );
};

export default Card;
