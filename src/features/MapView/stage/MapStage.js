import React from 'react'
import Konva from 'konva'
import {Stage, Layer, Line, Rect, Circle, Image, Group, Text} from 'react-konva'
import {MapContext} from '../../../contexts/MapContext';
import useImage from 'use-image'

import Player from '../icons/player.svg'
import Goblin from '../icons/goblin.svg'
import Ogre from '../icons/ogre.svg'
import Orc from '../icons/orc.svg'
import Bandit from '../icons/bandit.svg'
import Skeleton from '../icons/skeleton.svg'
import Cultist from '../icons/cultist.svg'


const PlayerArray = ['Ali', 'Arnold', 'Morgan', 'Badri', 'Germand', 'Nydian'];

var lastLine;

const PlayerImage = ({icon, gridSize, size}) => {
  const [image] = useImage(icon);
  return <Image image={image} width={gridSize * size} height={gridSize * size} />;
};

const Entity = ({num, width, height, gridSize, size, color, fontColor, icon, remove, name}) => {
  const handleDragStart = e => {
    e.target.setAttrs({
      scaleX: 1.2,
      scaleY: 1.2,
    })
  }
  const handleDragEnd = e => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
    })
  }

  return (
    <Group
        key={num}
        draggable
        x={width / 3 + num*gridSize}
        y={height / 3}
        onDragStart={handleDragStart}
        onDragMove={handleDragStart}
        onDragEnd={handleDragEnd}
        onDblClick={remove}
    >
      <Circle
        x={gridSize * size / 2}
        y={gridSize * size / 2}
        radius={gridSize * size / 2 + 2}
        fill={color}
      />
      <PlayerImage icon={icon} gridSize={gridSize} size={size} />
      <Text text={num + 1} fontSize={gridSize} fill={fontColor} x={gridSize * size / 1.5} y={gridSize * size / 1.5} />
      <Text text={name} fontSize={gridSize / 2} fill={fontColor} x={gridSize * size / 1.5} y={- gridSize * size / 4} />
    </Group>
  )
}

class MapStage extends React.Component {
  static contextType = MapContext;

  handleMouseDown = (e) => {
    if (this.context.brush === 'brush' || this.context.brush === 'eraser'){
      this._drawing = true;
      const pos = this.stageRef.getPointerPosition();
      const layer = this.drawLayerRef;
      if (this.context.brush === 'brush'){
        lastLine = new Konva.Line({
          stroke: this.context.brushColor,
          strokeWidth: 5,
          globalCompositeOperation: 'source-over',
          points: [pos.x, pos.y],
        });
        layer.add(lastLine);
      }
      if (this.context.brush === 'eraser'){
        lastLine = new Konva.Line({
          stroke: this.context.brushColor,
          strokeWidth: 15,
          globalCompositeOperation: 'destination-out',
          points: [pos.x, pos.y],
        });
        layer.add(lastLine);
      }
    }
  }

  hanldeMouseUp = () => {
    this._drawing = false;
  }

  handleMouseMove = () => {
    if (!this._drawing) {
      return;
    }
    const layer = this.drawLayerRef;
    const pos = this.stageRef.getPointerPosition();
    var newPoints = lastLine.points().concat([pos.x, pos.y]);
    lastLine.points(newPoints);
    layer.batchDraw();
  }

  handleDoubleClick = e => {
    e.currentTarget.destroy()
    this.entityLayerRef.draw()
  }

  render() {
    const scale = 2;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const {gridSize, gridColor, player, playerColor, enemyColor, goblin, orc, ogre, bandit, skeleton, cultist} = this.context
    
    const linegrid = [];

    for (var i = 0; i < width*scale / gridSize; i++) {
      linegrid.push(
        <Line 
          key={i+1}
          points={[Math.round(i * gridSize) + 0.5, 0, Math.round(i * gridSize) + 0.5, height*scale]}
          stroke={'#333'}
          strokeWidth={1}
          listening={false}
        />
      )
    }
    for (var j = 0; j < height*scale / gridSize; j++) {
      linegrid.push(
        <Line
          key={-j-1}
          points={[0, Math.round(j * gridSize), width*scale, Math.round(j * gridSize)]}
          stroke={'#333'}
          strokeWidth={1}
          listening={false}
        />
      )
    }


    return (
      <Stage 
        width={width} 
        height={height - 40}
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onTouchMove={this.handleMouseMove}
        onMouseUp={this.hanldeMouseUp}
        onTouchEnd={this.hanldeMouseUp}
        onDblClick={this.spawnEntity}
        ref={node => {
          this.stageRef = node;
        }}
      >
        <Layer
          listening={false}
        >
          <Rect
            x={0}
            y={0}
            width={width * scale}
            height={height * scale}
            fill={gridColor}
           />
          {linegrid}
        </Layer>
        <Layer
          ref={node => {
            this.entityLayerRef = node;
          }}>
          {[...Array(player)].map((_, i) => (
            <Entity 
              key={i}
              num={i} 
              name={PlayerArray[i]}
              width={width} 
              height={height} 
              gridSize={gridSize} 
              size={1}
              color={playerColor} 
              fontColor={'#fff'}
              remove={this.handleDoubleClick}
              icon={Player} />
          ))}
          {[...Array(goblin)].map((_, i) => (
            <Entity 
              key={i}
              num={i} 
              width={width} 
              height={height} 
              gridSize={gridSize} 
              size={1}
              color={enemyColor} 
              fontColor={'#000'}
              remove={this.handleDoubleClick}
              icon={Goblin} />
          ))}
          {[...Array(orc)].map((_, i) => (
            <Entity 
              key={i}
              num={i} 
              width={width} 
              height={height} 
              gridSize={gridSize} 
              size={1}
              color={enemyColor} 
              fontColor={'#000'}
              remove={this.handleDoubleClick}
              icon={Orc} />
          ))}
          {[...Array(ogre)].map((_, i) => (
            <Entity 
              key={i}
              num={i} 
              width={width} 
              height={height} 
              gridSize={gridSize} 
              size={2}
              color={enemyColor} 
              fontColor={'#000'}
              remove={this.handleDoubleClick}
              icon={Ogre} />
          ))}
          {[...Array(bandit)].map((_, i) => (
            <Entity 
              key={i}
              num={i} 
              width={width} 
              height={height} 
              gridSize={gridSize} 
              size={1}
              color={enemyColor} 
              fontColor={'#000'}
              remove={this.handleDoubleClick}
              icon={Bandit} />
          ))}
          {[...Array(skeleton)].map((_, i) => (
            <Entity 
              key={i}
              num={i} 
              width={width} 
              height={height} 
              gridSize={gridSize} 
              size={1}
              color={enemyColor} 
              fontColor={'#000'}
              remove={this.handleDoubleClick}
              icon={Skeleton} />
          ))}
          {[...Array(cultist)].map((_, i) => (
            <Entity 
              key={i}
              num={i} 
              width={width} 
              height={height} 
              gridSize={gridSize} 
              size={1}
              color={enemyColor} 
              fontColor={'#000'}
              remove={this.handleDoubleClick}
              icon={Cultist} />
          ))}
        </Layer>
        <Layer
          ref={node => {
            this.drawLayerRef = node;
          }}>
        </Layer>

      </Stage>
    )
  }
}

/* Gaan was here. He didn't understand anything.*/

export default MapStage
