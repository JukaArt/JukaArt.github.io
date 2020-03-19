import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Dashboard.css';

import { games } from 'scripts/data/games';

import Text from 'Atoms/Text/Text';
import Button from 'Atoms/Button/Button';

const Dashboard: React.SFC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Text tag="h1" weight="500" align="center" className={styles.title}>
          Welcome to Juka Playground
        </Text>
        <Text tag="h3" align="center">Choose the game</Text>
        <div className={styles.links}>
          {games.map(item => {
            const { title, route } = item;
            return (
              <Link key={route} to={route} className={styles.link}>
                <Button width="full" text={title} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;