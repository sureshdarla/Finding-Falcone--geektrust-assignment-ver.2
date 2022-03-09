import {Redirect, useHistory} from 'react-router-dom'

import {Component} from 'react'

import ResultPage from '../ResultPage'

//  import Planets from './components/Planets'
//  import Vehicle from './components/Vehicle'

import './index.css'

const SelectedPlantes = []
const vehiclesSelected = []
const allPlanets = []
const allVehicles = []
const timeTaken = []
// const tokenToFind = ''

class FindingFalcone extends Component {
  state = {
    planets: [],
    vehiclesData: [],
    isFirstPlanetSelected: false,
    isSecondPlanetSelected: false,
    isThirdPlanetSelected: false,
    isFourthPlanetSelected: false,
    isVehicleSelected: false,
    time: 0,
    token: '',
  }

  componentDidMount() {
    this.getPlanetsData()
    this.getVehiclesData()
    this.getTheToken()
  }

  getTheToken = async () => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: '',
    }
    const response = await fetch(
      'https://findfalcone.herokuapp.com/token',
      options,
    )
    const token = await response.json()
    this.setState({token: token.token})

    // console.log('token received', token.token)
  }

  getPlanetsData = async () => {
    const response = await fetch('https://findfalcone.herokuapp.com/planets')
    const planetsData = await response.json()
    planetsData.map(each => allPlanets.push(each))
    console.log('planets call success', allPlanets)
    this.setState({planets: planetsData})
  }

  getVehiclesData = async () => {
    const response = await fetch('https://findfalcone.herokuapp.com/vehicles')
    const vehiclesData = await response.json()
    const updateVehiclesData = vehiclesData.map(eachVehicle => ({
      name: eachVehicle.name,
      totalNo: eachVehicle.total_no,
      maxDistance: eachVehicle.max_distance,
      speed: eachVehicle.speed,
      time: eachVehicle.max_distance / eachVehicle.speed,
    }))

    updateVehiclesData.map(eachVehicle => allVehicles.push(eachVehicle))

    console.log('vehicles call success', allVehicles)
    this.setState({vehiclesData: updateVehiclesData})
  }

  onSelectingFirstPlanet = event => {
    // SelectedPlantes.push(event.target.value)

    if (event.target.value !== 'select') {
      const planetIndex = Number(event.target.getAttribute('data-planet'))
      SelectedPlantes[planetIndex] = event.target.value
      //  console.log(vehiclesSelected)
      console.log(planetIndex)
      //   SelectedPlantes.push(event.target.value)
    }
    console.log(SelectedPlantes)
    console.log(event.target.value)
    this.setState({isFirstPlanetSelected: true})
  }

  renderPlanet1 = (planets, planetIndex) => (
    //    const {planets} = this.state
    <div className="planet-options">
      <select
        className="planets-options"
        data-planet={planetIndex}
        onChange={this.onSelectingFirstPlanet}
      >
        <option>select</option>
        {planets.map((eachPlanet, i) => (
          <option data-planet={planetIndex}>{eachPlanet.name}</option>
        ))}
      </select>
    </div>
  )

  onSelectingSecondPlanet = event => {
    console.log('planet changed')
    // SelectedPlantes.push(event.target.value)
    if (event.target.value !== 'select') {
      const planetIndex = Number(event.target.getAttribute('data-planet'))
      console.log('data attribute', event.target.getAttribute('data-planet'))
      SelectedPlantes[planetIndex] = event.target.value
      //  console.log(vehiclesSelected)
      console.log(planetIndex)
      //   SelectedPlantes.push(event.target.value)
    }
    console.log(SelectedPlantes)
    this.setState({isSecondPlanetSelected: true})
    console.log(event.target.value)
    //  console.log(SelectedPlantes)
  }

  renderPlanet2 = (planets, planetIndex) => (
    //    const {planets} = this.state
    <div className="planet-options">
      <select
        className="planets-options"
        data-planet={planetIndex}
        onChange={this.onSelectingSecondPlanet}
      >
        <option>select</option>
        {planets.map(eachPlanet => (
          <option data-planet={planetIndex}>{eachPlanet.name}</option>
        ))}
      </select>
    </div>
  )

  onSelectingThirdPlanet = event => {
    console.log('planet changed')
    if (event.target.value !== 'select') {
      const planetIndex = Number(event.target.getAttribute('data-planet'))
      SelectedPlantes[planetIndex] = event.target.value
      //  console.log(vehiclesSelected)
      console.log(planetIndex)
      //   SelectedPlantes.push(event.target.value)
    }
    console.log(SelectedPlantes)
    // SelectedPlantes.push(event.target.value)
    this.setState({isThirdPlanetSelected: true})
    console.log(event.target.value)
    console.log(SelectedPlantes)
  }

  renderPlanet3 = (planets, planetIndex) => (
    //    const {planets} = this.state
    <div className="planet-options">
      <select
        className="planets-options"
        data-planet={planetIndex}
        onChange={this.onSelectingThirdPlanet}
      >
        <option>select</option>
        {planets.map(eachPlanet => (
          <option data-planet={planetIndex}>{eachPlanet.name}</option>
        ))}
      </select>
    </div>
  )

  onSelectingFourthPlanet = event => {
    console.log('planet changed')
    if (event.target.value !== 'select') {
      const planetIndex = Number(event.target.getAttribute('data-planet'))
      SelectedPlantes[planetIndex] = event.target.value
      //  console.log(vehiclesSelected)
      console.log(planetIndex)
      //   SelectedPlantes.push(event.target.value)
    }
    console.log(SelectedPlantes)
    this.setState({isFourthPlanetSelected: true})
  }

  renderPlanet4 = (planets, planetIndex) => (
    //    const {planets} = this.state
    <div className="planet-options">
      <select
        className="planets-options"
        data-planet={planetIndex}
        onChange={this.onSelectingFourthPlanet}
      >
        <option>select</option>
        {planets.map(eachPlanet => (
          <option>{eachPlanet.name}</option>
        ))}
      </select>
    </div>
  )

  onSelectingVehicle = event => {
    const {vehiclesData} = this.state
    const vehicleName = event.target.value
    //    vehiclesSelected.push(event.target.value)
    const planetIndex = Number(event.target.getAttribute('data-planet'))
    vehiclesSelected[planetIndex] = event.target.value
    //  console.log(vehiclesSelected)
    console.log(planetIndex)
    console.log(vehiclesSelected)
    const timeToReach = allVehicles.map(
      eachVehicle =>
        (vehicleName === eachVehicle.name && eachVehicle.time: null),
    )
    const timeVar = timeToReach.filter(each => each !== false)

    timeTaken[planetIndex] = timeVar //  here updating timetaken array with new value
    const totalTime = timeTaken.reduce(
      (accumulator, number) => parseInt(accumulator) + parseInt(number),
    )

    this.setState(prevState => ({
      vehiclesData: prevState.vehiclesData.map(eachVehicle => {
        if (vehicleName === eachVehicle.name) {
          //   eachContact.isFavorite = !eachContact.isFavorite
          return {...eachVehicle, totalNo: parseInt(eachVehicle.totalNo) - 1}
        }
        return eachVehicle
      }),
    }))
    console.log(totalTime)
    this.setState({time: totalTime})
  }

  renderVehicles = (vehicles, vehicleNo, planetIndex) => (
    <div className="vehicles">
      {vehicles.map(eachVehicle => (
        <div>
          <input
            type="radio"
            value={eachVehicle.name}
            name={vehicleNo}
            id={eachVehicle.name}
            onChange={this.onSelectingVehicle}
            data-planet={planetIndex}
          />
          <label htmlFor={eachVehicle.name}>
            {eachVehicle.name}({' '}
            <span className="total-number">({eachVehicle.totalNo})</span> )
          </label>
        </div>
      ))}
    </div>
  )

  onSubmitFindFalcone = async event => {
    event.preventDefault()
    const {token} = this.state

    const findData = {
      token,
      planet_names: SelectedPlantes,
      vehicle_names: vehiclesSelected,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(findData),
    }

    const response = await fetch(
      'https://findfalcone.herokuapp.com/find',
      options,
    )
    const data = await response.json()
    console.log(data)
    if (data.status === 'success') {
      //   const history = useHistory()
      //   history.push({
      //     pathname: '/result',

      //     state: {detail: data},
      //   })
      const {history} = this.props
      history.push('/result')
    }
    return <Redirect to="/" />

    // const {history} = this.props
    // history.push('/result')
  }

  render() {
    const {
      planets,
      isFirstPlanetSelected,
      isSecondPlanetSelected,
      isThirdPlanetSelected,
      isFourthPlanetSelected,
      vehiclesData,
      time,
    } = this.state
    //  console.log('vehicles data in render():', vehiclesData)

    return (
      <div>
        <form
          className="from-container form-elements-alignment "
          onSubmit={this.onSubmitFindFalcone}
        >
          <div className="form-elements">
            <h1>Hellelujah</h1>
            <div className="planets-container">
              <div className="planets-options">
                {this.renderPlanet1(planets, 0)}
                {isFirstPlanetSelected
                  ? this.renderVehicles(vehiclesData, 'vehicle1', 0)
                  : null}
              </div>
              <div>
                {this.renderPlanet2(planets, 1)}
                {isSecondPlanetSelected
                  ? this.renderVehicles(vehiclesData, 'vehicle2', 1)
                  : null}
              </div>
              <div>
                {this.renderPlanet3(planets, 2)}
                {isThirdPlanetSelected
                  ? this.renderVehicles(vehiclesData, 'vehicle3', 2)
                  : null}
              </div>
              <div>
                {this.renderPlanet4(planets, 3)}
                {isFourthPlanetSelected
                  ? this.renderVehicles(vehiclesData, 'vehicle4', 3)
                  : null}
              </div>

              <span>Total time :{time}</span>
            </div>
            <div className="button-container">
              <button>FindFalcone</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FindingFalcone
