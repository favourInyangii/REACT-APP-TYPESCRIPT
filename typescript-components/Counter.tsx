import React, { Component } from 'react';

// Step 1: Define an interface for the state
interface CounterState {
    count: number;
}

// Step 2: Update the component to use the state interface
class Counter extends Component<{}, CounterState> { 
    // Step 3: Initialize the state with the defined interface
    state: CounterState = {
        count: 0
    };

    // Step 4: Ensure the increment method is correctly typed
    increment = (): void => {
        this.setState({ count: this.state.count + 1 }); 
    }; 

    render() { 
        return (
            <div> 
                <p>Count: {this.state.count}</p> 
                <button onClick={this.increment}>Increment</button> 
            </div>
        );
    }
}

export default Counter;
