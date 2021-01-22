import React, { Component } from 'react'
import {MapContext} from '../../../contexts/MapContext'

class TopTools extends Component {
  static contextType = MapContext;

  render() {
    const {toggleSidebar} = this.context;

    return (
      <div className="top-tools">
        <button className="top-tools-button" onClick={toggleSidebar} >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="2.6em" 
            height="2em" 
            shapeRendering="geometricPrecision" 
            textRendering="geometricPrecision" 
            imageRendering="optimizeQuality" 
            fillRule="evenodd" 
            clipRule="evenodd" 
            viewBox="0 0 640 640"
            fill="#fff"
          >
            <path d="M640 67.643v104.423H172.892V67.643H640zM110.068 467.947V572.37H0V467.947h110.068zm0-200.14v104.41H0v-104.41h110.068zm0-200.164v104.423H0V67.643h110.068zM640 467.947V572.37H172.892V467.947H640zm0-200.14v104.41H172.892v-104.41H640z"/>
          </svg>
        </button>
        <p>Battle Maximus</p>
      </div>
    )
  }
}

export default TopTools
