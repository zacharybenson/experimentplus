import {useState} from 'react';
import logo from '../logo.svg';
import axios from "axios";
import './App.scss';


function App() {
  const [textInput, setTextInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleSubmit = () => {
    axios.get(`/api/test?text=${textInput}`).then(res => {
      setOutput(res.data.text);
    }).catch(err => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <h1>Experiment +</h1>
        <img src={logo} className="App-logo" alt="logo"/>
        <div>
          <p>Rapidly Design, Build, and Conduct Experiments</p>
        </div>
        <br></br>
        <div>
        <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt=""/>
        <img src="https://img.shields.io/badge/Docker-008FCC?style=for-the-badge&logo=docker&logoColor=white" alt=""/>
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt=""/>
        <img src="https://img.shields.io/badge/django%20rest-ff1709?style=for-the-badge&logo=django&logoColor=white" alt=""/>
        <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt=""/>
        </div>
      </header>
    </div>
  );
}

export default App;
