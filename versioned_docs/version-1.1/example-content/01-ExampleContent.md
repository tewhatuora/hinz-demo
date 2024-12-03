---
title: Example Content
---

Present your content in pages/files such as this.

## Example "Standards" Components 

A single API Standard can be implemented like this:

<Standard id="HNZAS_SHOULD_Example_Standard" type="SHOULD" toolTip="Example standards SHOULD be well written.">**SHOULD**</Standard>


Below is a example of a table of API rules, that have been created as standards:

#### Request Headers

| **Header**                          | **Usage**                                                                                                                                                                      | **GET**                       | **POST**                              | **PUT**                               | **DELETE**                    |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- | ------------------------------------- | ------------------------------------- | ----------------------------- |
| **Accept**                          | Indicates desired format of the response. If set to a value that cannot be supported by the server, API responds with 406 (not acceptable)                                     | <Standard id="HNZAS_MUST_USE_ACCEPT_HEADER_FOR_GET_REQUEST" type="MUST" toolTip="The response format required from a GET request MUST be indicated by the consumer using the Accept header.">**MUST**</Standard>                      | <Standard id="HNZAS_MUST_USE_ACCEPT_HEADER_FOR_POST_REQUEST" type="MUST" toolTip="POST requests MUST use the Accept header.">**MUST**</Standard>                               | <Standard id="HNZAS_MUST_USE_ACCEPT_HEADER_FOR_PUT_REQUEST" type="MUST" toolTip="PUT requests MUST use the Accept header.">**MUST**</Standard>                               | N/A                           |
| **Content-Type**                    | Indicates the format of the payload provided on the request. If not supported by the server, API responds with 415 (Unsupported Media Type)                                    | N/A                           | <Standard id="HNZAS_MUST_USE_CONTENT_TYPE_HEADER_FOR_POST_REQUEST" type="MUST" toolTip="POST requests MUST use the Content-type header.">**MUST**</Standard>                               | <Standard id="HNZAS_MUST_USE_CONTENT_TYPE_HEADER_FOR_PUT_REQUEST" type="MUST" toolTip="PUT requests MUST use the Content-type header.">**MUST**</Standard>                              | N/A                           |
| **Authorization**                   | To provide authorization information – type and token, depending on authorization type. If token is not valid for the request, API responds with 401 (Unauthorized)            | <Standard id="HNZAS_MUST_USE_AUTHORIZATION_HEADER_FOR_GET_REQUEST" type="MUST" toolTip="GET requests MUST use the Authorization header, unless a public API.">**MUST**, unless a public API</Standard> | <Standard id="HNZAS_MUST_USE_AUTHORIZATION_HEADER_FOR_POST_REQUEST" type="MUST" toolTip="POST requests MUST use the Authorization header, unless a public API.">**MUST**, unless a public API</Standard>        | <Standard id="HNZAS_MUST_USE_AUTHORIZATION_HEADER_FOR_PUT_REQUEST" type="MUST" toolTip="PUT requests MUST use the Authorization header, unless a public API.">**MUST**, unless a public API</Standard>        | <Standard id="HNZAS_MUST_USE_AUTHORIZATION_HEADER_FOR_DELETE_REQUEST" type="MUST" toolTip="DELETE requests MUST use the Authorization header, unless a public API.">**MUST**, unless a public API</Standard> |
| **Accept-Encoding**                 | Advertises what compression algorithm the consuming application is able to understand. If encoding not supported by the server, API responds with uncompressed response        | <Standard id="HNZAS_SHOULD_USE_ACCEPT_ENCODING_HEADER_FOR_GET_REQUEST" type="SHOULD" toolTip="GET requests SHOULD use the Accept-Encoding header.">**SHOULD**</Standard>                   | <Standard id="HNZAS_SHOULD_USE_ACCEPT_ENCODING_HEADER_FOR_POST_REQUEST" type="SHOULD" toolTip="POST requests SHOULD use the Accept-Encoding header.">**SHOULD**, if response body expected</Standard> |<Standard id="HNZAS_SHOULD_USE_ACCEPT_ENCODING_HEADER_FOR_PUT_REQUEST" type="SHOULD" toolTip="PUT requests SHOULD use the Accept-Encoding header.">**SHOULD**, if response body expected</Standard> | N/A                           |
| **API Key Header**                  | Send the API Keys with every request. If keys are not valid, API response with 401 (Not authorised)                                                                            | <Standard id="HNZAS_MUST_USE_API_KEY_HEADER_FOR_GET_REQUEST" type="MUST" toolTip="GET requests MUST use the API Key header, if issued.">**MUST**, if issued</Standard>           | <Standard id="HNZAS_MUST_USE_API_KEY_HEADER_FOR_POST_REQUEST" type="MUST" toolTip="POST requests MUST use the API Key header, if issued.">**MUST**, if issued</Standard>                   | <Standard id="HNZAS_MUST_USE_API_KEY_HEADER_FOR_PUT_REQUEST" type="MUST" toolTip="PUT requests MUST use the API Key header, if issued.">**MUST**, if issued</Standard>                | <Standard id="HNZAS_MUST_USE_API_KEY_HEADER_FOR_DELETE_REQUEST" type="MUST" toolTip="DELETE requests MUST use the API Key header, if issued.">**MUST**, if issued</Standard>           |
| **If_Modified_Since/If-None-Match** | Makes the request conditional; the server will respond with the resource only if the specified condition is met. If condition is not met, API responds with 304 (Not Modified) | <Standard id="HNZAS_SHOULD_USE_CONDITIONAL_HEADERS_FOR_GET_REQUEST" type="SHOULD" toolTip="GET requests SHOULD use the If_Modified_Since/If-None-Match header.">**SHOULD**</Standard>                    | N/A                                   | N/A                                   | N/A                           |
| **Request tracking Headers**        | Unique identifier that can be used to trace a request throughout its lifecycle                                                                                                 | <Standard id="HNZAS_SHOULD_USE_REQUEST_TRACKING_HEADER_FOR_GET_REQUEST" type="SHOULD" toolTip="GET requests SHOULD use a request tracking header to trace a request throughout its lifecycle.">**SHOULD**</Standard>                    | <Standard id="HNZAS_SHOULD_USE_REQUEST_TRACKING_HEADER_FOR_POST_REQUEST" type="SHOULD" toolTip="POST requests SHOULD use a request tracking header to trace a request throughout its lifecycle.">**SHOULD**</Standard>                            | <Standard id="HNZAS_SHOULD_USE_REQUEST_TRACKING_HEADER_FOR_PUT_REQUEST" type="SHOULD" toolTip="PUT requests SHOULD use a request tracking header to trace a request throughout its lifecycle.">**SHOULD**</Standard>                            | <Standard id="HNZAS_SHOULD_USE_REQUEST_TRACKING_HEADER_FOR_DELETE_REQUEST" type="SHOULD" toolTip="DELETE requests SHOULD use a request tracking header to trace a request throughout its lifecycle.">**SHOULD**</Standard>      

## Example Plant UML 

This repository suggests the use of PLANT UML diagrams as code, like the example shows as below.


## Example Image

You can insert images into your content, by storing them in the static/img directory and referencing within markdown

<img src="/standards-template/img/content/image1.jpg" />

<DetailedDescription text="Example Description"/>

## Example Links

You can link to alternative parts of the document as such 

- Follow this link ["Link Text"](/example-content/ExampleContent)

```