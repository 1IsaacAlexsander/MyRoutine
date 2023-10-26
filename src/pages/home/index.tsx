import { Footer } from "@/components/Footer";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <button onClick={() => signOut()}>SAIR</button>
      <Footer actualPage="pill" />
    </main>
  );
}
