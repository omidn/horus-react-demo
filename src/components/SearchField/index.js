import React from 'react';
import TextField from 'material-ui/TextField';

const inlineStyles = {
    root: {
        width: 700
    }
}

const SearchField = ({label, ...props}) => (
    <TextField hintText={label}  {...props} />
);


export default SearchField;
