import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import CardEsqueleton from '../CardEsqueleton';
import ItemsBar from '../ItemsBar';
import { Container } from '../Container/styles';
import {
    Grid,
    Card,
    Delete,
    Date,
    Framework,
    Row,
    Column,
    Temperature,
    TemperatureLabel,
    TemperatureCurrent,
    RealTemperature,
    SourcesList,
    CurrentPlace
} from './styles';

const CORS = 'https://cors-anywhere.herokuapp.com/';

const LOCATIONS = [
    {
        id: 1,
        title: 'Lisbon',
        woeid: '742676'
    },
    {
        id: 2,
        title: 'London',
        woeid: '44418'
    },
    {
        id: 3,
        title: 'Seoul',
        woeid: '1132599'
    },
    {
        id: 4,
        title: 'Moscow',
        woeid: '2122265'
    },
    {
        id: 5,
        title: 'São Paulo',
        woeid: '455827'
    },
];

function App() {
    const [location, setLocation] = useState({ woeid: LOCATIONS[0].woeid, title: LOCATIONS[0].title });
    const [response, setResponse] = useState([]);
    const [sources, setSources] = useState([]);

    const [{ data, loading }] = useAxios(`${CORS}https://www.metaweather.com/api/location/${location.woeid}`);

    useEffect(() => {
        if (data) {
            setResponse(data.consolidated_weather);
            setSources(data.sources);
        }
    }, [data])

    const deleteItem = id => {
        setResponse(response.filter(i => i.id !== id));
    }

    return (
        <Container>
            <ItemsBar items={LOCATIONS} setLocation={setLocation} />
            <CurrentPlace>Showing weather from {location.title}</CurrentPlace>

            {loading ? (
                <Grid>
                    {[1, 2, 3, 4, 5, 6].map(item => <CardEsqueleton key={item} />)}
                </Grid>
            ) : (
                    <Grid>
                        {response?.map((item) => (
                            <Card key={item.id}>
                                <Delete onClick={() => { deleteItem(item.id) }}><FontAwesomeIcon icon={faTimes} /></Delete>
                                <Date>{moment(item.applicable_date).format('DD/MM/YY')} <small>- {moment(item.applicable_date).format('dddd')}</small></Date>
                                <Framework>
                                    <img src={`https://www.metaweather.com/static/img/weather/ico/${item.weather_state_abbr}.ico`} alt={item.weather_state_name} />
                                    <RealTemperature>{item.the_temp.toFixed(0)} <small>°C</small></RealTemperature>
                                </Framework>
                                <Row>
                                    <Column>
                                        <Temperature>
                                            <TemperatureLabel>Min Temp.</TemperatureLabel>
                                            <TemperatureCurrent>{item.min_temp.toFixed(0)} <small>°C</small></TemperatureCurrent>
                                        </Temperature>
                                    </Column>
                                    <Column>
                                        <Temperature>
                                            <TemperatureLabel>Max Temp.</TemperatureLabel>
                                            <TemperatureCurrent>{item.max_temp.toFixed(0)} <small>°C</small></TemperatureCurrent>
                                        </Temperature>
                                    </Column>
                                    <Column>
                                        <Temperature>
                                            <TemperatureLabel>Wind Speed</TemperatureLabel>
                                            <TemperatureCurrent>{item.wind_speed.toFixed(0)} <small>km/h</small></TemperatureCurrent>
                                        </Temperature>
                                    </Column>
                                    <Column>
                                        <Temperature>
                                            <TemperatureLabel>Humidity</TemperatureLabel>
                                            <TemperatureCurrent>{item.humidity.toFixed(0)} <small>%</small></TemperatureCurrent>
                                        </Temperature>
                                    </Column>
                                </Row>
                            </Card>
                        ))}
                    </Grid>
                )}

            <SourcesList>
                <li>Sources:</li>
                {sources?.map(source => <li key={source.slug}><a href={source.url} title={source.title} target="_blank" rel="noopener noreferrer">{source.title}</a></li>)}
            </SourcesList>
        </Container>
    );
}

export default App;
