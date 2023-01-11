import { Component } from "react";
import { Helmet } from 'react-helmet';

class MyComponent extends Component {
    render() { 
        return (
            <>
            <Helmet>
                <title>Hello Dojo</title>
            </Helmet>
            <h2>Things I need to do:</h2>
            <ul>
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a marathon</li>
                <li>Feed the Dogs</li>
            </ul>
            </>
        );
    }
}

export default MyComponent;