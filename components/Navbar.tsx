import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";

export default function Navbar (){
    const navItems: object[] = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "About Us",
            url: "/about"
        },
        {
            label: "Contact Us",
            url: "/contact"
        },
        {
            label: "Explore Skills",
            url: "/explore"
        },
    ]
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

            <div className="flex items-center gap-5 max-lg:hidden">
                {
                    navItems.map((item, index)=> (
                        <Link key={index} href={item.url} className="text-xl hover:text-[#2E2910] transition-all duration-200">{item.label}</Link>
                    ))
                }
            </div>
            <div className="flex items-center gap-5 max-lg:hidden">
                <Link href={"#"} className="text-xl border px-3 rounded-sm py-1 hover:bg-[#EBE3A7] transition-all duration-200">Advertise Skills</Link>
                <Link href={"#"} className="flex items-center text-xl gap-1 bg-[#2E2910] text-white px-3 rounded-sm border border-[#2E2910] py-1 group"><FiUser className="group-hover:-translate-x-0.5 transition-all duration-200" /> Register</Link>
            </div>

            <button className="text-2xl lg:hidden">
                <BiMenuAltRight />
            </button>
        </main>
    )
}