import { CiUser } from "react-icons/ci";
import Button from '@mui/material/Button';

export default function Home() {
 return(
   <main>
    Home Page
     <CiUser className="text-7xl text-purple-700"/>
     <Button variant="contained">Hello world</Button>
   </main>
 )
}