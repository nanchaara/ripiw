import Header from "./components/Header";
import Tipe from "./components/Tipe";
import Kotak from "./components/Kotak";
import SearchBox from "./components/SearchBox";
import MyModal from "./components/Modal";
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [lagu, setLagu] = useState([{}]);
    const [indexLagu, setIndex] = useState(0);

    useEffect(() => {
        fetch("/lagu")
            .then((res) => res.json())
            .then((data) => setLagu(data.data));
    }, []);

    console.log(lagu);

    return (
        <div className="App">
            <MyModal
                isOpen={modalIsOpen}
                setIsOpen={setModalIsOpen}
                laguKotak={lagu}
                index={indexLagu}
            />
            <Header />
            <Tipe />
            <SearchBox />
            <Kotak 
            	setIsOpen={setModalIsOpen}
				laguKotak={lagu} 
				setIndex={setIndex}
			/>
        </div>
    );
}

export default App;
