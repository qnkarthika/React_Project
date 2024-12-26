import { useState } from "react";
import { Link } from 'react-router-dom';
import './HomePage.css'; 

function HomePage() {
    const [name, Setname] = useState("");
    const [message, Setmessage] = useState("");
    const [submitted, setSubmitted] = useState(false); 

    function updateName(e) {
        Setname(e.target.value);
    }

    function updateMessage(e) {
        Setmessage(e.target.value);
    }

    function storeData() {
        const newEntry = {
            name: name,
            message: message
        };

        let currentData = localStorage.getItem('details');
        
        try {
            currentData = JSON.parse(currentData);
            if (!Array.isArray(currentData)) {
                currentData = []; 
            }
        } catch (error) {
            currentData = [];
        }

        currentData.push(newEntry);

        localStorage.setItem('details', JSON.stringify(currentData));

        console.log(localStorage.getItem('details'));

       
        setSubmitted(true);

        Setname("");
        Setmessage("");
    }

    
    function closePopup() {
        setSubmitted(false);
    }

    return (
        <div className="home-page">
            <div className="header">
                <h1>Welcome to Karthika's Diary ❤️</h1>
                <h2>You can write anything about me <b style={{ color: "black" }}>◕‿◕</b></h2>
            </div>

            <div className="input-section">
                <label>Enter your name:</label>
                <input type="text" name="name" value={name} onChange={updateName} className="input-field" />
                <label>Enter your message:</label>
                <textarea placeholder='Enter your message here' value={message} onChange={updateMessage} className="textarea-field"></textarea>
            </div>

            <div className="button-section">
                <button onClick={storeData} className="submit-button">Submit</button>
                <Link to='/Login' className="login-link">Login</Link>
            </div>

            
            {submitted && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-btn" onClick={closePopup}>×</button>
                        <p className="success-message">Submitted successfully!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
