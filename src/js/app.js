import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>This is Ciphyr.IO</h1>
                <h2>Let's go!</h2>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));