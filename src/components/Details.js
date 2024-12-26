import { useEffect, useState } from 'react';
import './Details.css'; 

function Details() {
    const [storedData, setStoredData] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('details');
        if (data) {
            setStoredData(JSON.parse(data));
        }
    }, []);

    const deleteEntry = (index) => {
        const updatedData = storedData.filter((_, i) => i !== index);
        localStorage.setItem('details', JSON.stringify(updatedData));
        setStoredData(updatedData);
    };

    return (
        <div className="details-page">

            {storedData.length > 0 ? (
                storedData.map((entry, index) => (
                    <div className="entry-container" key={index}>
                        <p><strong>Name:</strong> {entry.name}</p>
                        <p><strong>Message:</strong> {entry.message}</p>
                        <button onClick={() => deleteEntry(index)}>Delete</button>
                        <hr />
                    </div>
                ))
            ) : (
                <p className="no-data-message">No data available. Please go back to the home page and submit the form.</p>
            )}
        </div>
    );
}

export default Details;
