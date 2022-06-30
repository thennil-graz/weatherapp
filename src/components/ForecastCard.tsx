import React from 'react';
import { Col, Card, Image, Stack, Row } from 'react-bootstrap';
import Moment from 'moment';
import { ForecastInfo } from '../types';
import { api } from '../api/config';
import './ForecastCard.scss'


const weatherIcon = (icon: number, alt: string) => {
    const iconName = icon < 10 ? `0${icon}` : icon;
    return <Image src={`${api.iconUrl}/${iconName}-s.png`} alt={alt}></Image>
}

function ForecastCard(info: ForecastInfo) {
    const { EpochDate: epochDate, Temperature: temperature, Day: day, Night: night } = info;
    const celciusIcon = <Image src={'../assets/celsius.svg'} alt="celsius" />;

    return (
        <Col className="gy-3">
            <Card id={epochDate.toLocaleString()} className="shadow">
                <Card.Body>
                    <div id="temperature">
                        <Card.Title>
                            {temperature.Minimum.Value}{celciusIcon} - {temperature.Maximum.Value}{celciusIcon}
                        </Card.Title>
                    </div>
                    <Card.Text>{Moment.unix(epochDate).format('MMMM Do YYYY')}</Card.Text>
                    <Stack gap={3}>
                        <div className="card-inner">
                            <Card.Title>Day</Card.Title>
                            <Row className='info'>
                                <Col>{weatherIcon(day.Icon, day.IconPhrase)}</Col>
                                <Col xs={7}><Card.Text>{day.LongPhrase}</Card.Text></Col>
                            </Row>
                        </div>
                        <div className="card-inner">
                            <Card.Title>Night</Card.Title>
                            <Row className='info'>
                                <Col>{weatherIcon(night.Icon, night.IconPhrase)}</Col>
                                <Col xs={7}><Card.Text>{night.LongPhrase}</Card.Text></Col>
                            </Row>
                        </div>
                    </Stack>
                </Card.Body>
            </Card>
        </Col >
    );
}

export default ForecastCard;