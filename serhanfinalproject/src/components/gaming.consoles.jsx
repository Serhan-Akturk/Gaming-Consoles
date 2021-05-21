import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Singleconsolecard from './single.console.card';
import Loading from './loading';
import Selectedconsole from './selected.console';

function Gamingconsoles() {
    const [consoles, setConsoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedConsole, setSelectedConsole] = useState(null);

    useEffect(() => {
        const retrieveConsoles = async () => {
            const findConsoles = await axios.get("http://csc225.mockable.io/consoles");
            setConsoles(findConsoles.data);
            setLoading(false);
        }
        retrieveConsoles();
    }, [])

    if (loading) return <Loading />;


    if (selectedConsole) return <Selectedconsole selectedConsole={selectedConsole} setSelectedConsole={setSelectedConsole} />;
    return (
        <div className="row">{consoles.map(console => (
            <div key={console.id} className="col-lg-6 ">
                <Singleconsolecard console={console} setSelectedConsole={setSelectedConsole} />
            </div>
        ))}</div>
    );
}

export default Gamingconsoles;