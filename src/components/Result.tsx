interface TProp {
  result: string;
}

export default function Result({ result = "" }: TProp) {
  return (
    <div className="p-5 text-white text-right text-3xl bg-purple-800">
      = <span className="text-orange-500">{result}</span>
    </div>
  );
}
