import { Theme } from "@/components/Theme";
import Link from "next/link";



export default function Home() {
  return (
    <main>
      <section className="min-h-dvh bg-[url('/image.png')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-dvh bg-black/60">
          <div className="w-2/3 mx-auto space-y-10 pt-20">
            <h2 className="text-white uppercase text-4xl font-bold text-center">practice . learn . achieve</h2>
            <p className="text-2xl font-thin text-white text-center">Bridging the gap between what you know, can do, and the opportunities waiting for you. Turning potentials into progress. Connect with the right people and take the next step towards your future.</p>
            <div className="flex items-center gap-10 justify-center">
              <Link href={"#"} className="text-white text-xl px-10 py-4 rounded-full" style={{backgroundColor: Theme.darkGreen}}>Start Now</Link>
              <Link className="border text-white px-10 py-4 rounded-full text-xl" href={"#"}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
