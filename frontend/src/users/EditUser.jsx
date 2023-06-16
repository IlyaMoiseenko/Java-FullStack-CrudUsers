import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

const EditUser = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: ""
    })

    useEffect(() => {
        loadUser()
    }, [])

    const onInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const onSubmit = async (event) => {
        event.preventDefault()

        await axios.put(`http://localhost:8080/user/${id}`, user)

        navigate("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`)

        setUser(result.data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">
                        Edit User
                    </h2>

                    <form onSubmit={(event) => onSubmit(event)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Name</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter name of user"
                                name="name"
                                value={user.name}
                                onChange={(event) => onInputChange(event)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">Username</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter user name"
                                name="userName"
                                value={user.userName}
                                onChange={(event) => onInputChange(event)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter email of user"
                                name="email"
                                value={user.email}
                                onChange={(event) => onInputChange(event)}
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <Link
                            type="submit"
                            className="btn btn-outline-danger mx-2"
                            to="/"
                        >
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUser;