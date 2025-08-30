export default function Members({ members }) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Panchayat Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              {/* Member Photo (optional, fallback to initials if no photo) */}
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-100 shadow"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-green-200 flex items-center justify-center text-2xl font-bold mb-4">
                  {m.name.charAt(0)}
                </div>
              )}

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800">{m.name}</h3>

              {/* Role */}
              <p className="text-green-600 font-medium mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
