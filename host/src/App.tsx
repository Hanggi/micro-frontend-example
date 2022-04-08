import React, {Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import {ErrorBoundary} from 'react-error-boundary'

const CounterAppOne = React.lazy(() => import('remote/CounterAppOne'));

function ErrorFallback({error, resetErrorBoundary}: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is host app.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
          }}
        >
          <Suspense fallback={<div>Loading... </div>}>
            <CounterAppOne />
          </Suspense>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
