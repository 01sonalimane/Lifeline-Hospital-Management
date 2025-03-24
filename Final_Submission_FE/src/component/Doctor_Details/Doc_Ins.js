import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import './Doc_Ins.css';
import Ct from "../Ct";

const Doc_Ins = () => {
    const [insurers, setInsurers] = useState([]);
    const [message, setMessage] = useState("");
    let obj=useContext(Ct)
    useEffect(() => {
        fetchInsurers();
    }, []);

    const fetchInsurers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/get_insurer",{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id}});
            if (response.data.length > 0) {
                setInsurers(response.data);
                setMessage("");
            } else {
                setMessage("No insurer data found.");
            }
        } catch (error) {
            setMessage("Error fetching insurer data.");
        }
    };

    return (
        <div className="insurer-container">
            <h1>All Insurers</h1>
            {message && <p className="error-message">{message}</p>}
            <div className="card-container">
                {insurers.length > 0 ? (
                    insurers.map((insurer) => (
                        <div key={insurer._id} className="insurer-card">
                            <div className="insurance-header">
                                <div className="insurance-title">Insurer Information</div>
                                <div className="insurance-logo">
                                    <span>Insurance</span>
                                    {insurer.company}
                                </div>
                            </div>
                            <div className="insurance-details">
                                <div className="insurer-name">{insurer.name}</div>
                                <div className="address">
                                    {insurer.address || '1234 Main St.'}<br />
                                    {insurer.city || 'Anytown'}, {insurer.state || 'USA'} {insurer.zip || '01234'}
                                </div>
                                <div className="policy-number">
                                    <strong>Insurer ID</strong><br />
                                    {insurer._id}
                                </div>
                                <div className="contact-info">
                                    <strong>Contact:</strong> {insurer.contact || '(123) 456-7890'}<br />
                                    <strong>Email:</strong> {insurer.email || 'john.doe@example.com'}
                                </div>
                            </div>
                            
                        </div>
                    ))
                ) : (
                    <p>No insurers available.</p>
                )}
            </div>
        </div>
    );
};

export default Doc_Ins;