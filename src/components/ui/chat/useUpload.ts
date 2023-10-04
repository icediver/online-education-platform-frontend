import { useCallback, useEffect, useMemo, useState } from "react";

import { MediaService } from "@/services/media.service";
import { useMutation } from "@tanstack/react-query";

export const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  useEffect(() => console.log(fileUrl), [fileUrl]);
  const { mutateAsync } = useMutation({
    mutationKey: ["upload file"],
    mutationFn: (file: FormData) => MediaService.upload(file),
  });
  const uploadFile = useCallback(
    async (file: File) => {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("image", file);
      const fileUrl = await mutateAsync(formData).then((data) => data.data.url);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return fileUrl;
    },
    [mutateAsync],
  );
  return useMemo(
    () => ({ uploadFile, isLoading, fileUrl }),
    [uploadFile, isLoading, fileUrl],
  );
};
