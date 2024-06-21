import React from 'react';

// Step 1: Define an interface for the props
interface GreetingProps {
    name: string;
}

// Step 2: Update the component to use the props interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default Greeting;
