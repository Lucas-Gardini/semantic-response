# Semantic Response

[![npm version](https://badge.fury.io/js/semantic-response.svg)](https://www.npmjs.com/package/semantic-response)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Simple Node.js package that aims to create standardized responses for HTTP applications.

## Installation

```bash
npm install semantic-response
```

## Usage

```javascript
const { HttpResponse } = require("semantic-response");

// Example: Creating a success response
const successResponse = HttpResponse.ok({ name: "John Doe", email: "email@email.com" });
console.log(successResponse);

// Example: Creating an error response
const errorResponse = HttpResponse.badRequest({ invalidFields: ["name", "email"] }, "The request you sent is invalid");
console.log(errorResponse);

// Example: Creating another error response
const anotherErrorResponse = HttpResponse.internalServerError(errorDataObj, "Something went wrong");
console.log(anotherErrorResponse);
```

## Available Functions

-   `continue`
-   `switchingProtocols`
-   `processing`
-   `earlyHints`

-   `ok`
-   `created`
-   `accepted`
-   `nonAuthoritativeInformation`
-   `noContent`
-   `resetContent`
-   `partialContent`
-   `multiStatus`
-   `alreadyReported`
-   `imUsed`

-   `multipleChoices`
-   `movedPermanently`
-   `found`
-   `seeOther`
-   `notModified`
-   `useProxy`
-   `switchProxy`
-   `temporaryRedirect`
-   `permanentRedirect`

-   `badRequest`
-   `unauthorized`
-   `paymentRequired`
-   `forbidden`
-   `notFound`
-   `methodNotAllowed`
-   `notAcceptable`
-   `proxyAuthenticationRequired`
-   `requestTimeout`
-   `conflict`
-   `gone`
-   `lengthRequired`
-   `preconditionFailed`
-   `payloadTooLarge`
-   `uriTooLong`
-   `unsupportedMediaType`
-   `rangeNotSatisfiable`
-   `expectationFailed`
-   `iAmATeapot`
-   `misdirectedRequest`
-   `unprocessableEntity`
-   `locked`
-   `failedDependency`
-   `tooEarly`
-   `upgradeRequired`
-   `preconditionRequired`
-   `tooManyRequests`
-   `requestHeaderFieldsTooLarge`
-   `unavailableForLegalReasons`

-   `internalServerError`
-   `notImplemented`
-   `badGateway`
-   `serviceUnavailable`
-   `gatewayTimeout`
-   `httpVersionNotSupported`
-   `variantAlsoNegotiates`
-   `insufficientStorage`
-   `loopDetected`
-   `notExtended`
-   `networkAuthenticationRequired`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
