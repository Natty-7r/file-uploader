import { UPLOAD_FILE_SIZE } from "@/utils/constants/constant";
import { useEffect, useState } from "react";

const useFileUploader = (filelist: File[]): [FileInfo, Function] => {
  const [fileInfo, setFileInfo] = useState<FileInfo>({ error: false });
  useEffect(() => {
    if (!filelist || filelist.length < 1)
      setFileInfo({ error: "File not Selected" });
    else if (filelist[0].size > UPLOAD_FILE_SIZE * 1024 * 1024)
      setFileInfo({
        error: `The file size excedds ,  maximum size is ${UPLOAD_FILE_SIZE} MB.`,
      });
    else {
      const fileNameBroken = filelist[0].name.split(".");
      setFileInfo({
        type: fileNameBroken[fileNameBroken.length - 1],
        name: fileNameBroken.slice(0, fileNameBroken.length - 1).join(""),
        error: false,
        size: filelist[0].size,
        fullName: filelist[0].name,
      });
    }
  }, [filelist]);
  return [fileInfo, setFileInfo];
};

export default useFileUploader;
