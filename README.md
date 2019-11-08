# Introduction

This simple server uses client-certificate TLS authentication to illustrate how many browsers fail to honor the `withCredentials` flag in XHR.

## Usage

1. Run `npm install` to install dependencies.
1. Load the self-signed certificate `cert.p12` (for "localhost") to your browser's personal certificate store.  It has no password.
1. Run `npm run start` to start the server.
1. Browse to https://localhost:8001 to load the test page, and add an exception to your browser for the certificate there.
1. Click the link on this page or just browse to https://localhost:8002 and add another exception.  This page should show the CN from your certificate from step 1, i.e. "localhost".
1. Refresh the page from step 3 (port 8001) to run the tests.

## Results

A spec-compliant browser will show that the first test, run with `withCredentials = false`, should fail, because the service on port 8002 requires a client cert, while the second test, run with `withCredentials = true`, should succeed and display the client cert CN.  Non-compliant browsers will make both calls successfully.  If the second test fails, make sure that you can visit the service on port 8002 directly without any errors.
