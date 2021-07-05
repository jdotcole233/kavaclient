import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default PageWrapper;
