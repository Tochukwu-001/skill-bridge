"use client";
import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { useId, useState } from "react";
import { useSession } from "next-auth/react";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar (){
    const [navOpen, setNavOpen] = useState(false)
    // console.log(navOpen);

    const {data:session} = useSession()
    console.log(session);
    
    
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
            label: "Explore",
            url: "/explore"
        },
    ]
     const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <main className="flex items-center justify-between shadow-sm md:px-10 md:py-4 max-md:p-2 z-50 relative">
            <Link href={"/"} className="flex items-center gap-1 z-50">
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
                        <Link key={index} href={item?.url} className="text-xl hover:text-[#2E2910] transition-all duration-200">{item?.label}</Link>
                    ))
                }
            </div>
            <div className="flex items-center gap-5 max-lg:hidden">
                <Link href={"/advertise"} className="text-xl border px-3 rounded-sm py-1 hover:bg-[#EBE3A7] transition-all duration-200">Advertise Skills</Link>
                {
                    session?       <Avatar alt={session?.user?.name} src={session?.user?.image} />
 : (
                        <Link href={"/auth"} className="flex items-center text-xl gap-1 bg-[#2E2910] text-white px-3 rounded-sm border border-[#2E2910] py-1 group"><FiUser className="group-hover:-translate-x-0.5 transition-all duration-200" /> Register</Link>
                    )
                }
    <div>
      <button
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
      >
        <Avatar alt={session?.user?.name} src={session?.user?.image} />
      </button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': buttonId,
          },
        }}
      >
        <MenuItem onClick={handleClose}>
         <Link href={"/Profile"}></Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
            </div>

            {/* Mobile and tab nav */}

            <button onClick={()=> setNavOpen(!navOpen)} className="text-2xl lg:hidden z-50">
                {
                    navOpen ? <IoCloseOutline /> : <BiMenuAltRight /> 
                }
            </button>

            <div className={`lg:hidden bg-white h-screen absolute top-0 right-0 flex flex-col gap-6 pt-20 w-full ${navOpen ? "flex" : "hidden"}`}>
                <article className="flex flex-col gap-6 items-center">
                    {
                        navItems.map((item, i)=> (
                            <Link key={i} href={item.url} className="text-2xl">{item.label}</Link>
                        ))
                    }
                </article>
                <div className="flex items-center gap-5 flex-col">
                <Link href={"/advertise"} className="text-2xl border px-3 rounded-sm py-1 hover:bg-[#EBE3A7] transition-all duration-200">Advertise Skills</Link>
                <Link href={"/auth"} className="flex items-center text-2xl gap-1 bg-[#2E2910] text-white px-3 rounded-sm border border-[#2E2910] py-1 group"><FiUser className="group-hover:-translate-x-0.5 transition-all duration-200" /> Register</Link>
            </div>
            </div>
        </main>
    )
}
