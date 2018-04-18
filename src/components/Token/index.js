import React from 'react';
import Chip from 'material-ui/Chip';
import noop from 'lodash/noop';
import { blue50, blue900, grey900, grey50, orangeA100 } from 'material-ui/styles/colors';

const inlineStyles = {
    token: {
        margin: 2,
        display: 'inline-block',
    },
    selected: {
    },
    unselected: {
        
    }
}

const getColors = (isSelected, isNeutral) => {
    if (isSelected) {
        return {
            background: blue900,
            label: grey50
        }
    }
    
    else if (isNeutral ) {
        return {
            background: blue50,
            label: grey900
        };
        
    }
    else return {
        background: orangeA100,
        label: grey900
    }
}
const getStyle = (isSelected) => {
    return Object.assign({}, inlineStyles.token,
                         isSelected ? inlineStyles.selected : inlineStyles.unselected
    );    
}
const Token = ({key, label, isSelected, isNeutral}) => {
    const colors = getColors(isSelected, isNeutral);
    return (
        <Chip key={key} style={getStyle(isSelected)} onClick={noop} backgroundColor={colors.background} labelColor={colors.label} >
          {label}
        </Chip>
    )
};

export default Token;


