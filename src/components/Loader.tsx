import React from "react";
import { clsx, Loader as Load } from "@mantine/core";

type Props = {
  page?: boolean;
};

const Loader = ({ page }: Props) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        page ? "h-screen w-screen " : "w-full h-full"
      )}
    >
      <Load color={"green"} />
    </div>
  );
};

export default Loader;
