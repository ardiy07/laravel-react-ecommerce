import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { APP_DEBUG } from '../../../../config/env';

// Define SVG as a string
const svgIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="#00AA5B" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.24A7.67 7.67 0 0 0 4.25 10c0 7.36 7.08 11.48 7.38 11.66a.81.81 0 0 0 .74 0c.3-.18 7.38-4.3 7.38-11.66A7.669 7.669 0 0 0 12 2.24ZM12 13a3 3 0 1 1 0-6.001A3 3 0 0 1 12 13Z"/>
</svg>
`;

// Convert SVG to Data URL
const svgToDataUrl = (svg) => `data:image/svg+xml;base64,${btoa(svg)}`;

function PinpointLokasi({ lat, long, village, district, regencie, province, onPositionChange }) {
    const [position, setPosition] = useState([lat, long]);
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    const MapEvents = () => {
        const map = useMapEvents({
            move: () => {
                if (markerRef.current) {
                    const center = map.getCenter();
                    markerRef.current.setLatLng(center);
                }
            },
            moveend: () => {
                const center = map.getCenter();
                setPosition([center.lat, center.lng]);
                if (onPositionChange) {
                    onPositionChange([center.lat, center.lng]);
                }
            },
        });

        useEffect(() => {
            mapRef.current = map;
        }, [map]);

        return null;
    };

    const svgDataUrl = svgToDataUrl(svgIcon);

    return (
        <div className='flex flex-col'>
            <h3 className='font-bold text-xl tracking-tight'>Tentukan titik pinpoint lokasi kamu</h3>
            <div className='bg-white rounded-2xl overflow-hidden flex flex-col mt-3 border shadow'>
                <div className='w-full'>
                    <MapContainer
                        center={position}
                        zoomControl={false}
                        zoom={15}
                        style={{ height: "40vh", width: "100%" }}
                        whenCreated={map => mapRef.current = map}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <MapEvents />
                        <Marker
                            ref={markerRef}
                            position={position}
                            icon={L.icon({ iconUrl: svgDataUrl, iconSize: [50, 50], iconAnchor: [25, 50] })}
                        >
                            <Popup>
                                Lokasi Anda
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className='flex flex-col px-5 py-4'>
                    <h3 className='font-bold text-lg'>{village}</h3>
                    <p className='text-gray-600 font-medium'>{`${district}, ${regencie}, ${province}`}</p>
                </div>
            </div>

            <div className='mt-5 bg-green-50 border border-green-300 rounded-lg py-3 px-5 tracking-tight'>
                <p className='font-bold text-gray-800'>Nama lokasi tidak sesuai alamatmu?</p>
                <p className='text-gray-700'>Tenang, kamu akan isi alamat nanti. Pastikan pinpoint sudah sesuai dulu.</p>
            </div>
        </div>
    );
}

export default PinpointLokasi;
