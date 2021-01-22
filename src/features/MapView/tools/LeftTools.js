import React, { Component } from 'react'
import {MoveIcon, BrushIcon, EraserIcon, DeleteIcon, PlayerIcon, EnemyIcon, GoblinIcon, SaveIcon, OrcIcon, OgreIcon, BanditIcon, CultistIcon, SkeletonIcon} from '../icons/svg-icons'
import { MapContext } from '../../../contexts/MapContext'

class LeftTools extends Component {
  static contextType = MapContext
  render() {
    const {toggleMove, toggleBrush, toggleEraser, spawnPlayer, spawnGoblin, spawnOrc, spawnOgre, spawnBandit, spawnSkeleton, spawnCultist} = this.context
    return (
      <div className="left-tools">
        Tools
        <button onClick={toggleMove}>
          <MoveIcon />
          <div className="tooltip">Move Canvas<br/>(Work in Progress)</div>
        </button>

        <button onClick={toggleBrush}>
          <BrushIcon />
          <div className="tooltip">Brush</div>
        </button>

        <button onClick={toggleEraser}>
          <EraserIcon />
          <div className="tooltip">Eraser</div>
        </button>

        <button onClick={this.deleteDrawnLines}>
          <DeleteIcon />
          <div className="tooltip">Delete All Lines<br/>(Work in Progress)</div>
        </button>

        <div className="spawn-entity">
          <PlayerIcon color={'#fff'}/>
          <div className="tooltip choose">
            Spawn Ally<br/>
            <button style={{display: 'inline-block', maxWidth: '40px'}} onClick={spawnPlayer}>
              <PlayerIcon />
            </button>
          </div>
        </div> 

        <div className="spawn-entity">
          <EnemyIcon color={'#fff'}/>
          <div className="tooltip choose">
            Spawn Enemy<br/>
            <button style={{display: 'inline-block', maxWidth: '40px'}} onClick={spawnGoblin}>
              <GoblinIcon />
            </button>
            <button style={{display: 'inline-block', maxWidth: '40px'}} onClick={spawnOrc}>
              <OrcIcon />
            </button>
            <button style={{display: 'inline-block', maxWidth: '40px'}} onClick={spawnOgre}>
              <OgreIcon />
            </button>
            <br/>
            <button style={{display: 'inline-block', maxWidth: '40px'}} onClick={spawnBandit}>
              <BanditIcon />
            </button>
            <button style={{display: 'inline-block', maxWidth: '40px'}} onClick={spawnSkeleton}>
              <SkeletonIcon />
            </button>
            <button style={{display: 'inline-block', maxWidth: '40px'}} onClick={spawnCultist}>
              <CultistIcon />
            </button>
          </div>
        </div>

        <button onClick={this.onStateSave}>
          <SaveIcon />
          <div className="tooltip">Save State<br/>(Work in Progress)</div>
        </button>
      </div>
    )
  }
}

export default LeftTools
