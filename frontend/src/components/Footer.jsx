import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer({ social }) {
  return (
    <footer className="bg-green-700 text-white py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="mb-4 text-lg font-medium">Follow us on</p>
        
        <div className="flex justify-center space-x-8 mb-6">
          {social.facebook && (
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Facebook className="w-6 h-6 inline-block" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Twitter className="w-6 h-6 inline-block" />
            </a>
          )}
          {social.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <Instagram className="w-6 h-6 inline-block" />
            </a>
          )}
        </div>

        <div className="border-t border-green-500 pt-4">
          <p className="text-sm">© 2025 Gram Panchayat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
