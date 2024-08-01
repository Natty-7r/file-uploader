type FileInfo = {
  error: string | false;
  name?: string;
  size?: number;
  type?: string;
  fullName?: string;
};

type FileUploaderInputProp = {
  fileInfo: FileInfo;
  register: Function;
  inputName: string;
  field: any;
};

type DelteDialogProp = {
  url: string;
  onDelete: Function;
};
type RenameDialogProp = {
  onRename: Function;
};
