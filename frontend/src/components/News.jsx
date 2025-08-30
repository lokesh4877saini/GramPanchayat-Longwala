export default function News({ news }) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          News & Updates
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, i) => (
            <div
              key={i}
              className="bg-white w-full h-60 rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition"
            >
              {/* Title */}
              <div>
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>

              {/* Description */}
              <p className="text-gray-700 mt-3 line-clamp-3">{item.desc}</p>

              {/* Read More Button */}
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition self-start">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
