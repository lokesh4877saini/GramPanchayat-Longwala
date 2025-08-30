import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact({ contact }) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-green-700">Contact Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Address */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
            <MapPin className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p className="text-gray-600">{contact.address}</p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
            <Phone className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <a
              href={`tel:${contact.phone}`}
              className="text-green-700 font-medium hover:underline"
            >
              {contact.phone}
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
            <Mail className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <a
              href={`mailto:${contact.email}`}
              className="text-green-700 font-medium hover:underline"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
