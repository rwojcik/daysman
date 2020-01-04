// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractError = (err: any): string[] => {
  if (err == null) {
    return [];
  } else if (typeof err === 'string') {
    return [err];
  } else if (Array.isArray(err)) {
    return err.flatMap((e) => extractError(e));
  } else if ('message' in err && typeof err.message === 'string') {
    return [err.message];
  }

  console.warn({ err });
  return ['Unknown error'];
};
