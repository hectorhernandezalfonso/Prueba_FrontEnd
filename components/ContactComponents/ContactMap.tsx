import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';

const markerIconUrl = '/path-to-custom-marker-icon.png'; // You may update this path
const markerShadowUrl = '/path-to-custom-shadow-icon.png'; // Update if needed

const containerStyle = 'w-full h-[500px] rounded-xl shadow-lg border border-gray-200';

const MapComponent = () => {
  const [position, setPosition] = useState({ lat: 4.638193, lng: -74.084046 });
  const [DefaultIcon, setDefaultIcon] = useState<any>(null);

  useEffect(() => {
    // Dynamically import Leaflet and set the marker icons
    import('leaflet').then(L => {
      const defaultIcon = L.icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      L.Marker.prototype.options.icon = defaultIcon;
      setDefaultIcon(defaultIcon);
    });
  }, []);

  return (
    <div className={containerStyle}>
      <MapContainer center={[position.lat, position.lng]} zoom={16} scrollWheelZoom={true} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {DefaultIcon && (
          <Marker position={[position.lat, position.lng]}>
            <Popup>
              Universidad Nacional de Colombia <br /> Main campus, Bogotá.
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
