import React from 'react';
import { Button } from './components';

const App: React.FC = () => {
  return (
    <React.Suspense fallback="loading">
      <Button>CLICK</Button>
    </React.Suspense>
  );
};

export default App;
