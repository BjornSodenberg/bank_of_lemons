import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Employer {
  id: number;
  fullname: string;
  email: string;
  lemons: number;
  diamonds: number
}

function App() {
  const [employers, setEmployers] = React.useState<Employer[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8080/employers');
      const data = await response.json();
      setEmployers(data);
    }

    fetchData()
  }, []);

  return (
    <div className="App">
      {
          employers && employers.map((employer) => (
            <div key={employer.id}>
              {employer.fullname} | {employer.email}
            </div>
          ))
        }
    </div>
  );
}

export default App;
