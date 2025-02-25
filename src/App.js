import { useEffect, useState } from 'react';

const data = [
  {
    id: '1',
    name: 'Pilsner',
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
  {
    id: '2',
    name: 'IPA',
    minimumTemperature: 5,
    maximumTemperature: 6,
  },
  {
    id: '3',
    name: 'Lager',
    minimumTemperature: 4,
    maximumTemperature: 7,
  },
  {
    id: '4',
    name: 'Stout',
    minimumTemperature: 6,
    maximumTemperature: 8,
  },
  {
    id: '5',
    name: 'Wheat beer',
    minimumTemperature: 3,
    maximumTemperature: 5,
  },
  {
    id: '6',
    name: 'Pale Ale',
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
];

function App() {
  const [items, setItems] = useState({});

  useEffect(() => {
    const request = () =>
        fetch(`http://localhost:8081/products`)
          .then((response) => response.json())
          .then((response) =>{
            setItems(() => response)
          }
          
          );
    setInterval(request, 5000);
    request();
  }, []);

  return (
    <div className="App">
      <h2>Beers</h2>
      <table>
        <thead>
          <tr>
          <th align="left">Product Id </th>
            <th align="left">Product Name</th>
            <th align="left">Min Temperature</th>
            <th align="left">Max Temperature</th>
            <th align="left">Current Temperature</th>
            <th align="left"> Temperature Range Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((itemKey) => (
            <tr key={items[itemKey].id}>
              <td width={150}>{items[itemKey].id}</td>
              <td width={150}>{items[itemKey].name}</td>
              <td width={150}>{items[itemKey].minTemperature}</td>
              <td width={150}>{items[itemKey].maxTemperature}</td>
              <td width={150}>{items[itemKey].temperature}</td>
              <td width={250}>{items[itemKey].tempRangeStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
