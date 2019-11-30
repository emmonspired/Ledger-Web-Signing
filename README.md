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

## Alternative Docker Build
````
$ docker-compose up
````

### Sample Docker Output:
````
WARNING: The TAGS variable is not set. Defaulting to a blank string.
Creating ledger_web_signing ... done
Attaching to ledger_web_signing
ledger_web_signing    | 
ledger_web_signing    | > ledger-webtool@0.1.0 start /app
ledger_web_signing    | > HTTPS=true&&react-scripts start ""
ledger_web_signing    | 
ledger_web_signing    | Starting the development server...
ledger_web_signing    | 
ledger_web_signing    | Compiled successfully!
ledger_web_signing    | 
ledger_web_signing    | You can now view ledger-webtool in the browser.
ledger_web_signing    | 
ledger_web_signing    |   Local:            http://localhost:3000/
ledger_web_signing    |   On Your Network:  http://172.17.0.2:3000/
ledger_web_signing    | 
ledger_web_signing    | Note that the development build is not optimized.
ledger_web_signing    | To create a production build, use npm run build.
ledger_web_signing    | 
````
