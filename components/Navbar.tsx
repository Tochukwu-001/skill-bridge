import Image from "next/image";
import Link from "next/link";
export default function Navbar(){
    const navItems: object [] = [
      {
        label: "home",

      }
    ]
    return(
        <main className="flex item-center justify-between shadow-sm md:px-10 md:py-2 max-md:p-2">
            <Link href={"/"}className="flex item-center gap-1">
            <Image
                src={"/logo.png"}
                alt="logo"
                width={400}
                height={400}
                className="w-10 h-10"
            />
            <p>skill-bridge</p>
            </Link>
            <div className="flex item-center gap-5"> {
                navItems.map((item, index)=>(
                    <Link key={index}
                ))
                }
              
            <Link href={"#"}className="text-xl hover:text-[#2E2910] transition-all duration-200">home</Link>
            <Link href={"#"}>about us</Link>
              <Link href={"#"}>contact us</Link>
            <Link href={"#"}>explore options</Link>
            </div>
            <div>
            <Link href={"#"}className=" flext itmem-center gap-1 bg-darkgreen">Register</Link>
            <Link href={"#"}className="text-xl border-2 px-2 rounded-xl">advertise skills</Link>
              
            </div>
            <button>
                
            </button>
        </main>
    )
}