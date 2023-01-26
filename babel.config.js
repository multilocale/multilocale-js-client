/* Copyright 2013 - 2022 Waiterio LLC */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: '18.12',
        },
        shippedProposals: true,
      },
    ],
  ],
}
