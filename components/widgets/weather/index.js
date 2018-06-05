import {Component} from 'react'
import fetch from 'isomorphic-unfetch'
import yup from 'yup'
import Widget from '../../widget'
import Temperature from '../../temperature'

const schema = yup.object().shape({
    city: yup.string().required(),
    units: yup.string(),
    apiKey: yup.string()
})

export default class Weather extends Component {
    static defaultProps = {
        interval: 1000 * 60 * 5,
        title: 'Weather'
    }

    state = {
        temp: 0,
        error: false,
        loading: true
    }

    componentDidMount() {
        schema.validate(this.props)
            .then(() => this.fetchInformation())
            .catch((err) => {
                console.error(`${err.name} @ ${this.constructor.name}`, err.errors)
                this.setState({error: true, loading: false})
            })
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    async fetchInformation() {
        const {city, units, apiKey} = this.props

        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`)
            const json = await res.json()

            this.setState({temp: json.main.temp, error: false, loading: false})
        } catch (error) {
            this.setState({error: true, loading: false})
        } finally {
            this.timeout = setTimeout(() => this.fetchInformation(), this.props.interval)
        }
    }

    render() {
        const {temp, error, loading} = this.state
        const {title} = this.props
        return (
            <Widget title={title} loading={loading} error={error}>
                <Temperature value={Math.round(temp)}/>
            </Widget>
        )
    }
}
