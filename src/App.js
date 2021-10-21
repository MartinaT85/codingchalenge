import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

export default function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const [profit, setProfit] = useState();
  const tomorrow = new Date(startDate);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fortnight = new Date(startDate);
  fortnight.setDate(fortnight.getDate() + 13);

  // let randomArray = Array.from(
  //   { length: 14 },
  //   () => Math.floor(Math.random() * 10) + 1
  // ).join(", ");

  // function maxProfit(stockPrices) {
  //   if (stockPrices === 0 || stockPrices.length === 0) {
  //     return 0;
  //   }
  //   let buyPrice = stockPrices[0];
  //   let profit = 0;
  //   for (let i = 0; i < stockPrices.length - 1; i++) {
  //     let tempProfit = stockPrices[i + 1] - stockPrices[i];
  //     if (tempProfit > 0) {
  //       if (stockPrices[i] < buyPrice) {
  //         buyPrice = stockPrices[i];
  //       }
  //       if (stockPrices[i + 1] - buyPrice > profit) {
  //         profit = stockPrices[i + 1] - buyPrice;
  //       }
  //     }
  //   }
  //   if (profit < buyPrice) {
  //     return console.log(`Sorry, no profit for you`);
  //   }
  //   return profit;
  // }

  const data = () => {
    let randomArray = Array.from(
      { length: 14 },
      () => Math.floor(Math.random() * 10) + 1
    ).join(", ");

    const maxProfit = (stockPrices) => {
      if (stockPrices === 0 || stockPrices.length === 0) {
        return 0;
      }
      let buyPrice = stockPrices[0];
      let profit = 0;
      for (let i = 0; i < stockPrices.length - 1; i++) {
        let tempProfit = stockPrices[i + 1] - stockPrices[i];
        if (tempProfit > 0) {
          if (stockPrices[i] < buyPrice) {
            buyPrice = stockPrices[i];
          }
          if (stockPrices[i + 1] - buyPrice > profit) {
            profit = stockPrices[i + 1] - buyPrice;
          }
        }
      }
      if (profit < buyPrice) {
        return console.log(`Sorry, no profit for you`);
      }
      return [profit, stockPrices];
    };
    const data1 = maxProfit(randomArray);
    return data1;
  };

  const frdata = data();
  console.log(frdata);

  // console.log(maxProfit([7,1,5,3,6,4]));

  return (
    <div className="App">
      <h1>Best Day to buy and to sell</h1>
      <DatePicker
        placeholderText="Choose best day to buy"
        selected={startDate}
        selectsStart
        startDate={startDate}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        isClearable
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker
        placeholderText="Choose best day to sell"
        selected={endDate}
        dateFormat="dd/MM/yyyy"
        selectsEnd
        isClearable
        startDate={startDate}
        endDate={endDate}
        minDate={tomorrow}
        maxDate={fortnight}
        onChange={(date) => setEndDate(date)}
      />
      <h2>Highest Profit to be made is {frdata[0]} </h2>
      <h3>Stock Prices for 14 days: {frdata[1]}</h3>
    </div>
  );
}

// still not working properly 🤦🏻‍♀️
