import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h3 className="text-[60px] uppercase font-bold">Deret Aritmatika</h3>
        <div className="flex-row">
          <input name="input1" className="border border-black w-20 h-20 ml-3" />
          <input name="input2" className="border border-black w-20 h-20 ml-3" />
          <input name="input3" className="border border-black w-20 h-20 ml-3" />
          <input name="input4" className="border border-black w-20 h-20 ml-3" />
          <input name="input5" className="border border-black w-20 h-20 ml-3" />
          <input name="input6" className="border border-black w-20 h-20 ml-3" />
          <input name="input7" className="border border-black w-20 h-20 ml-3" />
          <input name="input8" className="border border-black w-20 h-20 ml-3" />
        </div>
      </main>
    </div>
  );
}
