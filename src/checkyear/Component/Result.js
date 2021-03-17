import React from 'react';

class Result extends React.Component {
    render() {
        return (
            <>
                <h3>{this.props.result}</h3>
            </>
        );
    }
}

export default Result;