# react-localdatev-component
Presentational component to render a unix timestamp from a given timezone into local time using moment.js

## Requirements

    "dependencies": {
      "babel-polyfill": "6.23.0",
      "prop-types": "15.5.10",
      "react": "15.6.1",
      "react-dom": "15.6.1",     
      "moment": "2.18.1",
      "moment-timezone": "0.5.13",
      "warning": "3.0.0"
    }

## Installation

Pleas be sure you have the requirements mentioned in the previous section installed.

We recommending forking this repository and using as a submodule. To use as a git submodule in your project, navigate to your components directory and run:

    git submodule add git@github.com:source4societyorg/react-localdate-component LocalDate

Replace the url with the url of your fork as needed.

For more information on how to use submodules, refer to the [git submodule reference](https://git-scm.com/docs/git-submodule) and this article from [TechJini](http://www.techjini.com/blog/working-with-git-submodules/)

## Example

Drop this component into your application and pass in props for `toTimezone` `timestamp` and `format`. Default value for `toTImezone` is the browser local time, with `format` defaulting to `MM/DD/YYYY` and `timestamp` defaulting to the current time the component was loaded.

    <LocalDate
        timestamp={1512024089},
        toTimezone={'America/New_York'},
        format={'MM/DD/YYYY'},
    />


Produces output:

    11/30/2017
