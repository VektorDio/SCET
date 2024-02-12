import * as React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);

export default function App() {
    return (<h2>Hello from React!</h2>)
}