import { useState } from "react";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  let fortnight = new Date(startDate);
  fortnight.setDate(fortnight.getDate() + 13);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DatePicker
        selected={startDate}
        selectsStart
        startDate={startDate}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        isClearable
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker
        selected={endDate}
        dateFormat="dd/MM/yyyy"
        selectsEnd
        isClearable
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={fortnight}
        onChange={(date) => setEndDate(date)}
      />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
