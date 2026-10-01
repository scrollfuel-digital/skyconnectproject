import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import './LocationMap.css'

const SKYCONNECT = { lat: 21.099812242389685, lng: 79.06337550973734 }
const SKYCONNECT_ADDRESS = 'Skyconnect, Wardha Road, Jaiprakash Nagar, Nagpur – 440025'

const locations = [
  {
    id: 'taj-gateway',
    name: 'Hotel Taj Gateway',
    shortName: 'Hotel Taj Gateway',
    time: '3 min',
    category: 'Hotels',
    symbol: 'H',
    color: '#b9935a',
    lat: 21.10430495809791,
    lng: 79.05723717441619,
    address: 'Wardha Road, Nagpur',
    description: 'Premier luxury hotel and dining landmark located on Wardha Road.',
  },
  {
    id: 'westside',
    name: 'Westside',
    shortName: 'Westside',
    time: '3 min',
    category: 'Shopping',
    symbol: 'S',
    color: '#b9935a',
    lat: 21.10422201975818,
    lng: 79.06760458459217,
    address: 'Wardha Road, Jaiprakash Nagar, Nagpur',
    description: 'Premier fashion and lifestyle retail destination close to Skyconnect.',
  },
  {
    id: 'jp-metro',
    name: 'Jaiprakash Nagar Metro',
    shortName: 'Jaiprakash Nagar Metro',
    time: '3 min',
    category: 'Transit',
    symbol: 'M',
    color: '#8f6e3b',
    lat: 21.104301344043012,
    lng: 79.06816854474287,
    address: 'Wardha Road, Jaiprakash Nagar, Nagpur',
    description: 'Aqua Line metro station connecting central Nagpur and the airport.',
  },
  {
    id: 'ginger-hotel',
    name: 'Ginger Hotel',
    shortName: 'Ginger Hotel',
    time: '3 min',
    category: 'Hotels',
    symbol: 'H',
    color: '#b9935a',
    lat: 21.10415175415001,
    lng: 79.06707455737059,
    address: 'Wardha Road, Jaiprakash Nagar, Nagpur',
    description: 'Convenient business hotel along the Wardha Road commercial corridor.',
  },
  {
    id: 'trends',
    name: 'Trends Shopping',
    shortName: 'Trends',
    time: '3 min',
    category: 'Shopping',
    symbol: 'S',
    color: '#8f6e3b',
    lat: 21.104909758681863,
    lng: 79.06799736059254,
    address: 'Wardha Road, Jaiprakash Nagar, Nagpur',
    description: 'Popular fashion shopping store located right on Wardha Road.',
  },
  {
    id: 'chhatrapati-sq',
    name: 'Chhatrapati Square',
    shortName: 'Chhatrapati Square',
    time: '5 min',
    category: 'Landmark',
    symbol: 'L',
    color: '#b9935a',
    lat: 21.110802647394806,
    lng: 79.07007707916647,
    address: 'Ring Road Junction, Wardha Road, Nagpur',
    description: 'A major landmark junction connecting Ring Road and Wardha Road.',
  },
  {
    id: 'pride-hotel',
    name: 'Pride Hotel',
    shortName: 'Pride Hotel',
    time: '5 min',
    category: 'Hotels',
    symbol: 'H',
    color: '#8f6e3b',
    lat: 21.087178305075383,
    lng: 79.06435199380438,
    address: 'Wardha Road, Sonegaon, Nagpur',
    description: 'Luxury hotel and banquet venue near the airport corridor.',
  },
  {
    id: 'radisson',
    name: 'Radisson Blu Hotel',
    shortName: 'Radisson Blu',
    time: '4 min',
    category: 'Hotels',
    symbol: 'H',
    color: '#b9935a',
    lat: 21.106016153382154,
    lng: 79.06964423796536,
    address: 'Wardha Road, Vivekanand Nagar, Nagpur',
    description: '5-star hotel, fine dining, and convention facilities.',
  },
  {
    id: 'airport',
    name: 'Airport',
    shortName: 'Nagpur Airport',
    time: '5 min',
    category: 'Transit',
    symbol: 'A',
    color: '#8f6e3b',
    lat: 21.09038711427662,
    lng: 79.05480859563654,
    address: 'Sonegaon, Nagpur',
    description: 'Dr. Babasaheb Ambedkar International Airport.',
  },
]

export default function LocationSection() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  const originQuery = `${SKYCONNECT.lat},${SKYCONNECT.lng}`
  const destQuery = selectedLocation ? `${selectedLocation.lat},${selectedLocation.lng}` : `${SKYCONNECT.lat},${SKYCONNECT.lng}`

  const googleMapEmbedUrl = `https://maps.google.com/maps?saddr=${originQuery}&daddr=${destQuery}&z=15&t=&ie=UTF8&output=embed`

  const directionsExternalUrl = selectedLocation
    ? `https://www.google.com/maps/dir/?api=1&origin=${originQuery}&destination=${selectedLocation.lat},${selectedLocation.lng}`
    : `https://www.google.com/maps/dir/?api=1&origin=${originQuery}&destination=${destQuery}`

  return (
    <main id="location" className="location-section">
      <div className="location-container">
        
        {/* SECTION HEADER */}
        <header className="location-heading flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Connectivity & Location</p>
            <h1>Everything Around You</h1>
            <p className="intro">
              Explore nearby hubs and directions starting directly from <strong>Skyconnect, Wardha Road, Jaiprakash Nagar, Nagpur</strong>.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={directionsExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#966042] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0F1E36] transition-colors shadow-sm"
            >
              <span>GET DIRECTIONS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* MAIN LAYOUT GRID */}
        <div className="location-layout">
          
          {/* SIDEBAR NEARBY LOCATIONS LIST */}
          <aside className="nearby-panel" aria-label="Nearby destinations">
            <div className="nearby-heading">
              <div>
                <span className="eyebrow">Explore the neighbourhood</span>
                <h2>Nearby places</h2>
              </div>
              <span className="place-count">{locations.length} places</span>
            </div>

            <div className="place-list">
              {locations.map((location) => {
                const active = selectedLocation?.id === location.id
                return (
                  <button
                    type="button"
                    key={location.id}
                    className={`place-item${active ? ' is-active' : ''}`}
                    onClick={() => setSelectedLocation(location)}
                    aria-pressed={active}
                  >
                    <span className="place-symbol" style={{ '--place-color': location.color }}>{location.symbol}</span>
                    <span className="place-copy">
                      <span className="place-title-row">
                        <span className="place-name">{location.shortName}</span>
                        <span className="place-time">{location.time}</span>
                      </span>
                      <span className="place-address">{location.address}</span>
                    </span>
                    <span className="place-chevron" aria-hidden="true">›</span>
                  </button>
                )
              })}
            </div>

            <div className="origin-note">
              <span className="origin-dot" /> Routes start at <strong>Skyconnect</strong>
            </div>
          </aside>

          {/* MAIN MAP PANEL - GOOGLE MAP IFRAME ONLY */}
          <section className="map-panel" aria-label="Neighbourhood map">
            <div className="relative w-full h-full min-h-[440px] bg-stone-200">
              <iframe
                key={selectedLocation?.id}
                title={`Skyconnect Google Map - ${selectedLocation?.name}`}
                src={googleMapEmbedUrl}
                className="w-full h-full border-0 filter saturate-[0.95]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>

      </div>
    </main>
  )
}
