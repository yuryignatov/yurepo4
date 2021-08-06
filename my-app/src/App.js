
import React, { useState } from "react";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";


export default function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [highlightedOption, setHighlightedOption] = useState("");

  const options = [
    'Москва',
    'Токио',
    'Иркутск',
    'Вашингтон',
    'Сидней',
    'Варшава',
    'Бейрут'
  ];
  return (
    <div className="App">
      <h1>React Combo Box</h1>
      <p>
        The selected option -{" "}
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {selectedOption.length > 0 ? selectedOption : "None"}
        </span>
      </p>
      <p>
        The highlighted option -{" "}
        <span style={{ fontWeight: "bold" }}>
          {" "}
          {highlightedOption.length > 0 ? highlightedOption : "None"}
        </span>
      </p>
      <ComboBox
        options={options}
        placeholder=""
        defaultIndex={4}
        optionsListMaxHeight={300}
        style={{
          width: "350px",
          margin: "0 auto",
          marginTop: "50px"
        }}
        focusColor="#20C374"
        renderOptions={(option) => (
          <div className="comboBoxOption">{option}</div>
        )}
        onSelect={(option) => setSelectedOption(option)}
        onChange={(event) => console.log(event.target.value)}
        enableAutocomplete
        onOptionsChange={(option) => setHighlightedOption(option)}
      />
    </div>
  );
}

