interface MediaData {
  multiple: boolean;
  selected: string[];
}

interface FileUploadData {
  originalName: string;
  nameAfterUpload?: string;
  status: number;
}

interface UploadResponse {
  status: number;
  path: string[];
}

enum FileUploadStatus {
  Loading,
  Success,
  Fail,
}

export { MediaData, FileUploadData, FileUploadStatus, UploadResponse };
