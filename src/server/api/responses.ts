export const QueryResponse = <T, V>({
	success,
	message,
	data,
	error,
}: {
	success: boolean;
	message: string;
	data: T;
	error?: V;
}) => {
	return {
		success,
		message,
		data,
		error,
	};
};

export const MutationResponse = <T, U, V>({
	success,
	message,
	data,
	error,
	input,
}: {
	success: boolean;
	message: string;
	data: T;
	input: U;
	error?: V;
}) => {
	return {
		success,
		message,
		data,
		input,
		error,
	};
};
