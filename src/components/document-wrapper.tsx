import { SideSheet } from "evergreen-ui";
import React, { SetStateAction, useState } from "react";
import Loader from "./Loader";
import Show from "./show";

type DocumentWrapperProps = {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  url: string;
  title?: string;
  //   children: ReactNode | ReactNode[];
};

const DocumentWrapper = ({ show, setShow, url }: DocumentWrapperProps) => {
  const [loading, setLoading] = useState(false);
  const handleOnLoadStart = () => {
    // alert("Start");
    setLoading(true);
  };
  const onLoad = () => {
    setLoading(false);
  };

  return (
    <SideSheet
      width={800}
      isShown={show}
      onCloseComplete={() => setShow(false)}
    >
      <Show if={loading}>
        <Loader />
      </Show>
      <Show if={!loading}>
        <div className="">
          <iframe
            src={url}
            onLoadStart={handleOnLoadStart}
            title="preview"
            onLoad={onLoad}
            width="100%"
            className="min-h-full h-screen p-3"
            // frameBorder={0}
          ></iframe>
        </div>
      </Show>
    </SideSheet>
  );
};

export default DocumentWrapper;
