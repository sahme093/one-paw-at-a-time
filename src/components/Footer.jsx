import { salon } from "../config.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        {/* width/height (matching the real 800x800 file) let the browser
            reserve this box's height before the image loads, so nothing
            below it jumps around — the CSS width:200px still wins visually. */}
        <img
          src="/assets/logo.webp"
          alt={salon.name}
          className="site-footer__logo"
          loading="lazy"
          width={800}
          height={800}
        />
        <div className="site-footer__meta">
          <span>{salon.hoursSummary}</span>
          <span>
            {salon.address.line1}, {salon.address.city}, {salon.address.state} {salon.address.zip} ·{" "}
            {salon.phoneDisplay}
          </span>
        </div>
      </div>
    </footer>
  );
}
