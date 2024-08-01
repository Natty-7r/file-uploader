"use client";

import FileListTable from "@/components/table/file-list-table";
import { useEffect, useState } from "react";
import { getList } from "./api/upload";
import { useUploadStore } from "@/utils/store/upload";

type BlobObject = {
  url: string;
  downloadUrl: string;
  pathname: string;
  // Add additional properties here if needed
};

const FileListPage = () => {
  const { set } = useUploadStore();

  const loadList = async () => {
    const listLoaded = await getList();
    set(listLoaded.blobs as any);
  };
  useEffect(() => {
    loadList();
  }, []);
  return (
    <main className="md:p-8">
      <FileListTable />
    </main>
  );
};

export default FileListPage;
