/* Copyright 2013 - 2024 Waiterio LLC */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: '20.9',
        },
        shippedProposals: true,
      },
    ],
  ],
}
