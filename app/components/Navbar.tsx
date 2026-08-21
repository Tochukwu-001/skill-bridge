import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

  const navItems: object[] = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Contact Us", url: "/contact" },
    { label: "Explore Skills", url: "/explore" }
  ]

  return (
    <main className="flex items-center justify-between shadow-sm md:px-10 md:py-2 max-md:p-2">
        <Link href={"/"} className="flex items-center gap-1"> 
          <Image
            src={"/logo.png"}
            alt="logo"
            width={400}
            height={400}
            className="w-10 h-10"
          />
          <p className="text-xl font-light">SkillBride</p>
        </Link>

        <div className="flex items-center gap-5 max-lg:hidden">
          {
            navItems.map((item, index) => (
              <Link key={index} href={item.url} className="text-xl hover:text-[#2E2910] transition-all duration-200">{item.label}</Link>
            ))
          }
          
        </div>
        <div className="flex items-center gap-5 max-lg:hidden">
          <Link href={"#"} className="text-xl border-2 px-2 rounded-sm hover:bg-[#EBE3A7] transition-all duration-200">Advertise Skill</Link>
          <Link href={"#"} className="flex text-xl items-center gap-1 bg-[#2E2910] text-white px-3 rounded-sm border-2 border-[#2E2910] py-1 group">Register</Link>
          
        </div>
    </main>
  )
}




// project proposal and get navbar ready