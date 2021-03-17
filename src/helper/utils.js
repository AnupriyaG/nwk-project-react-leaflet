import * as turf from '@turf/turf'
import Immutable from 'immutable';
import L from 'leaflet';

export function slugify(str) {
  return str.toLowerCase().replace(/\s/g, '-');
}

export const markers = [
  {
    name: 'Martin Luther King Jr Blvd',
    latlng: [40.743503, -74.175850]
  }, {
    name: 'Lock St',
    latlng: [40.744721, -74.179820]
  }
];



export const mapConfig = {
  center: [40.7357, 74.1724],
  zoom: 8
};
var points = turf.randomPoint(50000, { bbox: [13.0535, 52.3303, 13.7262, 52.6675]})
//const points = turfRandom('points', 50000, { bbox: [13.0535, 52.3303, 13.7262, 52.6675] });
export const locations = Immutable.fromJS(points.features.map(feat => feat.geometry.coordinates));


export const scatterPlotData = points.features.map(feat => (
  { position: feat.geometry.coordinates,
    radius: 1,
    color: [255, 0, 0]
  }
));

export function getColor(d) {
  const z = d.start[2];
  const r = z / 10000;

  return [255 * ((1 - r) * 2), 128 * r, 255 * r, 255 * (1 - r)];
}