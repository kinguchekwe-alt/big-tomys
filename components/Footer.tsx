import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span className="shout">BIG TOMY&apos;S</span>
            </div>
            <p>American. Mexican. Charbroiled burgers. A West LA landmark on the corner of Pico and Sawtelle.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/contact">Location &amp; Hours</Link></li>
            </ul>
          </div>
          <div>
            <h4>Sawtelle</h4>
            <ul>
              <li>11289 W Pico Blvd</li>
              <li>Los Angeles, CA 90064</li>
              <li><a href="tel:+13104790601">(310) 479-0601</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow &amp; Review</h4>
            <ul>
              <li>
                <a href="https://www.yelp.com/biz/big-tomys-los-angeles" target="_blank" rel="noopener noreferrer">
                  Read our reviews on Yelp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Big Tomy&apos;s</span>
          <span>Prices subject to change.</span>
        </div>
      </div>
    </footer>
  );
}
