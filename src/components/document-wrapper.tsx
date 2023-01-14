import { LoadingOverlay } from "@mantine/core";
import { SideSheet } from "evergreen-ui";
import React, { SetStateAction, useState } from "react";

type DocumentWrapperProps = {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  url: string;
  title?: string;
  //   children: ReactNode | ReactNode[];
};

const DocumentWrapper = ({ show, setShow, url }: DocumentWrapperProps) => {
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };

  return (
    <SideSheet
      width={800}
      isShown={show}
      shouldCloseOnOverlayClick={false}
      onCloseComplete={() => setShow(false)}
    >
      <LoadingOverlay visible={loading} />
      <div className="">
        <iframe
          src={url}
          title="preview"
          onLoadStart={() => setLoading(true)}
          onLoad={onLoad}
          width="100%"
          className="min-h-full h-screen p-3"
          // frameBorder={0}
        ></iframe>
      </div>
    </SideSheet>
  );
};

export default DocumentWrapper;
