import Image from "next/image";
import Reader from "./components/Reader";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Reader/>
    </main>
  );
}
