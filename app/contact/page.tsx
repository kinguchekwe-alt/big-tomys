import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <section className="page-hero">
        <div className="wrap">
          <h1>Contact &amp; Order</h1>
          <p>
            Call ahead, check the map for directions, or swing by the Sawtelle location —
            dine-in or take it to go.
          </p>
        </div>
      </section>
      <div className="checker-strip"></div>

      <section className="contact-loc" id="sawtelle">
        <div className="wrap two-col">
          <div>
            <span className="tag tag-shop" style={{ marginBottom: 10 }}>
              Sawtelle
            </span>
            <h2>Location &amp; Hours</h2>
            <table className="hours-table">
              <tbody>
                <tr>
                  <td>Address</td>
                  <td>
                    11289 W Pico Blvd
                    <br />
                    Los Angeles, CA 90064
                  </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>
                    <a href="tel:+13104790601">(310) 479-0601</a>
                  </td>
                </tr>
                <tr>
                  <td>Hours</td>
                  <td>Open Daily: 5:00 AM – 12:00 AM</td>
                </tr>
                <tr>
                  <td>Service</td>
                  <td>Outdoor seating · Takeout · No reservations</td>
                </tr>
              </tbody>
            </table>

            <div className="order-options">
              <a className="order-option" href="tel:+13104790601">
                <span>
                  <span className="option-name">Call to Order</span>
                  <br />
                  <span className="option-sub">Dine-in or takeout, ready when you arrive</span>
                </span>
                <span className="option-arrow">→</span>
              </a>
              <a
                className="order-option"
                href="https://www.yelp.com/biz/big-tomys-los-angeles"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <span className="option-name">Read Reviews on Yelp</span>
                  <br />
                  <span className="option-sub">See what the neighborhood is saying</span>
                </span>
                <span className="option-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              title="Map of Big Tomy's, Sawtelle location"
              src="https://www.google.com/maps?q=11289+W+Pico+Blvd,+Los+Angeles,+CA+90064&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="lunch-band band-yellow">
        <div className="wrap">
          <div>
            <h2>Prefer to see the menu first?</h2>
            <p>Charbroiled burgers, Mexican favorites, breakfast and more.</p>
          </div>
          <Link className="btn btn-outline-light" href="/menu">
            View Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
