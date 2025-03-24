import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './Doc_Pat.css'; 
import Ct from '../Ct';

const Doc_Queries = () => {
  const [queries, setQueries] = useState([]);
  const [message, setMessage] = useState("");
  const [replyText, setReplyText] = useState({});
  let obj = useContext(Ct)

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get_queries",{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id}});
      if (response.data.data) {
        setQueries(response.data.data);
      } else {
        setMessage("No queries found.");
      }
    } catch (error) {
      setMessage("Error fetching queries.");
    }
  };


  const handleReplyChange = (id, value) => {
    setReplyText((prev) => ({ ...prev, [id]: value }));
  };

  const handleReplySubmit = async (id) => {
    try {
      const reply = replyText[id];
      if (!reply) return;
      await axios.post("http://localhost:5000/reply_query", { _id: id, reply },{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id}});
      setReplyText((prev) => ({ ...prev, [id]: "" }));
      fetchQueries();
    } catch (error) {
      console.error("Error submitting reply", error);
    }
  };



  return (
    <div className="pat-container">
      <h1 className="pat-title">Doctor Queries</h1>
      {message && <p className="error-message">{message}</p>}

      {queries.length > 0 ? (
        <table className="pat-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Message</th>
              <th>Reply</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((query) => (
              <tr key={query._id}>
                <td>{query._id}</td>
                <td>{query.name}</td>
                <td>{query.email}</td>
                <td>{query.phone_no}</td>
                <td>{query.message}</td>

                <td>{query.reply || "No reply yet"}</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter reply"
                    value={replyText[query._id] || ""}
                    onChange={(e) => handleReplyChange(query._id, e.target.value)}
                  />
                  <button onClick={() => handleReplySubmit(query._id)}>Reply</button>
                </td>


                
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No queries available.</p>
      )}
    </div>
  );
};

export default Doc_Queries;
