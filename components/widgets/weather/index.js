import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import yup from 'yup'

const schema = yup.object().shape({
  city: yup.string().required(),
  units: yup.string().required(),
  apiKey: yup.string().required()
})

export default class Weather extends Component {
  static defaultProps = {
    interval: 1000 * 60 * 5
  }

  state = {
    temp: 0
  }

  componentDidMount () {
    schema.validate(this.props)
      .then(() => this.fetchInformation())
      .catch((err) => {
        console.error(`${err.name} @ ${this.constructor.name}`, err.errors)
      })
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  async fetchInformation () {
    const {city, units, apiKey} = this.props

    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`)
      const json = await res.json()

      this.setState({temp: json.main.temp})
    } finally {
      this.timeout = setTimeout(() => this.fetchInformation(), this.props.interval)
    }
  }

  render () {
    const {temp} = this.state
    return (
      <div>
        <span>{Math.round(temp)}°C</span>
      </div>
    )
  }
}
