# vehicle-insurance-quotes-front

This application was created as part of the [Connex Telecommunica.ons Angular / Java Project](TakeHome_Assignment_FullStack.pdf) demo.

It was bootstrapped using the [ngx-rocket starter kit](https://github.com/ngx-rocket/starter-kit), which supports both French and English.

The purpose of this application is to be built and served as a static resource in a Spring Boot application.

There are three views:

1. The home page: designed for form editing.
2. The quote view: displays quote data in different colors based on the success or failure status.
3. A refresh page: useful when the app is served by a serverless function that can stop running based on configuration.


# Getting started

1. Go to project folder and install dependencies:
 ```bash
 npm install
 ```
 
2. Launch development server, and open `localhost:4200` in your browser:
 ```bash
 npm start
 ```

# Build

1. To avoid CORS policy validation issues, configure your server host in the [environment.prod.ts](src/environments/environment.prod.ts) file.

2. Build the project:
 ```bash
 ng build
 ```

3. Copy all generated files from the [dist](dist) directory into the static folder of your Spring Boot Application.


# License

## MIT License

Copyright (c) 2020 Christian Kevin TRAORÉ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.