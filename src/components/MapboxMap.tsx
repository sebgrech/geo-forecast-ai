import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    mapboxgl: any;
  }
}

interface MapboxMapProps {
  id?: string;
  className?: string;
  interactive?: boolean;
  onMapLoad?: (map: any) => void;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ 
  id = 'riq-map', 
  className = '', 
  interactive = true,
  onMapLoad 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Check if mapboxgl is available
    if (typeof window !== 'undefined' && window.mapboxgl) {
      const mapboxgl = window.mapboxgl;
      
      mapboxgl.accessToken = 'pk.eyJ1IjoiYXprYWJhciIsImEiOiJjbWVyNGowbHowMmNlMnJzYTcxcWZid2U3In0.OdRWeGaLdRMxp_c5e4frJQ';
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/azkabar/cmer72syv019201qwdpqc8pcv',
        center: [-3, 54.5],
        zoom: 4.5,
        pitch: 0,
        interactive: interactive,
        attributionControl: false
      });

      if (interactive) {
        map.current.addControl(
          new mapboxgl.NavigationControl({ visualizePitch: false }), 
          'bottom-right'
        );
      }

      if (onMapLoad) {
        map.current.on('load', () => onMapLoad(map.current));
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [interactive, onMapLoad]);

  return (
    <div 
      ref={mapContainer} 
      id={id}
      className={`w-full h-full rounded-2xl overflow-hidden ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
};

export default MapboxMap;