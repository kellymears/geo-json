import { injectGlobal } from 'emotion'

injectGlobal`
  body {
    background-color: black;
    margin-right: 0;
    margin-left: 0;
    margin-top: -2vh;
    margin-bottom: -2vh;
    padding-top: -2vh;
    padding-bottom: -2vh;
  }

  .mapboxgl-canvas-container {
    pointer-events: none;
    height: 98vh;
    margin: 0;
    padding: 0;
  }

  .mapbox-gl-canvas-container.mapboxgl-canvas {
    height: 98vh;
  }

  .mapboxgl-canvas-container,
  .mapboxgl-canvas-container.mapboxgl-canvas {
    position: initial;
    width: 100vw;
  }

  .mapboxgl-ctrl-attrib-inner {
    padding-top: 0.5vh;
    padding-left: 2rem;
    display: block;
  }

  .mapboxgl-ctrl-attrib-inner a {
    color: white;
    font-family: sans-serif;
    letter-spacing: 0.1ch;
    font-weight: 300;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.2rem;
    display: inline-block;
    line-height: 1.2rem;
  }
`
