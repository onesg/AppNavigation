
/* IMPORT PARA REALIZAR A CONEXÃO COM FIREBASE */
import { initializeApp } from "firebase/app";

/* IMPORT PARA REALIZAR A AUTENTICAÇÃO */
import { getAuth } from 'firebase/auth';

/* CONFIGURAÇÃO DE CONEXÃO DO FIREBASE */
const firebaseConfig = {
    apiKey: "AIzaSyBbmRVNb37Uv55Bh2XJpWUkS6VHgAMFA4k",
    authDomain: "appnavigation-d580a.firebaseapp.com",
    projectId: "appnavigation-d580a",
    storageBucket: "appnavigation-d580a.appspot.com",
    messagingSenderId: "65530474352",
    appId: "1:65530474352:web:723507940de96820b0e9b5"
  };

/* INICIANDO A CONFIGURAÇÃO DO FIREBASE */
const app = initializeApp(firebaseConfig);

/* EXPORTANDO AUTH COM O APLICATIVO */
export const auth = getAuth(app);