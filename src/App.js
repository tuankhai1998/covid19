import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';


import Logo from './image.png';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

const url = 'https://covid19.mathdro.id/api';

function App() {
    const [data, setData] = useState({});
    const [dailyData, setDailyData] = useState([]);
    const [country, setCountry] = useState('');
    const [allCountry, setAllCountry] = useState([]);


    let urlChange = url;

    const fetchData = async (country) => {
        if (country || country !== "") {
            urlChange = `${url}/countries/${country}`
        }

        try {
            let response = await fetch(urlChange);
            let responseJSON = await response.json();
            const { confirmed, recovered, deaths, lastUpdate } = responseJSON
            const clearData = { confirmed: confirmed.value, recovered: recovered.value, deaths: deaths.value, lastUpdate }

            await setData(clearData);

        } catch (error) {
            console.log(error)
        }

    }


    const fetchDailyData = async () => {
        try {
            let response = await fetch(`${url}/daily`);
            let responseJSON = await response.json();
            let arrayConvert = [];
            Object.keys(responseJSON).map(function (key) {
                arrayConvert = [...arrayConvert, responseJSON[key]]
                return 0;
            });


            await setDailyData(arrayConvert);
        } catch (error) {
            console.log(error)

        }
    }


    const fetchFullCountries = async () => {
        try {
            let response = await fetch(`${url}/countries`);
            let responseJSON = await response.json();
            let { countries } = responseJSON;
            // console.log(countries)
            setAllCountry(countries)
        }
        catch (error) {
            console.log(error)
        }

    }

    // console.log(dailyData.map((data) => data.totalConfirmed))

    useEffect(() => {
        fetchData(country);
        return () => {

        };
    }, [country]);

    useEffect(() => {
        fetchFullCountries();
        fetchDailyData();
    }, [])


    const handleCountyChange = (data) => {
        // console.log(data)
        setCountry(data);
    }


    return (
        <div className={styles.container} >
            <Container maxWidth="md">
                <img className={styles.Logo} src={Logo} alt="" />
                <Cards data={data} />
                <CountryPicker countries={allCountry} handleContryChange={handleCountyChange} />
                <Chart data={dailyData} country={country} dataCountry={data} />
            </Container>
        </div>
    );
}

export default App;
