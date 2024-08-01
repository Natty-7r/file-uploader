"use server";
import { put, list, del } from "@vercel/blob";
const BLOB_READ_WRITE_TOKEN =
  "vercel_blob_rw_0D64zJ9S8exYiqj5_tXEDJkEjgPheGLbPBtMRCTJ8kj9T3g";
export const uploadFile = async (formDat: any) => {
  const file = formDat.get("file");
  const fileName = `${BLOB_READ_WRITE_TOKEN}.${formDat.get("name")}`;
  console.log(fileName);
  const blob = await put(fileName, file[0], {
    access: "public",
    token: BLOB_READ_WRITE_TOKEN,
  });
  return blob;
};
export const getList = async () => {
  const lists = await list({ token: BLOB_READ_WRITE_TOKEN });
  return lists;
};
export const deleteUpload = async (url: string) => {
  await del(url, { token: BLOB_READ_WRITE_TOKEN });
};
