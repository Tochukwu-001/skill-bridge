import { auth } from "@/auth";
import Advertise from "./advertise";
import { redirect } from "next/navigation";

export default async function Page () {
    const session = await auth()
    if(!session){
        redirect("/auth")
    }
    return (
        <main>
            <Advertise/>
        </main>
    )
}