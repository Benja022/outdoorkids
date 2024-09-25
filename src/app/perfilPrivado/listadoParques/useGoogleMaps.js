import { useState, useEffect } from "react";

const useGoogleMaps = (apiKey) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (
      typeof window.google === "object" &&
      typeof window.google.maps === "object"
    ) {
      setLoaded(true); // La API ya está cargada
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode?.removeChild(script);
      }
    };
  }, [apiKey]);

  return loaded;
};

export default useGoogleMaps;
