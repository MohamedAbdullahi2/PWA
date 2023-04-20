
# Text Editor Web Application

This text editor that allows users to create notes or code snippets with or without an internet connection. The application is designed to work reliably offline by using an integrated service worker and Cache API's, ensuring that users can access their notes even when offline. The application also allows users to access visited pages even when offline.

# Table of Contents

Installation

Usage

Built With

Contributing

License


# Installation

This application will require the installation of Node.js and various npm packages.

This application will use the following npm packages:-

  * npm install express (express.js)
  * npm install --save-dev webpack (Webpack)
  * npm install webpack-dev-server --save-dev (webpack-dev-server)
  * npm install --save-dev webpack-pwa-manifest (WebpackPwaManifest)
  * npm install babel (Babel)
  * npm install --save-dev css-loader (CSS-loader)
  * npm npm install idb (IndexedDB)


# MOCK UP 
![image](https://user-images.githubusercontent.com/118404373/233240734-643a9efb-84a2-440e-a681-4ea2977b351f.png)

![image](https://user-images.githubusercontent.com/118404373/233240794-2da00122-27fe-4383-8cfa-5de945bf9908.png)

![image](https://user-images.githubusercontent.com/118404373/233240838-99859e15-1462-43ec-b9af-e4785092329d.png)

<img width="471" alt="image" src="https://user-images.githubusercontent.com/118404373/233241435-72f33a4f-9d0f-4de5-8554-a85e4ba472b5.png">





# Features
Client-server folder structure

Bundled JavaScript files using webpack

Generated HTML file, service worker, and manifest file using webpack plugins

IndexedDB for database storage

Service worker using Workbox for offline access and caching of static assets

Installable as a desktop icon

