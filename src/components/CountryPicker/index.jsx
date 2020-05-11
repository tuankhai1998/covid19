import React from 'react';
import { NativeSelect, FormControl, Grid } from '@material-ui/core';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ countries, handleContryChange }) => {
    return (
        <Grid container justify="center" alignItems="center" className={styles.country}>
            <FormControl className={styles.country_form} >
                <NativeSelect defaultValue="" onChange={(e) => handleContryChange(e.target.value)}>
                    <option value=""> Global</option>
                    {countries.map((country, index) => <option key={index} value={country.name}>{country.name}</option>)}
                </NativeSelect >
            </FormControl >
        </Grid >
    );
}

export default CountryPicker;
