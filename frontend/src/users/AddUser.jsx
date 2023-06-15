import React from 'react';

const AddUser = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">
                        Register User
                    </h2>

                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input type={"text"} className="form-control" placeholder="Enter name of user" name="name"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Username" className="form-label">Username</label>
                        <input type={"text"} className="form-control" placeholder="Enter user name" name="userName"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type={"text"} className="form-control" placeholder="Enter email of user" name="email"/>
                    </div>

                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <button type="submit" className="btn btn-outline-danger mx-2">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddUser;