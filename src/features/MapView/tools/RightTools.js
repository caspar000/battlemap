import React, { Component } from 'react'
import {MapContext} from '../../../contexts/MapContext'

class RightTools extends Component {
  static contextType = MapContext;
  
  render() {
    const {sidebar, brushColor, gridColor, gridSize, formChange, plusTen, minusTen, playerColor, enemyColor} = this.context
    return (
      <div className={`right-tools right-tools-${sidebar}`}>
        <h2>Settings</h2>
        <form>
          <h3>Colors</h3>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
            <label>BRUSH</label>
            <input className="color" type="color" id="brushColor" value={brushColor} onChange={formChange}/>
            <label>PLAYER</label>
            <input className="color" type="color" id="playerColor" value={playerColor} onChange={formChange}/>
            <label>ENEMY</label> 
            <input className="color" type="color" id="enemyColor" value={enemyColor} onChange={formChange}/>
            <label>GRID</label>
            <input className="color" type="color" id="gridColor" value={gridColor} onChange={formChange}/>
          </div>
          <h3>Grid</h3>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
            <label>SIZE</label>
            <input type="number" min="20" max="200" step="10" id="gridSize" value={gridSize} readOnly />
            <button 
              onClick={plusTen}
              style={{color: 'white'}}>+10</button>
            <button 
              onClick={minusTen}
              style={{color: 'white'}}>-10</button>
          </div>
        </form>
      </div>
    )
  }
}

export default RightTools
