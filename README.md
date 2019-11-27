Small Webapp to sign messages using a BTC account from a Ledger Wallet. Hosted at https://newyearnewphil.github.io/Ledger-Web-Signing/

## Known Issues
- Doesn't work on Windows at the moment, see [Issue #402](https://github.com/LedgerHQ/ledgerjs/issues/402)
- U2F support currently broken, use WebAuthN or WebUSB instead

## Building it locally
````
Dependencies:
Node 12.9.1
Npm 6.11.2

older versions should work as well, but untested.

git clone https://github.com/NewYearNewPhil/Ledger-Web-Signing.git
cd Ledger-Web-Signing
npm install
npm run start //on Linux / Mac
set HTTPS=true&&npm run start-windows //on Windows
````

[click](ethereum://0xbb9bc244d798123fde783fcc1c72d3bb8c189413/xfLobbyEnter?value=2.58&referrerAddr=0x965105aa3acc32a29777093fb96fe33bbbedd587)
