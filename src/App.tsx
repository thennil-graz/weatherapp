import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Select from 'react-select/async';
import { searchLocation, getDailyWeatherForecast } from './api/AccuWeatherApi';
import { LocationAPIResponse, ForecastInfo } from './types';
import './App.css';
import { SingleValue } from 'react-select';
import ForecastCard from './components/ForecastCard';

function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string | null | undefined>(null);
  const [forecasts, setForecasts] = useState<ForecastInfo[]>([]);

  const loadLocations = (query: string, callback: (options: any) => void) => {
    searchLocation(query).then(response => {
      callback(response.data)
    })
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
  };

  const handleOnChange = (value: SingleValue<LocationAPIResponse>) => {
    setSelected(value?.Key);
    console.log('onchange ', selected)
  };

  useEffect(() => {
    console.log(selected);
    if (selected) {
      getDailyWeatherForecast(selected).then(response => {
        const items = response.data.DailyForecasts;
        //return only 3 items
        items.splice(3, 2);

        setForecasts(items);
      }).catch(err => {
        setSelected(null);
        setForecasts([]);
      });
    }
  }, [selected])

  return (
    <div className="App">
      <Container fluid="md">
        <Row>
          <h1> Select your Location</h1>
        </Row>
        <Row className="md-6">
          <Col md={6}>
            <Select
              cacheOptions
              onChange={handleOnChange}
              onInputChange={handleInputChange}
              loadOptions={loadLocations}
              getOptionLabel={(e: LocationAPIResponse) => `${e.AdministrativeArea.LocalizedName} ${e.Country.LocalizedName}`}
              getOptionValue={(e: LocationAPIResponse) => e.Key}
            />
          </Col>
        </Row>
        <Row>
          {forecasts.length === 0 ?
            <span>No results available</span>
            : forecasts.map(info => <ForecastCard {...info} />)
          }
        </Row>
      </Container>
    </div>
  );
}

export default App;
