import React from "react";
import { clsx, Loader as Load } from "@mantine/core";

type Props = {
  page?: boolean;
  text?: string;
};

const Loader = ({ page, text }: Props) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        page ? "h-screen w-screen " : "w-full h-full"
      )}
    >
      <Load color={"green"} />
      {text}
    </div>
  );
};

export default Loader;
