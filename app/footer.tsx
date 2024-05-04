import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex justify-center bottom-0 left-0 w-full bg-gray-800 text-white py-4">
      <div className="flex gap-x-6">
        <p>&copy; 2024 Tattoo Trade</p>
        <Link href="/policies/terms-of-service" className="hover:text-gray-300">
          Terms of Service
        </Link>
        <Link href="/policies/privacy-policy" className="hover:text-gray-300">
          Privacy Policy
        </Link>
        <Link href="/contact-us" className="hover:text-gray-300">
          Contact Us
        </Link>
      </div>
    </footer>
  );
}