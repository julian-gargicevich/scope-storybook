// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const filterUndefinedOrEmpty = (obj: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([, value]) => !!value && (Array.isArray(value) ? value.length > 0 : true)
    )
  );

export const sortNumeric = (a?: number, b?: number) => (a || 0) - (b || 0);

export const sortString = (a?: string, b?: string) =>
  (a || "").localeCompare(b || "");

export const sortDate = (a?: string, b?: string) => {
  if (!a || !b) {
    return 0;
  }
  return new Date(a).getTime() - new Date(b).getTime();
};

export const areStringArraysEqual = (a?: string[], b?: string[]) => {
  if (!a || !b) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }

  return a.sort().join(",") === b.sort().join(",");
};

export const assertNever = (x: never): never => {
  throw new Error("Unexpected object: " + x);
};
