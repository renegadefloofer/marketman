import React from 'react';
// import prices from './Prices';
import Asset from '../Layout/Custom/Asset';

const Assets = (props) => {
  const AssetsArray = [
    {
      assetName: 'BTC',
      accountName: 'elder',
      amount: 1,
      amountInUSD: 38000,
    },
    {
      assetName: 'ETH',
      accountName: 'elder',
      amount: 1,
      amountInUSD: 3800,
    },
  ];

  return (
    <>
      <ul>
        {AssetsArray.map((asset) => {
          return (
            <Asset
              name={asset.assetName}
              amount={asset.amount}
              price={asset.USDMultiplier}
            ></Asset>
          );
        })}
      </ul>
    </>
  );
};

export default Assets;
