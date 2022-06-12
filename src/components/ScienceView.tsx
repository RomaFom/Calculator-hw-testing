interface TProps {
  handleInput: (input: string) => void;
}

export default function ScienceView({ handleInput }: TProps) {
  return (
    <>
      <div className="flex items-stretch bg-purple-900 h-24">
        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <button
            value={"abs("}
            onClick={(event: any) => handleInput(event.target.value)}
            className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            |x|
          </button>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
            <button
              value={"pow(x,y)"}
              onClick={(event: any) => handleInput(event.target.value)}
              className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              X^Y
            </button>
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
            <button
              value={"sqrt("}
              onClick={(event: any) => handleInput(event.target.value)}
              className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              sqrt
            </button>
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
            <button
              value={"tan("}
              onClick={(event: any) => handleInput(event.target.value)}
              className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              tan
            </button>
          </div>
        </div>
      </div>
      {/*SECOND LINE START*/}
      <div className="flex items-stretch bg-purple-900 h-24">
        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <button
            value={"cos("}
            onClick={(event: any) => handleInput(event.target.value)}
            className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            cos
          </button>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
            <button
              value={"sin("}
              onClick={(event: any) => handleInput(event.target.value)}
              className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              sin
            </button>
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
            <button
              value={"log("}
              onClick={(event: any) => handleInput(event.target.value)}
              className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              log
            </button>
          </div>
        </div>

        <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
          <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
            <button
              value={"ln("}
              onClick={(event: any) => handleInput(event.target.value)}
              className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
            >
              ln
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
        <div className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none">
          <button
            value={","}
            onClick={(event: any) => handleInput(event.target.value)}
            className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
          >
            ,
          </button>
        </div>
      </div>
    </>
  );
}
