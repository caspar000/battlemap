import React, {createContext, Component} from 'react'

export const MapContext = createContext()

class MapContextProvider extends Component {
  state = {
    lines: [],
    brush: 'none',
    brushColor: '#333333',

    gridSize: 40,
    gridColor: '#aaaaaa',

    player: 0,
    playerColor: '#325286',

    enemyColor: '#660000',

    goblin: 0,
    ogre: 0,
    orc: 0,

    bandit: 0,
    cultist: 0,
    skeleton: 0,

    sidebar: 'none',
  }

  handleFormChange = e => {
    if (e.target.type === 'number'){
      this.setState({
        [e.target.id]: Number(e.target.value)
      })
    } else {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  }

  toggleSidebar = () => {
    if (this.state.sidebar !== 'display'){
      this.setState({sidebar: 'display'})
    } else {
      this.setState({sidebar: 'none'})
    }
  }

  increaseByTen = e => {
    e.preventDefault()
    const gridSize = this.state.gridSize + 10
    this.setState({
      gridSize
    })
  }
  decreaseByTen = e => {
    e.preventDefault()
    if (this.state.gridSize - 10 <= 0) {

    } else {
      const gridSize = this.state.gridSize - 10
      this.setState({
        gridSize
      })
    }
  }

  toggleMove = () => {
    this.setState({
      brush: 'none'
    })
  }
  toggleBrush = () => {
    this.setState({
      brush: 'brush'
    })
  }
  toggleEraser = () => {
    this.setState({
      brush: 'eraser'
    })
  }

  spawnPlayer = () => {
    const player = this.state.player + 1
    this.setState({
      player 
    })
  }
  spawnGoblin = () => {
    const goblin = this.state.goblin + 1
    this.setState({
      goblin
    })
  }
  spawnOrc = () => {
    const orc = this.state.orc + 1
    this.setState({
      orc
    })
  }
  spawnOgre = () => {
    const ogre = this.state.ogre + 1
    this.setState({
      ogre
    })
  }
  spawnBandit = () => {
    const bandit = this.state.bandit + 1
    this.setState({
      bandit
    })
  }
  spawnSkeleton = () => {
    const skeleton = this.state.skeleton + 1
    this.setState({
      skeleton
    })
  }
  spawnCultist = () => {
    const cultist = this.state.cultist + 1
    this.setState({
      cultist
    })
  }


  render() {
    return(
      <MapContext.Provider value={{...this.state, 
        toggleSidebar: this.toggleSidebar, 
        plusTen: this.increaseByTen, minusTen: this.decreaseByTen, 
        formChange: this.handleFormChange, 
        toggleMove: this.toggleMove, 
        toggleBrush: this.toggleBrush, 
        toggleEraser: this.toggleEraser,
        spawnPlayer: this.spawnPlayer,
        spawnGoblin: this.spawnGoblin,
        spawnOrc: this.spawnOrc,
        spawnOgre: this.spawnOgre,
        spawnBandit: this.spawnBandit,
        spawnSkeleton: this.spawnSkeleton,
        spawnCultist: this.spawnCultist,
        }}>
        {this.props.children}
      </MapContext.Provider>
    )
  }
}

export default MapContextProvider