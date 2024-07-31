

import Image from "next/image";
import Card from "@/app/components/Card"
import CardsList from "./components/CardsList";
import Link from "next/link"
import DefaultButton from "./components/DefaultButton";
import { Button } from "@/components/ui/button"

export default function Home() {


  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start p-24 ">
      <h1 className="text-3xl font-medium">My Notes</h1>
      <CardsList />
      {/* <DefaultButton
        title={"Create Note"}
        bgColor={"bg-blue-500"}
        textColor={"text-white"}
      /> */}
      <Button asChild>
        <Link href="/createCardPage">Create Note</Link>
      </Button>
    </main>
  );
}
