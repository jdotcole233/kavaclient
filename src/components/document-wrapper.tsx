import { SideSheet } from "evergreen-ui";
import React, { SetStateAction, useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../app/hooks";
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
  const [loading, setLoading] = useState(true);
  const { access_token } = useAppSelector((state) => state.auth);
  const [file, setFile] = useState<ReadableStream<Uint8Array> | null>(null);
  const handleOnLoadStart = () => {
    // alert("Start");
    setLoading(true);
  };
  const onLoad = () => {
    setLoading(false);
  };

  const fetchData = async () => {
    const data = await fetch(url, {
      headers: {
        authorization: "Bearer " + access_token,
        accept:"application/json"
      },
    })
      .then((res) => {
        // res.body;
        setFile(res.body);
        setLoading(false);
        console.log(res.body);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    // set
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            srcDoc={file as any}
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
