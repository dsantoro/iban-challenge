import React from 'react';
import { Card, Date, DateMock, Framework, FrameworkMock, Row, Column, Temperature, TemperatureMock, TemperatureLabel, TemperatureCurrent } from './styles';

function CardEsqueleton() {
    return (
        <Card>
            <Date><DateMock /></Date>
            <Framework><FrameworkMock /></Framework>
            <Row>
                <Column>
                    <Temperature>
                        <TemperatureLabel>Min Temp.</TemperatureLabel>
                        <TemperatureCurrent><TemperatureMock /></TemperatureCurrent>
                    </Temperature>
                </Column>
                <Column>
                    <Temperature>
                        <TemperatureLabel>Max Temp.</TemperatureLabel>
                        <TemperatureCurrent><TemperatureMock /></TemperatureCurrent>
                    </Temperature>
                </Column>
                <Column>
                    <Temperature>
                        <TemperatureLabel>Wind Speed</TemperatureLabel>
                        <TemperatureCurrent><TemperatureMock /></TemperatureCurrent>
                    </Temperature>
                </Column>
                <Column>
                    <Temperature>
                        <TemperatureLabel>Humidity</TemperatureLabel>
                        <TemperatureCurrent><TemperatureMock /></TemperatureCurrent>
                    </Temperature>
                </Column>
            </Row>
        </Card>
    )
}

export default CardEsqueleton;