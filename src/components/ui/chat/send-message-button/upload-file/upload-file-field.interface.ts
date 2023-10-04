import { FieldError } from "react-hook-form";
export interface IUploadFileField {
  onChange: (...event: any[]) => void;
  error?: FieldError;
}
