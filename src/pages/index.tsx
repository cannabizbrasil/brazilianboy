
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
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
