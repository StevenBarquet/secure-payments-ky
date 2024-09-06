'use client'; // This is a client component 👈🏽
import { vanillaTRCP } from 'src/app/_querys/config/vanilaClient';
import styles from './Home.module.scss';
import { Button } from 'antd';

export function Home() {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
    const fetchExample = async () => await vanillaTRCP.examples.hello.query();
    // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
      <div className={`${styles.Home}`}>
        <h2>Hello world</h2>
        <Button type="primary" onClick={fetchExample}>Primary</Button>
      </div>
  );
}
