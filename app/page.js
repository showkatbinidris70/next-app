import Image from "next/image";
import imgOne from "@/public/assets/img/image-1.png";

export default function Home() {
  return (
    <main>
      <h1 className="text-center font-semibold text-lime-500">
        This is root page
      </h1>
      <div className="w-[400px]">
        <Image src={imgOne} alt="image" />
      </div>
    </main>
  );
}
