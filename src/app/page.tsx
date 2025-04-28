import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center p-8 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Handy James</h1>
        <p className="text-lg md:text-2xl mb-6">
          Reliable repairs. Quality craftsmanship.
        </p>
        <div className="flex gap-4">
          <a
            href="tel:1234567890"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Call Now
          </a>
          <a
            href="mailto:jamesqin14@gmail.com"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Plumbing Repairs</h3>
            <p>Fixing leaks, replacing faucets, unclogging drains, and more.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Drywall & Painting</h3>
            <p>Patch holes, smooth walls, and add a fresh coat of paint.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Home Repairs</h3>
            <p>Doors, windows, fixtures, fences — no job too small.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Assembly Services</h3>
            <p>
              Furniture, shelves, playgrounds — we'll put it together right.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-12 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto">
          Handy James is committed to helping homeowners with trusted, quality
          repairs. No project is too small — your satisfaction is our priority!
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-lg">
            <strong>Email:</strong> jamesqin14@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-auto">
        &copy; 2025 Handy James. All rights reserved.
      </footer>
    </main>
  );
}
