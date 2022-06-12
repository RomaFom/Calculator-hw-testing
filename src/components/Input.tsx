interface Tprops {
  input: string;
}
export default function Input({ input }: Tprops) {
  return (
    <div className="pt-16 p-5 pb-0 text-white text-right text-3xl bg-purple-800">
      {input}
    </div>
  );
}
