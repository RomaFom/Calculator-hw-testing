import { EBase, EMode } from "../Types";
import { TMode } from "../Types";

interface TProps {
  handleChangeMode: (mode: EMode) => void;
  mode: EMode;
}

const modes: TMode[] = [
  { mode: EMode.BASE, name: "בסיס" },
  { mode: EMode.SOFT, name: "תוכנה" },
  { mode: EMode.FULL, name: "מדעי" },
];
export default function ModeTabs({ handleChangeMode, mode }: TProps) {
  return (
    <div className="flex items-stretch bg-purple-900 h-10 pt-12 pb-12">
      <div className="gap-2 flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        {modes.map((item) => {
          return (
            <div
              className={`rounded-lg h-20 w-20 flex items-center ${
                item.mode === mode ? "bg-cyan-400" : "bg-purple-800"
              } justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none text-amber-500`}
            >
              <button onClick={() => handleChangeMode(item.mode)}>
                {item.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
