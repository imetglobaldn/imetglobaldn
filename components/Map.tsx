"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MdLocationPin } from 'react-icons/md';

const CustomMap = () => {
    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const staticLocation = { lat: 28.5807, lng: 77.2024 };

    return (
        <MapContainer
            center={location ? location : staticLocation}
            zoom={15}
            style={{ height: '400px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                opacity={0.6}
            />
            <CustomMarker position={location ? location : staticLocation} />
        </MapContainer>
    );
};

const CustomMarker: React.FC<{ position: { lat: number; lng: number } }> = ({ position }) => {
    const map = useMap();

    useEffect(() => {
        if (position) {
            map.setView(position, map.getZoom());
        }
    }, [position, map]);

    return (
        <div
            style={{
                position: 'absolute',
                transform: 'translate(-50%, -100%)',
                left: `${map.project(position).x}px`,
                top: `${map.project(position).y}px`,
                pointerEvents: 'none', // Prevents clicks on this div
            }}
        >
            {/* Marker icon wrapped in a clickable div */}
            <div style={{ pointerEvents: 'auto' }}>
                <MdLocationPin style={{ fontSize: '30px', color: 'red' }} />
                {/* Popup without close button */}
                <Popup position={position} closeButton={false}>
                    <div className="flex items-center">
                        <MdLocationPin style={{ fontSize: '30px', color: 'red', marginRight: '5px' }} />
                        <span>imet Global</span>
                    </div>
                </Popup>
            </div>
        </div>
    );
};

export default CustomMap;


