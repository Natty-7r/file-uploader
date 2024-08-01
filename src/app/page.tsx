"use client";

import FileListTable from "@/components/table/file-list-table";
import { useEffect } from "react";
import { getList } from "./api/upload";
import { useUploadStore } from "@/utils/store/upload";

const FileListPage = () => {
  const { set, relaod } = useUploadStore();

  const loadList = async () => {
    const listLoaded = await getList();
    set(listLoaded.blobs as any);
  };
  useEffect(() => {
    relaod();
    setTimeout(loadList, 1000);
  }, []);
  return (
    <main className="md:p-8">
      <FileListTable />
    </main>
  );
};

export default FileListPage;
