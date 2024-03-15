import React from "react";
import '../App.css'

const UserList = ({ data, removeUser }) => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {data.map((user, i) => (
            <div key={i} className="col">
              <div className="card h-100 shadow">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center justify-content-center ">
                    <img src={user.image} className="img-fluid img-thumbnail rounded-circle " alt={`user${i + 1}`} style={{ width: '150px', height: '150px' }} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mt-2">
                        <h5 className="card-title">{user.fullname}</h5>
                        <p className="card-title">{user.twubric.total}</p>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                        <p className="card-text">Friends : {user.twubric.friends}</p>
                        <p className="card-text">Influence : {user.twubric.influence}</p>
                        <p className="card-text">Chirpiness : {user.twubric.chirpiness}</p>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                        <p className="card-text">Join Date:  {new Date(user.join_date * 1000).toDateString()}</p>
                        <button className="btn btn-dark btn-sm " onClick={() => removeUser(i)} style={{ width: '80px', height: '30px' }}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;