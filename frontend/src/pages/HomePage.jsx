// src/pages/HomePage.jsx
import { useNavigate } from "react-router-dom";

// Dummy Panchayat list (replace with API / MongoDB data later)
const panchayats = [
{ name: "Gram Panchayat - Sundarpur", slug: "sundarpur", img: "https://previews.123rf.com/images/kylieellway/kylieellway1504/kylieellway150400013/38714674-small-indian-village-school-in-bandhavgah-india.jpg" },
{ name: "Gram Panchayat - Lakshmipur", slug: "lakshmipur", img: "https://i.pinimg.com/736x/d4/49/4e/d4494e58ac2fed1b8c1a55ed37b5990c.jpg" },
{ name: "Gram Panchayat - Bhavnagar", slug: "bhavnagar", img: "https://as2.ftcdn.net/jpg/05/23/90/35/1000_F_523903501_jRu2AUW02OYe57LGCVJ9Ei3Wity8kxTl.webp" },
{ name: "Gram Panchayat - Devipur", slug: "devipur", img: "https://previews.123rf.com/images/jackmalipan/jackmalipan1205/jackmalipan120500369/13684892-river-village-scene-in-rural-cambodia.jpg" },
{ name: "Gram Panchayat - Rajnagar", slug: "rajnagar", img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Village_river.jpg" },
{ name: "Gram Panchayat - Rampur", slug: "rampur", img: "https://previews.123rf.com/images/kylieellway/kylieellway1504/kylieellway150400013/38714674-small-indian-village-school-in-bandhavgah-india.jpg" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-green-700 mb-10">
        🌿 Welcome to Gram Panchayat Network
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore your local Panchayat, view members, news, gallery, and contact details. Click any Panchayat below to get started.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {panchayats.map((p) => (
          <div
            key={p.slug}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
            onClick={() => navigate(`/${p.slug}`)}
          >
            <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{p.name}</h2>
              <button
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Visit Panchayat →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
