export const QueryResponse = ({
  success,
  message,
  data,
  error,
}: {
  success: boolean;
  message: string;
  data: any;
  error?: any;
}) => {
  return {
    success,
    message,
    data,
    error,
  };
};

export const MutationResponse = ({
  success,
  message,
  data,
  error,
  input,
}: {
  success: boolean;
  message: string;
  data: any;
  input: any;
  error?: any;
}) => {
  return {
    success,
    message,
    data,
    input,
    error,
  };
};
