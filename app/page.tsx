import Link from "next/link";

const FAN_FAVORITES = [
  {
    name: "Double Cheese Burger + Fries",
    price: "from $8.39",
    photo: "/images/double-cheese-burger.jpg",
    alt: "Double cheese burger with a side of fries",
  },
  {
    name: "Chili Dog",
    price: "$5.99",
    photo: "/images/chili-dog.jpg",
    alt: "Chili dog topped with onion and tomato",
  },
  {
    name: "Pastrami Sandwich",
    price: "Ask for pricing",
    photo: "/images/pastrami-sandwich.jpg",
    alt: "Pastrami sandwich served with zucchini fries",
  },
  {
    name: "Onion Rings",
    price: "$5.99",
    photo: "/images/onion-rings.jpg",
    alt: "Basket of crispy onion rings",
  },
  {
    name: "Asada Fries",
    price: "$12.99",
    photo: "/images/asada-fries.jpg",
    alt: "Carne asada fries topped with guacamole and cheese",
  },
];

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="wrap">
          <h1>
            American. Mexican. <span className="hl">Charbroiled Burgers.</span>
          </h1>
          <p className="lead-sub">
            A West LA landmark on the corner of Pico and Sawtelle — home of the legendary Chili
            Cheese Burger, Pastrami Chili Fries and classic comfort food, since day one.
          </p>
          <div className="hero-image">
            <img src="/images/hero-exterior.jpg" alt="Big Tomy's storefront with its iconic yellow sign" />
          </div>
          <div className="hero-actions">
            <Link className="btn btn-fill" href="/menu">
              View Menu
            </Link>
            <Link className="btn btn-dark" href="/contact">
              Order Now
            </Link>
          </div>
        </div>
      </section>
      <div className="checker-strip"></div>

      <section className="section-paper">
        <div className="wrap">
          <div className="meaning-block">
            <p className="script-head">More than a burger stand.</p>
            <p>
              Big Tomy&apos;s is more than just a food stand—we are a family. We treat our
              community like family because you have always treated us like one.
            </p>
            <Link className="btn btn-outline-light" href="/about" style={{ marginTop: 14 }}>
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      <section className="section-warm">
        <div className="wrap">
          <div className="section-head center">
            <h2>Fan Favorites</h2>
            <p>The dishes our Sawtelle regulars keep coming back for.</p>
          </div>
          <div className="dish-grid">
            {FAN_FAVORITES.map((dish) => (
              <div className="dish-card" key={dish.name}>
                <img className="dish-photo" src={dish.photo} alt={dish.alt} />
                <div className="dish-info">
                  <h3>{dish.name}</h3>
                  <p className="price">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head center">
            <h2>Find Us</h2>
            <p>One legendary stop on the Westside — dine in, take out, or call ahead.</p>
          </div>
          <div className="location-grid single">
            <div className="location-card">
              <span className="neighborhood">Sawtelle</span>
              <address>
                11289 W Pico Blvd
                <br />
                Los Angeles, CA 90064
              </address>
              <span className="phone">(310) 479-0601</span>
              <p className="blurb">Open Daily: 7:00 AM – 12:00 AM. Outdoor seating, takeout available, no reservations.</p>
              <div className="card-actions">
                <Link className="btn btn-outline btn-sm" href="/menu">
                  Menu
                </Link>
                <Link className="btn btn-outline btn-sm" href="/contact">
                  Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lunch-band band-yellow">
        <div className="wrap">
          <div>
            <h2>Ready to eat?</h2>
            <p>Big portions, bold flavors, budget-friendly prices.</p>
          </div>
          <Link className="btn btn-outline-light" href="/contact">
            Find Your Way Here
          </Link>
        </div>
      </section>
    </div>
  );
}
