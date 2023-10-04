import { MessageService } from "@/services/message.service";
import { useMutation } from "@tanstack/react-query";
import {
  SubmitHandler,
  useForm,
  UseFormResetField,
  UseFormSetValue,
} from "react-hook-form";
interface IMessageFields {
  text?: string;
  image?: string;
}
export const useSendMessage = (
  resetField: UseFormResetField<IMessageFields>,
) => {
  const { mutateAsync } = useMutation({
    mutationKey: ["send message"],
    mutationFn: (formData: FormData) => MessageService.postMessage(formData),
  });
  const onSubmit: SubmitHandler<any> = async (formData) => {
    await mutateAsync({ conversationId: 1, ...formData });
    resetField("text");
  };
  return { onSubmit };
};
