import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cong from './Configuration.jsx';
import { getDatabase, ref, onValue } from "firebase/database";

function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const database = getDatabase(cong);

        const collectionRef = ref(database, "my-location");

        const fetchData = () => {
            onValue(collectionRef, (snapshot) => {
                const dataItem = snapshot.val();

                if (dataItem) {
                    const displayItem = Object.values(dataItem);
                    setData(displayItem);
                }
            });
        };
        fetchData();
    }, []);

  return (
    <>
        <div>
            <h1>Data from database</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default App
