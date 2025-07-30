import { FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#2a2a2a] text-white">
      <div className="flex items-center justify-between px-6 sm:px-24 py-10">
        <p className="text-sm text-gray-300">
          © 2025 KAVIA AI – All Rights Reserved.
        </p>
        <div className="flex items-center space-x-4 text-white">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}