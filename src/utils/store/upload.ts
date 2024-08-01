"use client";
import { create } from "zustand";

export const useUploadStore = create<UploadStore>()((set) => ({
  fetched: false,
  uploads: [],

  set: (
    uploads //change any to UserData response until the api is done
  ) =>
    set(() => {
      return {
        fetched: true,
        uploads,
      };
    }),
  clear: () => {
    set(() => {
      return {
        uploads: [],
      };
    });
  },

  rename: (url, newName) => {
    set((state) => {
      return {
        uploads: state.uploads.map((upload) => {
          if (url == upload.url) {
            const fracturedPath = upload.pathname.split(".");
            fracturedPath[1] = newName;
            upload.pathname = fracturedPath.join(".");
            return upload;
          }
          return upload;
        }),
      };
    });
  },
  delete: (url) => {
    set((state) => {
      return {
        uploads: state.uploads.filter((upload) => upload.url != url),
      };
    });
  },
}));
