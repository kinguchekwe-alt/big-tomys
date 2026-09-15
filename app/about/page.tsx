export default function About() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap" style={{ textAlign: "center" }}>
          <img
            src="/images/about-hero-exterior.jpg"
            alt="Big Tomy's storefront on the corner of Pico and Sawtelle"
            className="about-hero-photo"
          />
          <h1>Iconic, Casual, Comfort Food Spot</h1>
          <p>Big flavor, giant portions, and a family that treats you like one.</p>
        </div>
      </section>
      <div className="checker-strip"></div>

      <section className="section-paper">
        <div className="wrap story-copy">
          <h2>Our Story</h2>
          <p>
            Welcome to <strong>Big Tomy&apos;s</strong>, a West Los Angeles landmark serving up
            big flavor, giant portions, and classic comfort food since day one. Located at the
            corner of <strong>Pico and Sawtelle</strong>, we have proudly anchored our
            neighborhood as the go-to spot for locals, late-night crowds, and anyone craving an
            authentic, no-nonsense diner experience.
          </p>

          <h2>Built on Community</h2>
          <p>
            Big Tomy&apos;s is more than just a food stand—we are a family. When an unexpected
            fire put us on a temporary pause, our owner, <strong>John Levanas</strong>, committed
            to supporting our dedicated staff from his own pocket until we could rebuild and
            reopen our doors. That deep bond with our team and our neighborhood defines
            everything we do. We treat our community like family because you have always treated
            us like one.
          </p>

          <h2>Big Portions, Bold Flavors</h2>
          <p>
            We believe in honest food made to satisfy. Whether you are stopping by for a
            legendary <strong>Chili Cheese Burger</strong>, a towering plate of{" "}
            <strong>Pastrami Chili Fries</strong>, an early morning{" "}
            <strong>Breakfast Burrito</strong>, or a nostalgic splash of{" "}
            <strong>Orange Bang</strong>, we make sure nobody leaves hungry. We pair premium,
            comforting flavors with budget-friendly prices and the unmatched warmth of a classic
            neighborhood staple.
          </p>
          <p>
            Stop by, pull up a seat, and discover why Big Tomy&apos;s remains a beloved West L.A.
            tradition.
          </p>
        </div>
      </section>

      <section className="section-warm">
        <div className="wrap">
          <div className="section-head center">
            <h2>Around the Shop</h2>
            <p>A look inside the Sawtelle landmark.</p>
          </div>
          <div className="photo-grid">
            <img src="/images/interior-sign.jpg" alt="The Big Tomy's sign inside the restaurant" />
            <img src="/images/interior-nice.jpg" alt="Dining area inside Big Tomy's" />
            <img src="/images/kitchen.jpg" alt="The kitchen at Big Tomy's" />
          </div>
        </div>
      </section>
    </div>
  );
}
