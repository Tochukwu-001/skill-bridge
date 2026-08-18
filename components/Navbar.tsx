import Image from "next/image";
import Link from "next/link";

export default function Navbar (){
    return (
        <main className="flex items-center justify-between shadow-sm md:px-10 md:py-2 max-md:p-2">
            <Link href={"/"} className="flex items-center gap-1">
                <Image 
                    src={"/logo.png"}
                    alt="logo"
                    width={400}
                    height={400}
                    className="w-10 h-10 flex"
                />
                <p className="text-xl font-light">SkillBridge</p>
            </Link>

            <div className="flex items-center gap-5 text-xl">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About Us</Link>
                <Link href={"/"}>Contact Us</Link>
                <Link href={"/"}>Explore Skills</Link>
            </div>
            <div>
                <Link href={"#"}>Register</Link>
                <Link href={"#"}>Advertise Skills</Link>
            </div>
        </main>
    )
}