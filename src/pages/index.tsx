import Link from "next/link";
import {DefaultButton} from "@/ui/Buttons";

export default function Home() {
  return (
      <div className={"flex flex-col items-center justify-center gap-1 min-h-screen bg-gray-100 px:4 sm:px-8"}>
          <h1 className={"text-4xl font-bold text-gray-900 text-center sm:text-5xl md:text-6xl"}>
              Welcome to
              <span className={"text-blue-600"}> Error Software</span>
          </h1>
          <p className={"text-1xl text-gray-400 text-center sm:text-2xl"}>Here you can browse our products 👇</p>
          <Link href={"/products"}>
              <DefaultButton text={"Browse products"}/>
          </Link>

          {/*<button className={`rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 mt-2 w-fit`}>*/}
          {/*    Browse products*/}
          {/*</button>*/}
      </div>
  );
}
