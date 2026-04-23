"use client";

export default function Menu() {
  return (
    <div className="bg-neutral-50 text-black min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-4 bg-black text-white">
        <h1 className="text-2xl font-bold">BIG TOMY’S</h1>
        <div className="space-x-6">
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/menu" className="text-yellow-400">Menu</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* HEADER */}
      <section className="text-center py-10 bg-yellow-400">
        <h2 className="text-4xl font-bold">Our Menu</h2>
        <p className="mt-2 text-lg">Classic diner favorites, made fresh daily</p>
      </section>

      {/* MENU CONTENT */}
      <div className="max-w-5xl mx-auto p-6 space-y-10">

        {/* BURGERS */}
        <section>
          <h3 className="text-2xl font-bold mb-4 border-b-2 border-black inline-block">
            Burgers
          </h3>

          <div className="space-y-4">
            <MenuItem name="Classic Cheeseburger" price="$8.99" desc="Beef patty, cheddar, lettuce, tomato, house sauce" />
            <MenuItem name="Bacon Double" price="$11.49" desc="Two patties, bacon, American cheese, grilled onions" />
            <MenuItem name="BBQ Burger" price="$10.99" desc="BBQ sauce, onion rings, cheddar cheese" />
          </div>
        </section>

        {/* SIDES */}
        <section>
          <h3 className="text-2xl font-bold mb-4 border-b-2 border-black inline-block">
            Sides
          </h3>

          <div className="space-y-4">
            <MenuItem name="Fries" price="$3.99" desc="Crispy golden fries" />
            <MenuItem name="Onion Rings" price="$4.99" desc="Beer-battered, house-made" />
            <MenuItem name="Chili Cheese Fries" price="$6.99" desc="Loaded with chili & melted cheese" />
          </div>
        </section>

        {/* SHAKES */}
        <section>
          <h3 className="text-2xl font-bold mb-4 border-b-2 border-black inline-block">
            Shakes
          </h3>

          <div className="space-y-4">
            <MenuItem name="Vanilla Shake" price="$5.49" desc="Classic hand-spun vanilla" />
            <MenuItem name="Chocolate Shake" price="$5.49" desc="Rich chocolate flavor" />
            <MenuItem name="Strawberry Shake" price="$5.49" desc="Fresh strawberry blend" />
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-6 mt-10">
        <p>📍 123 Main St, Los Angeles, CA</p>
        <p>📞 (310) 555-1234</p>
      </footer>

    </div>
  );
}

/* COMPONENT */
function MenuItem({ name, price, desc }: { name: string; price: string; desc: string }) {
  return (
    <div className="flex justify-between items-start border-b pb-2">
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
      <span className="font-bold">{price}</span>
    </div>
  );
}