import Advertise from "./advertise";

export default async function Page () {
    if (!session) {
        redirect("/auth")
        
    }
    return (
        <main>
            <Advertise/>
        </main>
    )
}