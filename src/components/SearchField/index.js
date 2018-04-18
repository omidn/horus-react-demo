import React from 'react';
import TextField from 'material-ui/TextField';

const SearchField = ({label, ...props}) => (
    <TextField hintText={label}  {...props} />
);


export default SearchField;
