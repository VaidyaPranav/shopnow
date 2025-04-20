let Footer = () => {
  return (
    <>
      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-section">
            <h4>ShopNow</h4>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/press">Press</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/shipping">Shipping</a>
              </li>
              <li>
                <a href="/returns">Returns</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Shop</h4>
            <ul>
              <li>
                <a href="/men">Men</a>
              </li>
              <li>
                <a href="/women">Women</a>
              </li>
              <li>
                <a href="/kids">Kids</a>
              </li>
              <li>
                <a href="/home-living">Home & Living</a>
              </li>
              <li>
                <a href="/beauty">Beauty</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Follow Us</h4>
            <ul class="social-links">
              <li>
                <a href="https://facebook.com/ShopNow">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/ShopNow">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com/ShopNow">Instagram</a>
              </li>
              <li>
                <a href="https://pinterest.com/ShopNow">Pinterest</a>
              </li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Newsletter</h4>
            <form class="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
            <p>
              Subscribe to our newsletter for the latest updates and offers.
            </p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 ShopNow. All rights reserved.</p>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/sitemap">Sitemap</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
