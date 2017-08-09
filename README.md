# Flexberry Ember Demo App with Apache Cordova

This README outlines the details of collaborating on this Flexberry Ember Demo App with Apache Cordova.

## Installation

1. `git clone` this repository
2. `git submodule init`
3. `git submodule update`
4. `cd demoapp`
5. `npm install`
6. `bower install`

## Running

* Visit your this [guide](https://flexberry.github.io/ru/gma_landing-page.html).

## iOS 
In iOS 9 you have to configure Transport Security in your `*-info.plist` file like this:
```
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```
or even better:
```
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSExceptionDomains</key>
  <dict>
    <key>yourserver.com</key>
    <dict>
      <!--Include to allow subdomains-->
      <key>NSIncludesSubdomains</key>
      <true/>
      <!--Include to allow HTTP requests-->
      <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
      <true/>
      <!--Include to specify minimum TLS version-->
      <key>NSTemporaryExceptionMinimumTLSVersion</key>
      <string>TLSv1.1</string>
    </dict>
  </dict>
</dict>
```
