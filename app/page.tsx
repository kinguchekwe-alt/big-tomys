"use client";

export default function Home() {
  return (
    <div className="bg-neutral-50 text-black">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-4 bg-black text-white">
        <h1 className="text-2xl font-bold tracking-wide">BIG TOMY’S</h1>
        <div className="space-x-6">
          <a href="/menu" className="hover:text-yellow-400">Menu</a>
          <a href="/about" className="hover:text-yellow-400">About</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section 
        className="h-[80vh] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550547660-d9450f859349')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="bg-black/60 p-8 rounded-lg">
          <h1 className="text-5xl font-extrabold mb-4">BIG TOMY’S</h1>
          <p className="text-xl mb-6">Classic American Burgers. Done Right.</p>
          
          <div className="space-x-4">
            <a href="/menu" className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-300">
              View Menu
            </a>
            <a href="tel:+13105551234" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Since 1985</h2>
        <p className="text-gray-700">
          BIG TOMY’S is your neighborhood diner serving up classic burgers, crispy fries, and hand-spun shakes.
        </p>
      </section>

      {/* FEATURES */}
      <section className="bg-yellow-400 text-black p-6 flex justify-around text-center font-semibold">
        <div>🍔 Fresh Burgers</div>
        <div>🥤 Handcrafted Shakes</div>
        <div>📍 Local Favorite</div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-6">
        <p>📍 123 Main St, Los Angeles, CA</p>
        <p>📞 (310) 555-1234</p>
        <p className="text-sm mt-2">© 2026 BIG TOMY’S</p>
      </footer>

    </div>
  );
}