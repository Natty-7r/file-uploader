"use server";
import { BLOB_READ_WRITE_TOKEN } from "@/utils/constants/constant";
import { put, list, del } from "@vercel/blob";

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
