import { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { journeyPins, journeyRoute } from "../data/journey";

function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (positions.length === 0) return;
    map.fitBounds(L.latLngBounds(positions), { padding: [48, 48], maxZoom: 4 });
  }, [map, positions]);
  return null;
}

function createPinIcon(active: boolean) {
  return L.divIcon({
    className: "",
    html: `<div class="journey-pin${active ? " journey-pin--active" : ""}" aria-hidden="true"><span class="journey-pin__dot"></span><span class="journey-pin__tail"></span></div>`,
    iconSize: [24, 32],
    iconAnchor: [12, 32],
  });
}

type JourneyMapCanvasProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

export function JourneyMapCanvas({ activeId, onSelect }: JourneyMapCanvasProps) {
  return (
    <MapContainer
      center={[30, 20]}
      zoom={2}
      scrollWheelZoom={false}
      className="journey-map-canvas h-full min-h-[360px] w-full rounded-xl"
      attributionControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds positions={journeyRoute} />
      <Polyline
        positions={journeyRoute}
        pathOptions={{
          color: "#a67c00",
          weight: 2.5,
          opacity: 0.65,
          dashArray: "8 10",
        }}
      />
      {journeyPins.map((pin) => {
        const isActive = pin.id === activeId;
        return (
          <Marker
            key={pin.id}
            position={[pin.lat, pin.lng]}
            icon={createPinIcon(isActive)}
            eventHandlers={{
              click: () => onSelect(pin.id),
              mouseover: () => onSelect(pin.id),
            }}
          />
        );
      })}
    </MapContainer>
  );
}
