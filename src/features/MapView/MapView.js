import React, {Component} from 'react'
import MapContextProvider from '../../contexts/MapContext';

import TopTools from './tools/TopTools';
import LeftTools from './tools/LeftTools';
import RightTools from './tools/RightTools';

import MapStage from './stage/MapStage';

import './MapView.scss'

class MapView extends Component {
  render(){
    return(
      <MapContextProvider>
        <div>
          <TopTools />
          <LeftTools />
          <RightTools />
        </div>
        <div>
          <MapStage />
        </div>
      </MapContextProvider>
    )
  }
}

export default MapView