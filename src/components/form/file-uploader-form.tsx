"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { useRouter } from "next/navigation";

import { FileUploaderSchema } from "@/utils/schemas/file-upload";
import FileUploaderInput from "../inputs/file-uploader-input";
import { useEffect, useState } from "react";
import useFileUploader from "@/hooks/file/file-uploader";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";

const FileUploaderForm = () => {
  const router = useRouter();
  const formData = new FormData();
  const [file, setFileUploaded] = useState<boolean>(false);
  const [fileUploadedErrorCount, setCount] = useState<number>(0);
  const form = useForm<z.infer<typeof FileUploaderSchema>>({
    resolver: zodResolver(FileUploaderSchema),
  });

  const selectedFile = form.watch("file") as any;
  const [fileInfo] = useFileUploader(selectedFile);

  function onSubmit(data: z.infer<typeof FileUploaderSchema>) {
    const uploadedFile = form.getValues("file") as any;
    formData.append("file", uploadedFile);
  }

  useEffect(() => {
    console.log(fileUploadedErrorCount);
    if (fileUploadedErrorCount > 1 && fileInfo.error)
      toast({
        variant: "destructive",
        description: fileInfo.error,
      });
    setCount(fileUploadedErrorCount + 1);
  }, [fileInfo.error]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col  items-center gap-4 md:gap-12 w-3/5 mx-auto "
      >
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className="w-full my-8 md:my-4">
              <FormControl>
                <FileUploaderInput
                  inputName="file"
                  register={form.register}
                  fileInfo={fileInfo}
                  field={field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {
          <div className="flex flex-row gap-10 w-full">
            <Button type="submit" className="w-full" disabled={!fileInfo.name}>
              Upload
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              disabled={!fileInfo.name}
              onClick={(e) => {
                setCount(0);
                form.reset();
              }}
            >
              Clear
            </Button>
          </div>
        }
      </form>
    </Form>
  );
};

export default FileUploaderForm;
