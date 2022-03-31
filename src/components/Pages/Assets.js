import React from 'react';
// import prices from './Prices';
import Card from '../Layout/Card';
import Asset from '../Layout/Custom/Asset';
import classes from './Assets.module.css';

const Assets = (props) => {
  const AssetsArray = [
    {
      assetName: 'BTC',
      accountName: 'elder',
      amount: 1,
      amountInUSD: 41000,
    },
    {
      assetName: 'ETH',
      accountName: 'elder',
      amount: 1,
      amountInUSD: 3800,
    },
  ];

  return (
    <ul className={classes.assets}>
      {AssetsArray.map((asset) => {
        return (
          <Card>
            <Asset
              name={asset.assetName}
              amount={asset.amount}
              price={asset.USDMultiplier}
            ></Asset>
          </Card>
        );
      })}
    </ul>
  );
};

export default Assets;
