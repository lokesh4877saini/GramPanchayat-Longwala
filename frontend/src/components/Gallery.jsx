export default function Gallery({ gallery }) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">
          Village Moments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              {/* Image */}
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
