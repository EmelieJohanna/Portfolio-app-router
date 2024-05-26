import Me from "@/public/avatar-portrait.png";
import Image from "next/image";

export default function Avatar({ className }) {
  return (
    <div
      className={` rounded-full overflow-hidden border-2 border-accent hover:border-secondary shadow-lg hover:shadow-shadow transform hover:scale-105 transition duration-500 pt-4 ${className}`}
      style={{ height: "200px", width: "200px" }}
    >
      <Image
        src={Me}
        alt="Portrait"
        height={250}
        width={200}
        className="rounded-full"
        priority
      />
    </div>
  );
}
