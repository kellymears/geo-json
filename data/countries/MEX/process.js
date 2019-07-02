const fs = require('fs')
const geo = require('./../MEX.regional.geo.json')

const legit = ({ properties: { postal } }) =>
  postal && postal.length > 0

geo.features.forEach(feature => {
  const op = legit(feature) && {
    fileName: `./${feature.properties.postal}.geo.json`,
    data: JSON.stringify({
      "type": "FeatureCollection",
      "features": [{
        type: 'Feature',
        id: `MEX-${feature.properties.postal}`,
        properties: {
          name: feature.properties.name,
          label: {
            latitude: feature.properties.latitude,
            longitude: feature.properties.longitude,
          },
        },
        geometry: feature.geometry,
      }],
    })
  }

  op && fs.writeFileSync(op.fileName, op.data)
  op && console.log(op)
})