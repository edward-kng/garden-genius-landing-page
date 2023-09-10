import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed bg-white w-full h-20 flex flex-row items-center space-x-10 p-4 text-gg-primary font-bold text-2xl border-b border-gray-300">
      <Link href="/" className="flex flex-row space-x-5 items-center">
        <div className="relative w-14 aspect-square">
          <Image
            fill={true}
            src="/garden-genius-logo-no-bg.png"
            alt="Garden Genius Logo"
          />
        </div>
        <p>Garden Genius</p>
      </Link>
    </nav>
  );
}
