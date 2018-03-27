import React from 'react';
import { Tab as MaterialTab, Tabs } from 'material-ui/Tabs';

const inlineStyles = {
    root: {
        background: '#0D47A1'
    }
}

const Tab = ({ children, ...otherProps }) => (
    <MaterialTab {...otherProps} style={inlineStyles.root}>
      {children}
    </MaterialTab>
);

export { Tab, Tabs };
