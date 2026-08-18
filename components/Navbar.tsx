import { ListItemSecondaryAction } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { LiaUserSecretSolid } from "react-icons/lia";


export default function Navbar() {
  const navItems: object[]=[
    {
      label: "Home",
      url:"/"
    },
    {
      label: "About Us",
      url:"/"
    },
    {
      label: "Contact Us",
      url:"/"
    },
    {
      label: "Explore Skills",
      url:"/"
    },
  ]
 return(
    <main className="flex items-centere justify-between shadow-sm md:px-10 md:py-2 max-md:p-2">
     <Link href={"/"} className="flex items-center gap-1">
    <Image
    src={"/logo.png"}
    alt="Logo"
    width={400}
    height={400}
    className="w-10 h-10 "
    />
    <p className="text-xl font-light">Skill Bridge</p>
     </Link>

     <div className="flex items-center gap-5 max:lg:hidden">
    {
      navItems.map((item, index)=>(
       
    <Link key={index} href={item.url} className="text-xl  hover:text-[#2E2910] transition-all duration-200">{item.label}</Link>
      ))
    }

   {/* <Link href={"#"}>About Us </Link>
   <Link href={"#"}>Contact Us</Link>
   <Link href={"#"}>Explore Skills</Link> */}
     </div>
     <div className="flex items-center gap-5 max:lg:hidden">
    <Link href={"/"} className="text-xl border px-3 rounded-sm py-1 hover:bg-[#EBE3A7] hover:text-white">Advertise Skills</Link>
    <Link href={"/"} className="flex items-center gap-1 text-xl bg-[#2E2910] text-white px-3 rounded-sm border border-[#2E2910] py-1 group">
      <LiaUserSecretSolid className="group-hover:-translate-x-0.5 transition-all duration-200" />
      <span>Register</span>
    </Link>
      </div>
<button className="text-2xl ">
  <CgMenuGridR />
</button>

    </main>
    
 )
}