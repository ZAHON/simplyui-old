# Table

Render table with theme styles

## Import

```jsx
import { Table } from '@simplyui/react';
```

## Usage

```jsx
import { Table } from '@simplyui/react';

function Demo() {
  return (
    <Table>
      <caption>Some elements from periodic table</caption>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2</td>
          <td>Helium</td>
          <td>He</td>
          <td>4.0026</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Carbon</td>
          <td>C</td>
          <td>12.011</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Nitrogen</td>
          <td>N</td>
          <td>14.007</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Magnesium</td>
          <td>Mg</td>
          <td>24.305</td>
        </tr>
        <tr>
          <td>19</td>
          <td>Potassium</td>
          <td>K</td>
          <td>39.0983</td>
        </tr>
        <tr>
          <td>29</td>
          <td>Copper</td>
          <td>Cu</td>
          <td>63.55</td>
        </tr>
      </tbody>
    </Table>
  );
}
```
