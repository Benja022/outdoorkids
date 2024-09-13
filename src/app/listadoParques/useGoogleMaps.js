import { useState, useEffect } from 'react';

const useGoogleMaps = (apiKey) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
            setLoaded(true);  // La API ya está cargada
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            setLoaded(true);  // Indicar que la API está cargada
        };

        document.head.appendChild(script);

        return () => {
            // Limpiar el script cuando se desmonta el componente si es necesario
            document.head.removeChild(script);
        };
    }, [apiKey]);

    return loaded;
};

export default useGoogleMaps;
