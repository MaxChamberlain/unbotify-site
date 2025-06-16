/* eslint-disable */
import { toast } from "sonner";

export function useMutationToast(options?: {
  loading?: string | ((data: any) => string | Promise<string>);
  success?: string | ((data: any) => string | Promise<string>);
  error?: string | ((error: any) => string | Promise<string>);
  onSettled?: () => void;
}) {
  return {
    onSuccess: (data: any) => {
      if (!options?.success) return;
      toast.dismiss();
      toast.success(
        typeof options?.success === "function"
          ? options.success(data)
          : (options?.success ?? "Success"),
      );
    },
    onError: (error: any) => {
      if (!options?.error) return;
      toast.dismiss();
      toast.error(
        typeof options?.error === "function"
          ? options.error(error)
          : (options?.error ?? "Something went wrong"),
      );
    },
    onMutate: (data: any) => {
      if (!options?.loading) return;
      toast.loading(
        typeof options?.loading === "function"
          ? options.loading(data)
          : (options?.loading ?? "Talking to the server..."),
      );
    },
    onSettled: () => {
      options?.onSettled?.();
    },
  };
}
