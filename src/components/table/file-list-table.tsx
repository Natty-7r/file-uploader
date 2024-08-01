import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit2Icon, Trash, X } from "lucide-react";
import { useRef, useState } from "react";
import { DelteUploadDialog } from "../dialog/delete-upload-dialog";
import { url } from "inspector";
import { Input } from "../ui/input";
import { RenameUploadDialog } from "../dialog/rename-upload-dialog";
import { useUploadStore } from "@/utils/store/upload";
import { UPloadTableSkeleton } from "../skeleton/upload-table-skeleton";

type BlobObject = {
  url: string;
  downloadUrl: string;
  pathname: string;
  // Add additional properties here if needed
};

const FileListTable = () => {
  const { uploads, rename, delete: deleteUpload, fetched } = useUploadStore();
  const [editing, setEditing] = useState({
    editing: false,
    url: "",
    pathname: "",
  });

  const nameRef: any = useRef();
  const renameUpload = (url: string) => {
    rename(url, nameRef.current.value);
    setEditing({
      editing: false,
      url: editing.url,
      pathname: editing.pathname,
    });
  };

  return (
    <Table>
      <TableHeader className="">
        <TableRow className="flex justify-between bg-primary text-lg hover:bg-primary">
          <TableHead className="w-[10%]  text-white pt-2">File Name</TableHead>
          <TableHead className="w-auto w-3/4  text-white pt-2">URL</TableHead>
          <TableHead className="w-[10%]  text-white pt-2"></TableHead>
          <TableHead className="w-[5%]  text-white pt-2"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!fetched && <UPloadTableSkeleton />}
        {fetched &&
          uploads.length > 0 &&
          uploads.map(({ pathname, url, downloadUrl }) => {
            const fracturedPath = pathname.split(".");

            return (
              <TableRow className="flex justify-between">
                <TableCell className=" w-[10%] font-medium">
                  {editing.editing && url == editing.url ? (
                    <Input
                      type="text"
                      ref={nameRef}
                      defaultValue={fracturedPath[1]}
                    />
                  ) : (
                    fracturedPath[1]
                  )}
                </TableCell>
                <TableCell className="w-auto w-3/4">
                  <a href={downloadUrl} download="file.zip">
                    {url}
                  </a>
                </TableCell>
                <TableCell className="w-[10%]">
                  {editing.editing && url == editing.url ? (
                    <div className="flex gap-2 ">
                      <RenameUploadDialog
                        onRename={(e: any) => renameUpload(url)}
                      />
                      <X
                        onClick={(e) =>
                          setEditing({
                            editing: false,
                            url: editing.url,
                            pathname: editing.pathname,
                          })
                        }
                      />
                    </div>
                  ) : (
                    <Edit2Icon
                      onClick={(e) =>
                        setEditing({
                          editing: true,
                          url,
                          pathname: editing.pathname,
                        })
                      }
                    />
                  )}
                </TableCell>
                <TableCell className="w-[5%]">
                  <DelteUploadDialog
                    url={url}
                    onDelete={(e: any) => deleteUpload(url)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        {fetched && uploads.length == 0 && (
          <h2 className="font-bold uppercase text-red-500 mx-auto m-24 w-fit text-center">
            {" "}
            Empty list{" "}
          </h2>
        )}
      </TableBody>
    </Table>
  );
};

export default FileListTable;
