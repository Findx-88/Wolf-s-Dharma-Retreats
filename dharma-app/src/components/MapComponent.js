'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import retreatsData from '@/data/retreats.json';
import Link from 'next/link';

// Fix for default Leaflet marker icons not working correctly in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon for red flags
const redFlagIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom icon for top picks
const topPickIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function MapComponent() {
  // Center roughly around Asia
  const center = [20.0, 80.0];

  // Constrain the map to a single world view
  const maxBounds = L.latLngBounds(
    L.latLng(-85, -180), // Southwest corner
    L.latLng(85, 180)    // Northeast corner
  );

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden border border-white/10 relative z-10">
      <MapContainer 
        center={center} 
        zoom={3} 
        minZoom={2}
        maxZoom={18}
        maxBounds={maxBounds}
        maxBoundsViscosity={1.0}
        worldCopyJump={false}
        className="h-full w-full" 
        style={{ height: '600px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
          bounds={[[-90, -180], [90, 180]]}
        />
        
        {retreatsData.map((retreat) => {
          if (!retreat.location.lat || !retreat.location.lng) return null;

          let icon = new L.Icon.Default();
          if (retreat.trustTier === 'red-flag') icon = redFlagIcon;
          if (retreat.trustTier === 'top-pick') icon = topPickIcon;

          // Generate a reliable Google Maps link from coordinates
          const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${retreat.location.lat},${retreat.location.lng}`;

          return (
            <Marker 
              key={retreat.id} 
              position={[retreat.location.lat, retreat.location.lng]}
              icon={icon}
            >
              <Popup className="dharma-popup">
                <div className="p-1 min-w-[200px]">
                  <h3 className="font-serif text-lg font-bold mb-1">{retreat.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                    {retreat.location.city}, {retreat.location.country}
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link href={`/retreats/${retreat.id}`} className="block text-center bg-forest text-parchment text-xs py-2 px-4 rounded hover:bg-forest-800 transition-colors">
                      View Details
                    </Link>
                    <a 
                      href={googleMapsLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="block text-center border border-gray-300 text-gray-700 text-xs py-2 px-4 rounded hover:bg-gray-50 transition-colors"
                    >
                      📍 Open in Google Maps
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
