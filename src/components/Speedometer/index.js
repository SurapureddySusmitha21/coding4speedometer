// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  clickAccerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevsState => ({speed: prevsState.speed + 10}))
    }
  }

  clickApplyBrak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevsState => ({speed: prevsState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="imageurl"
          alt="speedometer"
        />
        <div className="container">
          <h1 className="speed-heading">Speed is {speed}mph</h1>
          <p className="speed-paragraph">
            Min Limit is 0mph, Max Limit is 200mph
          </p>
          <div className="btn-container">
            <button
              type="button"
              className="btn-accelater"
              onClick={this.clickAccerate}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="btn-apply"
              onClick={this.clickApplyBrak}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
