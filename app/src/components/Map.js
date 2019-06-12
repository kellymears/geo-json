// packages
import React from 'react'
import mapboxgl from 'mapbox-gl'

// components
import { MapCanvas } from './styled/styled'

// map constants & data
import data from './../data/languages.json'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'

// exports
class Map extends React.Component {
  constructor(props) {
    super(props)

    this.zoomCamera = this.zoomCamera.bind(this)
    this.rotateCamera = this.rotateCamera.bind(this)
    this.panCamera = this.panCamera.bind(this)
    this.mapContainer = React.createRef()
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [-105, 45],
      pitch: 30,
      bearing: 0,
      zoom: 5,
      interactive: false,
    })

    this.map.on('load', () => {
      this.zoomCamera()
      this.panCamera()
      this.rotateCamera(0)

      this.map.addSource('languages', {
        type: 'geojson',
        data,
      })

      this.map.addLayer({
        id: 'languages',
        type: 'fill',
        source: 'languages',
        paint: {
          'fill-color': 'rgb(195, 20, 37)',
          'fill-opacity': 0.4,
        },
      })

      this.map.addLayer({
        id: 'languages-labels',
        type: 'symbol',
        source: 'languages',
        layout: {
          'text-field': [
            'get',
            'Name',
          ],
          'text-size': 10,
          'text-variable-anchor': [
            'top',
            'bottom',
            'left',
            'right',
          ],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
        },
        paint: {
          'text-color': '#FFFFFF',
        },
      })
    })
  }

  panCamera() {
    const panTarget = {
      latitude: -180,
      longitude: 90,
    }

    this.map.flyTo(panTarget, {
      duration: 3000,
    })
  }

  rotateCamera(timestamp) {
    const rotateDeg = (timestamp / 1000) % 360

    this.map.rotateTo(rotateDeg, {
      duration: 0,
    })
  }

  zoomCamera() {
    const options = {
      duration: 2000,
      easing: (t) => t * 0.25,
    }

    this.map.zoomTo(4.5, options) &&
    requestAnimationFrame(this.zoomCamera)
  }

  render() {
    return <MapCanvas ref={el => this.mapContainer = el} />
  }
}

export { Map }
