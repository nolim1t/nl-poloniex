# Poloniex Node.js Library

[![npm version](https://badge.fury.io/js/nl-poloniex.svg)](https://badge.fury.io/js/nl-poloniex)

## About

This is my Node.js Library for Poloniex

## Installing

```bash
npm i nl-poloniex --save
```

## Contributing

All contributions are welcome and appreciated. Open Source is a meritocracy who doesn't care who you are.

* Issues
* Pull Requests
* Donations (BTC: [14qd36n1viYAWzajZgaTQq4tPUZcEUtfcz](http://blockr.io/address/info/14qd36n1viYAWzajZgaTQq4tPUZcEUtfcz) / LTC: [LSGfxUoJSC3qYsTC6DwyvKvYfDwTVXrcE2](http://ltc.blockr.io/address/info/LSGfxUoJSC3qYsTC6DwyvKvYfDwTVXrcE2) / [Dollars](https://donate.nolim1t.co))

## Example Code

### Initializing

```javascript
const poloniex = require('nl-poloniex');
```

### Get Order Book (BTC / ETC Pair)

```javascript
// Depth : 10
poloniex.public({endpoint: "returnOrderBook", currencyPair: "BTC_ETC", depth: 10}, (cb) => console.log(cb));
// Depth default
poloniex.public({endpoint: "returnOrderBook", currencyPair: "BTC_ETC"}, (cb) => console.log(cb));
```

### Get Volume for 24 hours

```javascript
poloniex.public({endpoint: "return24hVolume"}, (cb) => console.log(cb));
```

### Return Ticker

```javascript
poloniex.public({endpoint: "returnTicker"}, (cb) => console.log(cb));
```

### Get Balances

```javascript
poloniex.private({command: "returnBalances", 'key': '', 'secret': ''}, (cb) => console.log(cb));
```

### Return all balances (including margin accounts)

```javascript
poloniex.private({command: "returnAvailableAccountBalances", 'key': '', 'secret': ''}, (cb) => console.log(cb));
```

### Return Margin Summary

```javascript
poloniex.private({command: "returnMarginAccountSummary", 'key': '', 'secret': ''}, (cb) => console.log(cb));
```
