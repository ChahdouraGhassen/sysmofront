import React, { useState } from 'react'
import './Login.css';
import Logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

interface LoginProps {
  onLogin: (token: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const MySwal = withReactContent(Swal)

  //////
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:44339/api/authentification', {
        username,
        password,
      }).then(res => (
        setUsername(""),
        setPassword(""),
        MySwal.fire({
          title: <strong>Added Successfully</strong>,
          icon: 'success'
        }))
      ).catch(err => console.log(err))
        ;
    } catch (error) {
      console.error(error);
    }
  };




  //////
  return (
    <div>
      <head>
        <title>Login Page</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </head>

      <body className="containers">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset=md-1">
              <div className="row">
                <div className="col-md-5 register-left">
                  <img src={Logo} alt='Error' />
                  <p>SYSMO Equipement Maintenance et réparations des véhicules automobiles et auto car La rénovation des organes en mécanique et révision moteur La rénovation et réparation de la carrosserie (toliers , peinture et sièges).
                  </p>
                  <button type="button" className="btn btn-primary">Bienvenue</button>
                </div>
                <div className="col-md-7 register-right">
                  <h2>Connectez-vous pour démarrer votre session </h2>
                  <div className="register-form">
                    <div className="form-group">
                      <input type="email" value={username} className="form-control" placeholder="Email" required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <input type="password" value={password} className="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Link to="AddReparation">
                      <button type="submit" className="btn btn-primary" onSubmit={handleLogin}>
                        S'identifier
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </body>
    </div>
  )
}

export default Login