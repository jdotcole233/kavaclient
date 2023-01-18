import { LoadingOverlay } from "@mantine/core";
import { SideSheet } from "evergreen-ui";
import React, { SetStateAction, useState } from "react";
import { useWindowSize } from "react-use";
type DocumentWrapperProps = {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  url: string;
  title?: string;
  //   children: ReactNode | ReactNode[];
};

const DocumentWrapper = ({ show, setShow, url }: DocumentWrapperProps) => {
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowSize();
  const onLoad = () => {
    setLoading(false);
  };

  return (
    <SideSheet
      width={width < 1242 ? width * 0.8 : width * 0.4}
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
