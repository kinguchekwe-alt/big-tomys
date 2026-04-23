"use client";

export default function Contact() {
  return (
    <div className="bg-neutral-50 text-black min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-4 bg-black text-white">
        <h1 className="text-2xl font-bold">BIG TOMY’S</h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/menu" className="hover:text-yellow-400">Menu</a>
          <a href="/contact" className="text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="text-center py-10 bg-yellow-400">
        <h2 className="text-4xl font-bold">Visit Us</h2>
        <p className="mt-2 text-lg">Dine-in or take it to-go</p>
      </section>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8">

        {/* INFO */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Location & Hours</h3>

          <p>📍 11289 W Pico Blvd<br />Los Angeles, CA 90064</p>

          <p>
            📞 <a href="tel:+13104790601" className="text-blue-600 underline">
              (310) 479-0601
            </a>
          </p>

          <div>
            <h4 className="font-semibold mt-4">Hours</h4>
            <p>Open Daily: 7:00 AM – 12:00 AM</p>
          </div>

          <div>
            <h4 className="font-semibold mt-4">Service Options</h4>
            <p>Outdoor seating · Takeout available · No reservations</p>
          </div>
        </div>

        {/* MAP */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps?q=11289+W+Pico+Blvd+Los+Angeles+CA&output=embed"
            className="w-full h-full border-0 rounded"
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* CTA */}
      <section className="text-center py-10">
        <a 
          href="tel:+13104790601"
          className="bg-black text-white px-8 py-4 rounded text-lg hover:bg-gray-800"
        >
          Call to Order
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-6">
        <p>© 2026 BIG TOMY’S</p>
      </footer>

    </div>
  );
}