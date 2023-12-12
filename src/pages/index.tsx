import { League_Spartan } from "next/font/google";
import { Layout } from "@/views";

const inter = League_Spartan({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <Layout />
    </main>
  );
}
