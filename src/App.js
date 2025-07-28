import React from 'react';
import './App.css';
import SearchUser from './components/SearchUser'; // ✅ Component correctly imported

function App() {
  return (
    <div className="App">
      <h1>GitHub User Search App</h1>
      <SearchUser /> {/* ✅ Component correctly used */}
    </div>
  );
}

export default App;