import { SessionProvider } from "next-auth/react";

export default function Provider ({children}){
    return (
        <main>
            <SessionProvider>

            {children}
            </SessionProvider>
        </main>
    )
}