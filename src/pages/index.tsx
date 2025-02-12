import Link from "next/link";
import {DefaultButton} from "@/ui/Buttons";

export default function Home() {
  return (
      <div className={"flex flex-col items-center justify-center gap-1 min-h-screen bg-gray-100"}>
          <h1 className={"text-4xl font-bold text-gray-900"}>Welcome to <span
              className={"text-blue-600"}>Error Software</span></h1>
          <p className={"text-1xl text-gray-400"}>Here you can browse our products 👇</p>
          <Link href={"/products"}>
              <DefaultButton text={"Browse products"}/>
          </Link>
      </div>
  );
}
