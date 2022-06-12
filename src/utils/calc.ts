export function Reformat(input: string) {
  let newVal = input.replace("ln", "Math.log");
  console.log(eval(newVal));
  return eval(newVal);
}
