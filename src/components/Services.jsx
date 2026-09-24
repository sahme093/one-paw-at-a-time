import { salon } from "../config.js";

function ServiceList({ title, items }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      {items.map((item) => (
        <div className="service-row" key={item.name}>
          <span className="service-row__name">{item.name}</span>
          {salon.showPrices && (
            <span className="service-row__price">from ${item.price}</span>
          )}
        </div>
      ))}
    </div>
  );
}

const SPECIES_TITLES = { dog: "Dogs", cat: "Cats" };

// One card per `group` (or per species when items have no group), in the
// order they first appear in config.
function groupServices() {
  const groups = new Map();
  for (const [species, items] of Object.entries(salon.services)) {
    for (const item of items) {
      const title = item.group ?? SPECIES_TITLES[species];
      if (!groups.has(title)) groups.set(title, []);
      groups.get(title).push(item);
    }
  }
  return [...groups];
}

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container section-inner">
        <div className="section-heading">
          <div className="section-heading__text">
            <span className="section-label">Services</span>
            <h2 className="section-title">From a quick nail trim to the full spa day</h2>
          </div>
        </div>

        <div className="service-groups">
          {groupServices().map(([title, items]) => (
            <ServiceList key={title} title={title} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
}
