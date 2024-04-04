// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  coinClicked = () => {
    const randomNumber = Math.floor(Math.random() * 2)

    if (randomNumber === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        totalCount: prevState.totalCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        totalCount: prevState.totalCount + 1,
      }))
    }
  }

  render() {
    const {headsCount, imgUrl, tailsCount, totalCount} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {headsCount === 0 ? (
            <img className="image" alt="toss result" src={imgUrl} />
          ) : (
            <img className="image" alt="toss result" src={imgUrl} />
          )}

          <button
            type="button"
            className="toss-button"
            onClick={this.coinClicked}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {headsCount}</p>
            <p className="result">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
