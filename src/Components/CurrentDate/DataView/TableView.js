import React, { useState } from 'react';

import { Table } from '@mantine/core';
import useTableViewStyles  from './TabelViewStyle';

function TableView() {

   
  
    // TODO: implement Database request
   const [tracks, setTracks] = useState({tracksSum: 0 , tracksKmSum:0 })
  

  
    return (
        <Table >
        <thead >
          <tr>
            <th>Strecken</th>
          </tr>
          <tr>
            <th>Gesamt</th>
            <td>{tracks.tracksSum}</td>
          </tr>
          <tr>
            <th>KM</th>
            <td>{tracks.tracksKmSum}</td>
          </tr>
        </thead>
      </Table>
    );
}
export { TableView }