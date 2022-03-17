import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "./containers/layout/layout";

function App() {
    return (
        <Router>
            {/*Layout must be wrapped into authenticationWrapper*/}
            <Layout />
        </Router>
    );
}

export default App;
