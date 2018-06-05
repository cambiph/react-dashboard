import {Component} from 'react'
import Widget from '../../widget'
import Clock from 'react-live-clock'
import Weather from '../weather'

export default class Date extends Component {
    render() {
        return <Widget>
            <div style={{fontSize: '4em', textAlign: 'center'}}>
                <Clock
                    format={'HH:mm:ss'}
                    ticking={true}
                    timezone={'Europe/Brussels'}/>
            </div>
            <div style={{fontSize: '1em', textAlign: 'center'}}>
                <Clock
                    format={'ddd, d MMMM YYYY'}
                    timezone={'Europe/Brussels'}/>
            </div>
            <div>
              <Weather
                city='Mechelen'
                units='metric'
                apiKey='c3a848060e0570d311a3b93c4d6a6eb1'
              />
            </div>
        </Widget>
    }
}
