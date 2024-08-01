"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { UploadCloud } from "lucide-react";

const FileUploaderInput = ({
  fileInfo,
  register,
  inputName,
}: FileUploaderInputProp) => {
  return (
    <div
      className={cn(
        " relative rounded-sm  mx-auto   p-4 md:p-8  border-2 bg-accent"
      )}
    >
      <div
        className={cn(
          "bottom-0  top-0 left-0 h-full w-full  flex flex-col items-center justify-center md:gap-4 "
        )}
      >
        <UploadCloud />

        <h2 className="capitalize font-bold">Upload file</h2>

        {fileInfo.name && (
          <div className="flex flex-col gap-2 items-center">
            <p className="italic">{fileInfo.fullName}</p>
            <p className="italic text-xs">
              {fileInfo.size && fileInfo?.size < 1024 * 1024
                ? `${((fileInfo?.size || 0) / 1024).toFixed(4)}KB`
                : `${((fileInfo?.size || 0) / 1024 / 1024).toFixed(4)} MB`}
            </p>
          </div>
        )}
      </div>
      <Input
        name={inputName}
        id={inputName}
        {...register(inputName)}
        type="file"
        className="block mb-12 absolute top-0 left-0 h-full w-full rounded-lg opacity-0 z-[1]"
      />
    </div>
  );
};

export default FileUploaderInput;
