import React from 'react';
import Panel from 'components/Panel';
import Token from 'components/Token';

const inlineStyles = {
    root: {
        marginTop: 10
    },
    token: {
        margin: 2,
        display: 'inline-block'
    }
};

const TOKENS = [
    { label: 'paris', isSelected: true, isNeutral: false },
    { label: 'hilton', isSelected: false, isNeutral: false },
    { label: 'was', isSelected: false, isNeutral: true},
    { label: 'once', isSelected: false, isNeutral: true},
    { label: 'the', isSelected: false, isNeutral: true},
    { label: 'toast', isSelected: false, isNeutral: false },
    { label: 'of', isSelected: false, isNeutral: true},
    { label: 'the', isSelected: false, isNeutral: true},
    { label: 'town', isSelected: false, isNeutral: false },
]

const renderTokens = (tokens) => (
    <div>
    {tokens.map((token, i) => 
        <Token key={i} label={token.label} isSelected={token.isSelected} isNeutral={token.isNeutral} />
    )}
    </div>
);

const TokenField = () => (
    <Panel depth={1} style={inlineStyles.root}>
      {renderTokens(TOKENS)}
    </Panel>
);

export default TokenField;
