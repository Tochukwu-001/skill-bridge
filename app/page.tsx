import { CiUser } from "react-icons/ci";
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main>
      home page
     <CiUser className="text-7xl color-purple"/>
      <Button variant="contained">Hello world</Button>;
    </main>
  );
}
