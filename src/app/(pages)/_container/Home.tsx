'use client'; // This is a client component 👈🏽
import { vanillaTRCP } from 'src/app/_querys/config/vanilaClient';
import styles from './Home.module.scss';
import axios from 'axios';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

export function Home() {
  // -----------------------CONSTS, HOOKS, STATES
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchExample();
  }, []);
  // -----------------------MAIN METHODS
  const fetchExample = async () => {
    const response = await axios.get('https://api.ipify.org?format=json');
    const data = response.data;
    vanillaTRCP.examples.hello.query(data.ip as string);
    setIsLoading(false);
  };

  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className={`${styles.Home}`}>
      {isLoading ? (
        <Icon icon="mingcute:loading-fill" />
      ) : (
        <h2>Something went wrong :C</h2>
      )}
    </div>
  );
}
