import Result from "./Result";
import { useState } from "react";
import { Reformat } from "../utils/calc";
import { EBase, EMode } from "../Types";
import Layout from "./Layout";
import Header from "./Header";
import Input from "./Input";
import ModeTabs from "./ModeTabs";
import Base from "./Base";
import ScienceView from "./ScienceView";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");
  const [base, setBase] = useState(EBase.DECIMAL);
  const [mode, setMode] = useState(EMode.BASE);
  const [stored, setStored] = useState<string[]>([]);
  // const functionKeys = Object.keys(EFunctions);
  // const functionValues = Object.values(EFunctions);
  const handleInput = (value: string) => {
    setInput(input + value);
  };
  const handleCalculate = () => {
    const result = Reformat(input, base).toString();
    setResult(result);
    setStored([...stored, result]);
  };
  const handleChangeMode = (newMode: EMode) => {
    setMode(newMode);
    setBase(EBase.DECIMAL);
  };

  const handleChangeBase = (base: EBase) => {
    setBase(base);
  };

  return (
    <Layout>
      <Header />
      <Input input={input} />
      <Result result={result} />
      <ModeTabs handleChangeMode={handleChangeMode} mode={mode} />
      {mode === EMode.SOFT && (
        <Base base={base} handleChangeBase={handleChangeBase} />
      )}
      {mode === EMode.FULL && <ScienceView handleInput={handleInput} />}
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
            <button
              value={"+"}
              onClick={(event: any) => handleInput(event.target.value)}
              className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-stretch bg-purple-900 h-24 mb-4">
        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
            <button
              value={"+"}
              onClick={(event: any) => setInput(input.slice(0, -1))}
              className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              delete
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
    </Layout>
  );
}
