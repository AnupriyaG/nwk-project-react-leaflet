import React, { PureComponent } from 'react';
import Leaflet, { icon } from 'leaflet';
import { create } from 'apisauce';

//importing Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import { MapContainer, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-markercluster";
import { markers, mapConfig,iconPerson } from '../../helper/utils';
//import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import './ReactLeafletMap.styl';
//import 'leaflet/dist/leaflet.css';

// Data for GeoJSON usage
const data = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "01",
      properties: { name: "Newark", density: 94.65 },
      geometry: {
        type: "point",
        coordinates: 
            [-87.359296, 35.00118]
        
      }
    }
  ]
}

class ReactLeafletMap extends PureComponent {

  constructor(props){
    super(props);
    this.state={
        error:null,
        isLoaded: false,
        signalData:[]
    };
  }

 
  componentDidMount() {
      const intersection_names = ['Hudson_Warren','WestMarket_Warren','Ferry_Adams']
      const api = create({
        baseURL: 'http://transprod04.njit.edu'
      });

      //for (var index = 0; index < intersection_names.length; index++) {
        //console.log(intersection_names[index]);
        api.get('/SignalIntersection/api/values/Get?FileName=Hudson_Warren')
    .then((response) =>{
        response.data.map(item=>{
          var temp =[]
          console.log(item.latlon.split(',').map(location=>{
            temp.push(parseFloat(location))
            console.log(parseFloat(location))
          }))
      })
    })
  
 // }
  


   /* api.get('/SignalIntersection/api/values/Get?FileName=Hudson_Warren')
  .then(response => response.data.map(item =>{this.state.signalData.push(item)}) )
  .then(console.log(this.state.signalData))*/
      /*const apiUrl = 'https://cors-anywhere.herokuapp.com/http://transprod04.njit.edu/SignalIntersection/api/values/Get?FileName=Hudson_Warren';
      fetch(apiUrl,{
        mode: 'no-cors'})
      .then((response)=> response.json()).then(response => {

        console.log(response)
    response.data.map(item =>{this.state.signalData.push(item)
  })
    });*/
      //.then((data) => console.log('This is your data', data));
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        /*(error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }*/
  }

// Get the style for your polygons from GeoJSON, it can be dependable on a parameter you want.
// For example, you can use different style for different density of the location
  getStyle(feature) {
    return {
        fillColor: '#ece7f2',
        weight: 2,
        opacity: 1,
        color: 'blue',
        dashArray: '3',
        fillOpacity: 0.7
    }
  }

  render() {
    // create an array with marker components
    const LeafletMarkers = markers.map(marker => (
      <Marker position={marker.latlng}>
        <Popup>
          {marker.name}
        </Popup>
      </Marker>
    ));

    //const data = this.state.items.map( item => (<div>{item}</div>));

   /* const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {*/

/*

 */

   /* return (
      <div className="map">
        <MapContainer style={{ height: "100vh" }} center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
          <TileLayer
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
          />
          {LeafletMarkers}
         
          <MarkerClusterGroup>
          
        </MarkerClusterGroup>
          <GeoJSON data={data} style={this.getStyle} />
        </MapContainer>
      </div>
    );*/

    return(       
        <Container fluid>
        <Row>
          <Col>
            <MapContainer style={{ height: "100vh",width: "100%"}} center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
              <TileLayer
                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
              />
              {LeafletMarkers}
          
              <MarkerClusterGroup>
            
              </MarkerClusterGroup>
            {/* <GeoJSON data={data} style={this.getStyle} /> */}
            </MapContainer>
          </Col>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {markers.map((marker,index) => (
                    <tr position={marker.latlng}>
                      <td>{index}</td>
                      <td>{marker.name}</td>
                      <td>N/A</td>
                  </tr>
                ))}
                </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      
      );
  //}
}
}

export default ReactLeafletMap;