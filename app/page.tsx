import Hero from "./ui/hero";
import NavBar from "./ui/nav";

export default function Home() {
  return (

    <main className="flex h-screen flex-col items-center justify-between sm:overflow-clip">
      <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f68133fc5cb4e29ed28f2_Background%20Image1%20(1).svg" alt="" className="absolute -z-10 inline-block h-full w-full object-cover" />
      <NavBar/>
      <Hero/>
    </main>
  );
}
