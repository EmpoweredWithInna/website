import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { LOCAL_SERVICE_PAGE, SERVICE_AREAS, SITE } from "../lib/site";

export function CentralTexasServiceArea() {
  return (
    <section
      className="local-service-section"
      aria-labelledby="central-texas-heading"
    >
      <div className="section-wrap local-service-card">
        <div className="local-service-copy">
          <p className="local-service-kicker">
            <MapPin size={14} aria-hidden="true" /> Local perspective, virtual
            care
          </p>
          <h2 id="central-texas-heading">
            Virtual nutrition support, <em>rooted in Central Texas.</em>
          </h2>
          <p>
            {SITE.practitioner.name} works virtually with clients throughout the
            Buda–Kyle–Austin–San Marcos corridor, bringing personalized
            functional nutrition support directly to your home.
          </p>
          <Link href={LOCAL_SERVICE_PAGE} className="local-service-link">
            Explore Central Texas support
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="local-service-places">
          <span>Core service area</span>
          <ul aria-label="Cities served">
            {SERVICE_AREAS.map((area) => (
              <li key={area.name}>
                <strong>{area.name}</strong>
                <small>{area.region}</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
