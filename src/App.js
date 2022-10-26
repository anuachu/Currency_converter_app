import './App.css';
import CurrencyInput from "./CurrencyInput";
import {useEffect, useState} from "react";
import axios from "axios";
import env from "react-dotenv";
import { Routes, Route, Link} from 'react-router-dom'
import CreditCard from './CreditCardInput';
import { render } from '@testing-library/react';


function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(2);
  const [currency1, setCurrency1] = useState('AUD');
  const [currency2, setCurrency2] = useState('INR');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    // axios.get('https://api.apilayer.com/exchangerates_data/latest?base=AUD&apikey=jILmckX9x5WlPxtc30b9jPcq43UcWpOr')
    // .then(response => {
    // var result = response.data.rates
    // console.log(result)
    var object = {
      AED: 2.324449,
      AFN: 54.109914,
      ALL: 74.958472,
      AMD: 254.607857,
      ANG: 1.134894,
      AOA: 288.197141,
      ARS: 97.861647,
      AUD: 1,
      AWG: 1.14036,
      AZN: 1.060183,
      BAM: 1.253781,
      BBD: 1.271475,
      BDT: 64.050861,
      BGN: 1.253725,
      BHD: 0.238598,
      BIF: 1297.934327,
      BMD: 0.63283,
      BND: 0.895814,
      BOB: 4.351249,
      BRL: 3.358808,
      BSD: 0.62973,
      BTC: 0.000032758343,
      BTN: 52.102448,
      BWP: 8.486411,
      BYN: 1.596931,
      BYR: 12403.467972,
      BZD: 1.269276,
      CAD: 0.866531,
      CDF: 1281.480806,
      CHF
      : 
      0.632441,
      CLF
      : 
      0.022631,
      CLP
      : 
      624.445181,
      CNY
      : 
      4.596223,
      COP
      : 
      3157.821693,
      CRC
      : 
      391.380699,
      CUC
      : 
      0.63283,
      CUP
      : 
      16.769995,
      CVE
      : 
      70.971717,
      CZK
      : 
      15.662607,
      DJF
      : 
      112.46648,
      DKK
      : 
      4.761014,
      DOP
      : 
      34.178965,
      DZD
      : 
      88.770229,
      EGP
      : 
      12.437325,
      ERN
      : 
      9.49245,
      ETB
      : 
      33.408607,
      EUR
      : 
      0.640009,
      FJD
      : 
      1.461553,
      FKP
      : 
      0.558488,
      GBP
      : 
      0.559494,
      GEL
      : 
      1.746588,
      GGP
      : 
      0.558488,
      GHS
      : 
      8.70122,
      GIP
      : 
      0.558488,
      GMD
      : 
      36.704271,
      GNF
      : 
      5537.262292,
      GTQ
      : 
      4.936848,
      GYD
      : 
      131.751428,
      HKD
      : 
      4.967554,
      HNL
      : 
      15.681743,
      HRK
      : 
      4.822039,
      HTG
      : 
      80.91375,
      HUF
      : 
      265.08932,
      IDR
      : 
      9870.882318,
      ILS
      : 
      2.250388,
      IMP
      : 
      0.558488,
      INR
      : 
      52.374118,
      IQD
      : 
      923.931798,
      IRR
      : 
      26768.709064,
      ISK
      : 
      91.197258,
      JEP
      : 
      0.558488,
      JMD
      : 
      96.222161,
      JOD
      : 
      0.448673,
      JPY
      : 
      94.190629,
      KES
      : 
      76.702499,
      KGS
      : 
      52.291248,
      KHR
      : 
      2626.877299,
      KMF
      : 
      315.686992,
      KPW
      : 
      569.546912,
      KRW
      : 
      914.190765,
      KWD
      : 
      0.196392,
      KYD
      : 
      0.524711,
      KZT
      : 
      298.033912,
      LAK
      : 
      10691.662863,
      LBP
      : 
      957.629864,
      LKR
      : 
      231.122829,
      LRD
      : 
      97.171051,
      LSL
      : 
      11.662927,
      LTL
      : 
      1.868582,
      LVL
      : 
      0.382793,
      LYD
      : 
      3.173617,
      MAD
      : 
      6.926305,
      MDL
      : 
      12.200167,
      MGA
      : 
      2688.262094,
      MKD
      : 
      39.492786,
      MMK
      : 
      1322.500671,
      MNT
      : 
      2126.16651,
      MOP
      : 
      5.091361,
      MRO
      : 
      225.920201,
      MUR
      : 
      28.001582,
      MVR
      : 
      9.742419,
      MWK
      : 
      647.06639,
      MXN
      : 
      12.609643,
      MYR
      : 
      2.998342,
      MZN
      : 
      40.393375,
      NAD
      : 
      11.663,
      NGN
      : 
      276.546805,
      NIO
      : 
      22.823011,
      NOK
      : 
      6.64324,
      NPR
      : 
      83.363648,
      NZD
      : 
      1.109496,
      OMR
      : 
      0.243656,
      PAB
      : 
      0.629698,
      PEN
      : 
      2.529436,
      PGK
      : 
      2.229144,
      PHP
      : 
      37.324301,
      PKR
      : 
      139.222775,
      PLN
      : 
      3.063022,
      PYG
      : 
      4558.281311,
      QAR
      : 
      2.304292,
      RON
      : 
      3.143394,
      RSD
      : 
      75.091708,
      RUB
      : 
      38.760614,
      RWF
      : 
      662.889424,
      SAR
      : 
      2.378494,
      SBD
      : 
      5.176718,
      SCR
      : 
      8.45489,
      SDG
      : 
      360.712926,
      SEK
      : 
      7.050343,
      SGD
      : 
      0.89959,
      SHP
      : 
      0.871659,
      SLL
      : 
      10837.213788,
      SOS
      : 
      359.756575,
      SRD
      : 
      18.050527,
      STD
      : 
      13098.303292,
      SVC
      : 
      5.509838,
      SYP
      : 
      1590.004378,
      SZL
      : 
      11.650474,
      THB
      : 
      24.192945,
      TJS
      : 
      6.335192,
      TMT
      : 
      2.221233,
      TND
      : 
      2.050399,
      TOP
      : 
      1.535181,
      TRY
      : 
      11.77956,
      TTD
      : 
      4.270794,
      TWD
      : 
      20.457433,
      TZS
      : 
      1475.759535,
      UAH
      : 
      23.258039,
      UGX
      : 
      2402.35824,
      USD
      : 
      0.63283,
      UYU
      : 
      25.955089,
      UZS
      : 
      7046.56218,
      VND
      : 
      15728.989614,
      VUV
      : 
      79.198605,
      WST
      : 
      1.800361,
      XAF
      : 
      420.510728,
      XAG
      : 
      0.032746,
      XAU
      : 
      0.000383,
      XCD
      : 
      1.710255,
      XDR
      : 
      0.494779,
      XOF
      : 
      421.147062,
      XPF
      : 
      76.778103,
      YER
      : 
      158.365681,
      ZAR
      : 
      11.654371,
      ZMK
      : 
      5696.233451,
      ZMW
      : 
      10.085752,
      ZWL
      : 
      203.771001,
    }
      
    setRates(object);
    //})
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }

  
 
  
  return (
    
    <div className="App">
      <h1>Currency Converter</h1>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)} 
        amount={amount1} 
        currency={currency1}
      />
      <CurrencyInput 
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)} 
        amount={amount2} 
        currency={currency2}
        
      />
      <p>Convertion charge 35 Dollars</p>
      {/* <button onClick={routeChange}>Get Started</button> */}
      <Link to='/CreditCardInput'>Get started</Link>
      <Routes>
        <Route path='/CreditCardInput' element={ <CreditCard />}/>
      </Routes>
      
      </div>

  );
        
}

export default App;
