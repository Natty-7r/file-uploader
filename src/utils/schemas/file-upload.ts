import { z } from "zod";
import { UPLOAD_FILE_SIZE } from "../constants/constant";

export const FileUploaderSchema = z.object({
  file: z.custom<any>().refine(
    (file) => {
      console.log(file, "fffffffffffff");
      return !file || (!!file && file[0].size <= 1000 * 1024 * 1024);
    },
    {
      message: `The file must be a maximum of ${UPLOAD_FILE_SIZE} MB.`,
    }
  ),
  //   .refine((file) => !file || (!!file && file.type?.startsWith("image")), {
  // message: "profile  picture file must be an image",
  // }),
});

// export const FileUploaderSchema = z.object({
//   file: z.custom<any>(),
//   // .instanceof(FileList)
//   // .refine((file) => file?.length == 1, "File is required."),
// });
