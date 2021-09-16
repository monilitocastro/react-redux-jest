import './App.css';
import TraditionalReactRedux from './components/traditional-react-redux';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import NewReactRedux from './components/new-react-redux';

function App() {
    return (

        <Provider store={store}>
            <div className="App">
                <header className="App-header">

                    <h1>React &lt; 16: React, Redux, Testing App</h1>
                    <TraditionalReactRedux/>
                    <h1>React &gt;= 16: React, Redux, Testing App</h1>
                    <NewReactRedux/>
                </header>
                <div></div>
            </div>
        </Provider>
    );
}

export default App;
