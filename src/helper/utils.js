import * as turf from '@turf/turf'
import Immutable from 'immutable';
import L from 'leaflet';

export function slugify(str) {
  return str.toLowerCase().replace(/\s/g, '-');
}

export const markers = [
  {
    name: 'Hudson Warren',
    latlng: [40.74361875485853, -74.18627415983981]
  }, {
    name: 'Ferry Adams',
    latlng: [40.72934018348578, -74.158676075992]
  },
  {
    name: 'WestMarket Warren',
    latlng: [40.74403808506137, -74.18759444943998]
  },
  {
    name: 'Ferry Jackson',
    latlng: [40.72898753055599, -74.1578790135343]
  },
  {
    name: 'Ferry Jefferson',
    latlng: [40.730618634851986, -74.16080798782268]
  },
  {
    name: 'Ferry Merchant',
    latlng: [40.72796854965874, -74.15543996131856]
  },
  {
    name: 'Ferry Union',
    latlng: [40.73239582260788, -74.16303338768188]
  },
  {
    name: 'Ferry VanBuren',
    latlng: [40.728659387929696, -74.15708250193487]
  },
  {
    name: 'Raymond Chapel',
    latlng: [40.733909651095324, -74.13986096017662]
  },
  {
    name: 'Raymond Providence',
    latlng: [40.732719633497105, -74.14907743072048]
  },
  {
    name: 'WestMarket Hudson',
    latlng: [40.743116365398016, -74.18651448327404]
  },
  {
    name: 'Springfield Market',
    latlng: [40.73707515125086, -74.17716716984427]
  },
  {
    name: 'IrvineTurner WestKinney',
    latlng: [40.73212260436591, -74.18926578145533]
  },
  {
    name: 'IrvineTurner Avon',
    latlng: [40.723870204997326, -74.19266707207362]
  },
  {
    name: 'IrvineTurner 18th',
    latlng: [40.723870204997326, -74.19266707207362]
  },
  {
    name: 'IrvineTurner MuhammadAli',
    latlng: [40.723870204997326, -74.19266707207362]
  },
  {
    name: 'IrvineTurner Clinton',
    latlng: [40.721632012735434, -74.19359364644646]
  },
  {
    name: 'IrvineTurner MidPedXing',
    latlng: [40.721632012735434, -74.19359364644646]
  },
  {
    name: 'IrvineTurner 17th',
    latlng: [40.73037313924918, -74.18997542562272]
  },
  {
    name: 'WestMarket Norfolk',
    latlng: [40.74085325483444, -74.18559898197219]
  },
  {
    name: 'Norfolk 13th',
    latlng: [40.73915236656182, -74.18634603818144]
  }
];



export const mapConfig = {
  center: [40.7357, -74.1724],
  zoom: 14
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