import { EBase } from "../Types";
export function Reformat(input: string, base: EBase) {
  let newVal = input;
  if (input.includes("tan")) {
    newVal = newVal.replace("tan", "Math.tan");
  }
  if (input.includes("ln")) {
    newVal = newVal.replace("ln", "Math.log");
  }
  if (input.includes("abs")) {
    newVal = newVal.replace("abs", "Math.abs");
  }
  if (input.includes("pow")) {
    newVal = newVal.replace("pow", "Math.pow");
  }
  if (input.includes("sqrt")) {
    newVal = newVal.replace("sqrt", "Math.sqrt");
  }
  if (input.includes("cos")) {
    newVal = newVal.replace("cos", "Math.cos");
  }
  if (input.includes("sin")) {
    newVal = newVal.replace("sin", "Math.sin");
  }
  if (input.includes("log")) {
    newVal = newVal.replace("log", "Math.log");
  }
  try {
    const result: number = eval(newVal);
    if (base !== EBase.DECIMAL) {
      return ChangeBase(result, base);
    }
    return result;
  } catch (e) {
    console.log("ERROR");
    return "ERROR";
  }
}

export function ChangeBase(value: number, base: number) {
  return value.toString(base);
}
