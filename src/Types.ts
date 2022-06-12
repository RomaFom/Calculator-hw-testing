export enum EMode {
  BASE,
  SOFT,
  FULL,
}

export interface TMode {
  mode: EMode;
  name: string;
}

export enum EBase {
  BIN = 2,
  OCTAL = 8,
  DECIMAL = 10,
  HEX = 16,
}

export enum EFunctions {
  ABS = "Math.abs",
  XPOW2 = "Math.pow",
}
