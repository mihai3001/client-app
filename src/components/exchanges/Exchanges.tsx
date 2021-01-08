import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { SpinnerContainer, SpinnerOverlay } from '../spinner/SpinnerComponent.styles';
import Tabel from './Table';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
interface iExchanges {
    id: string,
    name: string,
    year_established: number,
    country: string,
    description: string,
    url: string,
    image: string,
    has_trading_incentive: boolean,
    trust_score: number,
    trust_score_rank: number,
    trade_volume_24h_btc: number,
    trade_volume_24h_btc_normalized: number
}

const Exchanges: React.FC = () => {
    const [exchanges, setExchanges] = useState<iExchanges[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filteredExchanges, setFilteredExchanges] = useState<iExchanges[]>([]);
    const [namefilter, setNameFilter] = useState<string>('');
    const [countryFilter, setCountryFilter] = useState<string>('');

    useEffect(() => {
        setIsLoading(true);
        async function getExchanges() {
            await axios.get('https://api.coingecko.com/api/v3/exchanges?per_page=250').then(response => {
                setExchanges(response.data);
                setFilteredExchanges(response.data)
                setIsLoading(false);
            });
        }
        getExchanges()
    }, [])

    const filterExchanges = () => {
        console.log(namefilter, countryFilter, exchanges)
        const filteredExchanges = exchanges.filter(exchange =>
            exchange.name &&
            exchange.name.toLowerCase().indexOf(namefilter.toLocaleLowerCase()) !== -1 &&
            exchange.country &&
            exchange.country.toLocaleLowerCase().indexOf(countryFilter.toLocaleLowerCase()) !== -1);
        setFilteredExchanges(filteredExchanges);
    }
    useEffect(() => {
        filterExchanges();
    }, [namefilter, countryFilter])

    return (
        <div>
            {
                isLoading ? (
                    <SpinnerOverlay>
                        <SpinnerContainer />
                    </SpinnerOverlay >) : (
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', flex: '0 1 auto', width: '100%' }}>

                                <Autocomplete
                                    id="combo-box-demo"
                                    options={exchanges.map(exchange => exchange.name)}
                                    getOptionLabel={(option) => option}
                                    freeSolo
                                    onChange={(event, newValue) => {
                                        setNameFilter(newValue ? newValue : '');
                                    }}
                                    style={{ width: 300, height: 100, margin: '20px' }}
                                    renderInput={(params) =>
                                        <TextField {...params} label="Name" variant="outlined"
                                            value={namefilter}
                                            onChange={(e) => setNameFilter(e.target.value)}
                                        />} />

                                <Autocomplete
                                    id="combo-box-demo"
                                    options={exchanges.map(exchange => exchange.country ? exchange.country : '')}
                                    getOptionLabel={(option) => option}
                                    freeSolo
                                    onChange={(event, newValue) => {
                                        setNameFilter(newValue ? newValue : '');
                                    }}
                                    style={{ width: 300, height: 100, margin: '20px' }}
                                    renderInput={(params) =>
                                        <TextField {...params} label="Country" variant="outlined"
                                            value={countryFilter}
                                            onChange={(e) => setCountryFilter(e.target.value)}
                                        />} />

                                </div>
                            <Tabel rows={filteredExchanges} />
                        </div>

                    )}
        </div>
    )
}

export default Exchanges
