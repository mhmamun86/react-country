import { Suspense } from 'react';
import './App.css';
import Countries from './component/Countries/Countries';

function App() {
  const apiUrl = 'https://openapi.programming-hero.com/api/all';
  const response = fetch(apiUrl).then(res => res.json());

  return (
    <>
      <Suspense fallback={<p>loading Data....</p>}>
        <Countries Countries={response}></Countries>
      </Suspense>
    </>
  );
}

export default App;
