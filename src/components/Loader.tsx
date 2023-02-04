import React from "react";
import { clsx, Loader as Load } from "@mantine/core";

type Props = {
  page?: boolean;
  text?: string;
  card?: boolean;
};

const Loader = ({ page, text, card }: Props) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center flex-col",
        page ? "h-screen w-screen " : "w-full h-full",
        card ? "h-64 w-screen " : "w-full h-full"
      )}
    >
      <Load color={"green"} />
      {text}
    </div>
  );
};

export default Loader;
