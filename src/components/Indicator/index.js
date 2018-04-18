import React from 'react';
import { Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn } from 'material-ui/Table';
import { grey800, grey300 } from 'material-ui/styles/colors';


const inlineStyles = {
    root: {
        border: '1px solid rgb(224, 224, 224)',
        width: 500 
    }, headerRow: {
        fontWeight: 'bold',
        height: 30
    }, tableHeader: {
        background: grey800
    }, height: {
        height: 30
    }, rowHeader: {
        height: 30,
        fontWeight: 'bold',
        color: grey300
        
    }, row:  {
        height: 30
    } 
};

const Indicator = ({ labels, values }) => (
    <Table multiSelectable={false} selectable={false} style={inlineStyles.root} >
      <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
          style={inlineStyles.tableHeader}
    >
    <TableRow style={inlineStyles.headerRow}>
      {labels.map((x, i) => <TableHeaderColumn key={i} style={inlineStyles.rowHeader}>{x}</TableHeaderColumn>)}
    </TableRow>
      </TableHeader>
      <TableBody
          displayRowCheckbox={false}
      >
        <TableRow style={inlineStyles.height}>
          {values.map((x, i) => <TableRowColumn key={i} style={inlineStyles.row}>{x}</TableRowColumn>)}
        </TableRow>
      </TableBody>
    </Table>     
);

export default Indicator;
