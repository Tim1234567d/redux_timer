import { Provider } from 'react-redux';

import './App.css';
import ListTimers from './components/ListTimers';
import NewTimer from './components/NewTimer';
import { updateTimer } from './store/actions/timer';
import store from './store/config';


function App() {
    let lastUpdate =  Date.now();
    setInterval(()=>{
        const now =  Date.now();
        const diff = now - lastUpdate;
        lastUpdate = now;  
        store.dispatch(updateTimer(diff));
    }, 100);
    return (
        <Provider store={store}>
            <div className="App">
                <NewTimer/>
                <ListTimers/>
            </div>
        </Provider>
    );
}

export default App;
