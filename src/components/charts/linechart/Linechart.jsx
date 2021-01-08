import axios from "axios";
import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import {
  SpinnerContainer,
  SpinnerOverlay,
} from "../../spinner/SpinnerComponent.styles";
// import useChartConfig from "../useChartConfig";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Tabel from "./Table";
import { Add } from "@material-ui/icons";
export default function LineChart() {
  const [coinsList, setCoinsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [coinsOnGraph, setCoinsOnGraph] = useState([]);

  const [cryptoDictionary, setCryptoDictionary] = useState({});
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    setLoading(true);
    async function getCoins() {
      await axios
        .get("https://api.coingecko.com/api/v3/coins/list")
        .then((response) => {
          setCoinsList(response.data.map((coin) => coin.id));
        });
    }
    getCoins();
    setLoading(false);
  }, []);

  const startTime = 1104537600;
  const endTime = new Date().getTime();

  const addNewCrypto = async (cryptoName) => {
    if (coinsList.indexOf(cryptoName) < 0) {
      alert("Invalid value");
      return;
    }
    if (!(cryptoName in cryptoDictionary)) {
      try {
        await axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart/range?vs_currency=usd&from=${startTime}&to=${endTime}`
          )
          .then((response) => {
            var aux = cryptoDictionary;
            aux[cryptoName] = {
              label: cryptoName,
              prices: {
                label: cryptoName,
                datums: response.data["prices"].map((resp) => {
                  return {
                    x: resp[0],
                    y: resp[1],
                  };
                }),
              },
              volumes: {
                label: cryptoName,
                datums: response.data["total_volumes"].map((resp) => {
                  return {
                    x: resp[0],
                    y: resp[1],
                  };
                }),
              },
              market_caps: {
                label: cryptoName,
                datums: response.data["market_caps"].map((resp) => {
                  return {
                    x: resp[0],
                    y: resp[1],
                  };
                }),
              },
            };
            setCryptoDictionary(aux);
            const counter = coinsOnGraph.filter(
              (coin) => coin.label === cryptoName
            );
            if (counter.length === 0) {
              setCoinsOnGraph([...coinsOnGraph, aux[cryptoName]]);
            }
          });
      } catch (error) {
        alert(error);
      }
    } else {
      const counter = coinsOnGraph.filter((coin) => coin.label === cryptoName);
      if (counter.length === 0) {
        setCoinsOnGraph([...coinsOnGraph, cryptoDictionary[cryptoName]]);
      }
    }

    console.log(cryptoDictionary);
    console.log(coinsOnGraph);
  };
  var data = {};
  useEffect(() => {
    data = {
      labels: [],
      datasets: [],
    };
    // for(var i = 0; i< coinsOnGraph; i++){
    //     data.labels.push(coinsOnGraph[i].label);
    //     data.datasets.push( {

    //     })
    // }
  }, [coinsOnGraph]);
  const colors = [
    "aliceblue",
    "aqua",
    "azure",
    "beige",
    "brown",
    "black",
    "blue",
    "blueviolet",
    "coral",
    "cyan",
    "darkblue",
    "forestgreen",
    "fuchsia",
    "gold",
    "darkturquoise",
  ];
  var usedColors = [];
  const dataset = {
    datasets: coinsOnGraph.map((coin) => {
      var thisColor = colors[Math.floor(Math.random() * colors.length)];
      while (thisColor in usedColors) {
        thisColor = colors[Math.floor(Math.random() * colors.length)];
      }
      usedColors.push(thisColor);
      return {
        label: coin.label,
        data: coin.prices.datums,
        // pointBackgroundColor: Math.floor(Math.random()*16777215).toString(16),
        pointBorderColor: thisColor,
      };
    }),
  };
  return (
    <div>
      {loading ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: "100%", height: "400px" }}>
            {/* <Chart data={data} series={series} axes={axes} tooltip /> */}
            {
                <Scatter data={dataset} width={"800px"} height={"200px"}  />
            }
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "row", marginTop:'80px' }}>
              <Autocomplete
                id="combo-box-demo"
                options={coinsList}
                getOptionLabel={(option) => option}
                freeSolo
                onChange={(event, newValue) => {
                  setSearchField(newValue ? newValue : "");
                }}
                style={{ width: 300, height: 100, margin: "20px" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Crypto Name"
                    variant="outlined"
                    value={searchField}
                    onChange={(e) => setSearchField(e.target.value)}
                  />
                )}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => addNewCrypto(searchField)}
                style={{ maxHeight: "50px", marginTop: "20px" }}
              >
                <AddIcon />
              </Button>
            </div>
          </div>
          <div>
            <Tabel rows={coinsOnGraph} setCoinsOnGraph={setCoinsOnGraph} />
          </div>
        </div>
      )}
    </div>
  );
}
