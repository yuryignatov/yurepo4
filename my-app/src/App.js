import React from 'react'
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'
export default function App() {
  const data = [
    'Москва',
    'Токио',
    'Иркутск',
    'Вашингтон',
    'Сидней',
    'Варшава',
    'Бейрут'
  ]
  return (
<ComboBox options={data} enableAutocomplete />
);
}

export {App};
