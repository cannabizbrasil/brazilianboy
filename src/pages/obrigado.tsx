
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Obrigado from "@/components/obrigado";

const inter = Inter({ subsets: ["latin"] });

export default function ObrigadoPage() {
    return (
        <main>
            <NavBar />
            <Obrigado />
            <Footer />
        </main>
    );
}
