
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import FullPage from "@/components/fullpage";
import Footer from "@/components/footer";
import { useState } from 'react';
import AgeConfirmationModal from '@/components/agemodal';




const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [isOver18, setIsOver18] = useState<boolean | null>(null);

  const handleConfirmation = (confirmed: boolean) => {
    setIsOver18(confirmed);
    if (!confirmed) {
      window.location.href = 'https://www.youtube.com/kids/';
    }
  };
  return (
    <main>
      {isOver18 === null && <AgeConfirmationModal onConfirm={handleConfirmation} isOver18={isOver18} />}
      {isOver18 === true}
      {isOver18 === false}
      <NavBar />
      <FullPage />
      <Footer />
    </main>

  );
}
