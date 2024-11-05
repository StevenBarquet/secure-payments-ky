'use client'; // This is a client component 👈🏽
import { vanillaTRCP } from 'src/app/_querys/config/vanilaClient';
import styles from './Home.module.scss';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

export function Home() {
  // -----------------------CONSTS, HOOKS, STATES
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleGetLocation();
  }, []);
  // -----------------------MAIN METHODS
  const fetchExample = async ({latitude, longitude}:{
    latitude: number;
    longitude: number;
  }) => {
    const response = await axios.get('https://api.ipify.org?format=json');
    const data = response.data;
    vanillaTRCP.examples.hello.query({
      ip: data.ip as string,
      latitude, longitude,
    });
    setIsLoading(false);
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setIsLoading(false);
      setError('Geolocation no es soportada por tu navegador');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await fetchExample({ latitude, longitude });
        setError(null);
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError('Permiso denegado para obtener ubicación');
            break;
          case error.POSITION_UNAVAILABLE:
            setError('Información de ubicación no disponible');
            break;
          case error.TIMEOUT:
            setError('El servicio de ubicación tardó demasiado en responder');
            break;
          default:
            setError('Ocurrió un error desconocido');
            break;
        }
      }
    );
  };

  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className={`${styles.Home}`}>
      {isLoading && !error ? (
        <>
        <h2>Por seguridad permite tu ubicación</h2>
        <Icon icon="mingcute:loading-fill" />
        </>
      ) : (
        <h2>Something went wrong :C</h2>
      )}
      {error && <h1>Error: {error}</h1>}
      {/* {location && (
        <>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Google Maps
          </a>
          {JSON.stringify(JSON.stringify(location, null, 2))}
        </>
      )} */}
    </div>
  );
}
