import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
  <header className="pb-4 top-0 z-50 bg-white">
    <div className="px-4 flex justify-between">
      <Link href="/" className="hover:text-gray-300">
        <Image src='/tatttootrade_logo-01.png' width={125} height={25} alt='Go to the homepage' />
      </Link>
      <nav className="flex items-center">
        <ul className="flex gap-x-6">
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-gray-300">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="flex-grow border-t border-gray-400"></div>
  </header>
  );
}