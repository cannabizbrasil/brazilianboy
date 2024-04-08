
import { Inter } from "next/font/google";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Conceito from "@/components/conceito";
import Produtos from "@/components/produtos";
import Roadmap from "@/components/roadmap";
import FullPage from "@/components/fullpage";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <NavBar />
      <FullPage />
      <Footer />


    </main>
  );
}
