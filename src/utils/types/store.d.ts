type BlobObject = {
  url: string;
  downloadUrl: string;
  pathname: string;
};

type UploadStore = {
  fetched: boolean;
  uploads: BlobObject[];
  set: (uploads: BlobObject[]) => void;
  relaod: () => void;
  clear: () => void;
  rename: (url: string, newName: string) => void;
  delete: (url: string) => void;
};
