import logo1 from '../assets/header.jpg'
export default function Header({ name, logo, banner }) {
  return (
    <header className="relative w-full h-72 sm:h-96 flex items-center justify-center text-center">
      {/* Background Banner */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner || logo1})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-4">
        {/* Logo */}
        {logo && (
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="Panchayat Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg border-4 border-white"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-wide drop-shadow-lg">
          {name}
        </h1>

        {/* Tagline */}
        <p className="mt-3 text-lg sm:text-xl opacity-90">
          🌿 Working together for a better tomorrow
        </p>
      </div>
    </header>
  );
}
