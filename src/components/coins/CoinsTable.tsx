import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SpinnerContainer, SpinnerOverlay } from "../spinner/SpinnerComponent.styles";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Tabel from './Table';

export interface Coins {
    id: string,
    symbol: string,
    name: string
}

interface Props {
    isLoading: boolean,
    setIsLoading: (value: boolean) => void;
}
const CoinsTable: React.FC<Props> = () => {
    const [coins, setCoins] = useState<Coins[]>([]);
    const [namefilter, setNameFilter] = useState<string>('');
    const [filteredCoins, setFilteredCoins] = useState<Coins[]>([]);
    const [symbolfilter, setSymbolfilter] = useState<string>('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getCoins() {
            setIsLoading(true);
            await axios.get('https://api.coingecko.com/api/v3/coins/list').then(response => {
                setCoins(response.data);
                setFilteredCoins(response.data);
                setIsLoading(false);
            });
        }
        getCoins()
    }, [])

    const filterCoins = () => {
        setFilteredCoins(coins.filter(coin => coin.name.toLowerCase().indexOf(namefilter.toLocaleLowerCase()) !== -1
            && coin.symbol.toLowerCase().indexOf(symbolfilter.toLocaleLowerCase()) !== -1));
    }
    useEffect(() => {
        console.log(namefilter, symbolfilter);
        filterCoins();
    }, [namefilter, symbolfilter])
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
                                    options={coins.map(coin => coin.name)}
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
                                        />}
                                />
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={coins.map(coin => coin.symbol)}
                                    onChange={(event, newValue) => {
                                        setSymbolfilter(newValue ? newValue : '');
                                    }}
                                    getOptionLabel={(option) => option}
                                    freeSolo
                                    style={{ width: 200, height: 100, margin: '20px' }}
                                    renderInput={(params) => <TextField {...params} label="Symbol" variant="outlined" value={symbolfilter}
                                        onChange={(e) => setSymbolfilter(e.target.value)} />}
                                />
                            </div>

                            {/* <label>nameFilter</label>
                            <input value={namefilter} onChange={(e) => setNameFilter(e.target.value)} /> */}
                            <Tabel rows={filteredCoins} />
                        </div>

                    )}
        </div>
    )
}

export default CoinsTable;
