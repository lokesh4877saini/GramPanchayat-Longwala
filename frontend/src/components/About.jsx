export default function About({ about }) {
    return (
      <section className="max-w-5xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">About Panchayat</h2>
        <p className="text-gray-700 leading-relaxed">{about}</p>
      </section>
    );
  }
  