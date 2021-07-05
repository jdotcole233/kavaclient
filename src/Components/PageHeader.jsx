import React, { Fragment } from "react";
// import // ViewGridIcon as ViewGridIconSolid,
// // ViewListIcon,
// "@heroicons/react/solid";

const PageHeader = ({ title = "Offers" }) => {
  return (
    <Fragment>
      <div className="flex">
        <h1 className="flex-1 text-2xl font-bold text-gray-900">{title}</h1>
        <div className="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden"></div>
      </div>
    </Fragment>
  );
};

export default PageHeader;
