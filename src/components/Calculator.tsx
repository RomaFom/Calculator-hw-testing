import Result from "./Result";
import { useState } from "react";
import { Reformat } from "../utils/calc";
enum EMode {
  BASE,
  SOFT,
  FULL,
}
export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");
  const [base, setBase] = useState("10");
  const [mode, setMode] = useState(EMode.BASE);
  const handleInput = (value: string) => {
    console.log(value);
    setInput(input + value);
  };
  const handleCalculate = () => {
    setResult(Reformat(input));
  };
  const handleChangeMode = (mode: EMode) => {
    setMode(mode);
  };

  return (
    <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      <div className="">
        <div className="p-5 text-white text-center text-3xl bg-purple-900">
          <span className="text-orange-500">Calcu</span>lator
        </div>
        <div className="pt-16 p-5 pb-0 text-white text-right text-3xl bg-purple-800">
          {input}
        </div>
        <Result result={result} />
        <div className="flex items-stretch bg-purple-900 h-10 pt-12 pb-12">
          <div className="gap-2 flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-lg h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none text-amber-500">
              <button onClick={() => setMode(EMode.BASE)}>בסיסי</button>
            </div>
            <div className="rounded-lg h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none text-amber-500">
              <button onClick={() => setMode(EMode.SOFT)}>תוכנה</button>
            </div>
            <div className="rounded-lg h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none text-amber-500">
              <button onClick={() => setMode(EMode.FULL)}>מדעי</button>
            </div>
          </div>
        </div>
        <div>Base</div>
        <div className="flex items-stretch bg-purple-900 h-24">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none text-amber-500">
              <button
                onClick={() => {
                  setResult("0");
                  setInput("");
                }}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                C
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"("}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                (
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={")"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                )
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"/"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                /
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-stretch bg-purple-900 h-24">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button
              value={"7"}
              onClick={(event: any) => handleInput(event.target.value)}
              className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              7
            </button>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"8"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                8
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"9"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                9
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"*"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                *
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-stretch bg-purple-900 h-24">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"4"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                4
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"5"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                5
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"6"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                6
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"-"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                -
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-stretch bg-purple-900 h-24">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"1"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                1
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"2"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                2
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"3"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                3
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              +
            </div>
          </div>
        </div>

        <div className="flex items-stretch bg-purple-900 h-24 mb-4">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"+"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"0"}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                0
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"."}
                onClick={(event: any) => handleInput(event.target.value)}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                .
              </button>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <button
                value={"="}
                onClick={handleCalculate}
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
