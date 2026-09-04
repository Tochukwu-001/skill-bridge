import { auth } from "@/auth";
import Explore from "./explore";
import { redirect } from "next/navigation";

export default async function ExploreServer () {
  const session = await auth()
  if (!session) {
    redirect("/auth")
  }
  return (
    <main>
      <Explore session={session}/>
    </main>
  )
}