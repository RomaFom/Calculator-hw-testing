import { EBase } from "../Types";

interface TProps {
  base: EBase;
  handleChangeBase: (base: EBase) => void;
}
//
const modes: EBase[] = [EBase.BIN, EBase.OCTAL, EBase.DECIMAL, EBase.HEX];
export default function Base({ base, handleChangeBase }: TProps) {
  return (
    <div className="flex items-stretch bg-purple-900 h-10 pt-12 pb-12">
      <div className="gap-2 flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        {modes.map((item) => {
          return (
            <div
              className={`rounded-lg h-20 w-20 flex items-center ${
                item === base ? "bg-cyan-400" : "bg-purple-800"
              } justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none text-amber-500`}
            >
              <button onClick={() => handleChangeBase(item)}>{item}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
