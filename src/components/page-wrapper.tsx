import React, { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode | ReactNode[];
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className="pt-8  mx-auto px-4 w-full overflow-x-scroll flex-1 sm:px-6 lg:px-20">
      {children}
    </div>
  );
};

export default PageWrapper;
