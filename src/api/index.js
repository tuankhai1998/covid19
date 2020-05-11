import axios from 'axios';


const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        const respones = {
            nhiem: confirmed,
            khoi: recovered,
            chet: deaths,
            ngayUpdate: lastUpdate
        };


        return respones;
    } catch (error) {
        console.log(error);
    }
}
// {confirmed,recovered,deaths,lastUpdate}