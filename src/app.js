import React from 'react';

const App = () => {

    function sayHello() {
        alert('Hello, World!');
    }

    return (
        <button onClick={sayHello}>Click me!</button>
    );
};

export default App;
