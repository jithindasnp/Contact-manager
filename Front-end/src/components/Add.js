import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Add({ edit }) {


    const [state, setstate] = useState({})
    const [update, setUpdate] = useState({})

    useEffect(() => {
        setUpdate(edit[0])
    }, [edit])



    //add contact
    const inpValue = (e) => {
        const { name, value } = e.target
        setstate({ ...state, [name]: value })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/addContact', state).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
        window.location.reload()
    }

    //update contact
    const updValue = (e) => {
        console.log(update);
        const { name, value } = e.target
        setUpdate({ ...update, [name]: value })

    }

    const updFormSubmit = (e) => {
        e.preventDefault()
        let updatedContacts = {
            name: update.name,
            email: update.email,
            id: edit[0]._id
        }

        axios.post(`http://localhost:3001/api/update/`, updatedContacts).then((data) => {

        console.log(data.data.message);
            toast.success(data.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            window.location.reload()
        }).catch((err) => {

            console.log(err);
        })
        
    }



    return (
        <>
            <ToastContainer />
            {edit == "" ?
                <section id="form">
                    <div className="container  mt-5">
                        <div className="row fistRow" style={{ borderBottom: "2px solid  rgb(64, 63, 63)" }}>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8 mt-3 d-flex justify-content-center">
                                <h3>Contact Manager</h3>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <div className="title d-flex justify-content-center mt-3">
                                    <h5>Add Contact</h5>
                                </div>
                                <form action="submit" onSubmit={formSubmit}>
                                    <div className="row mb-5 mt-2">
                                        <div className="col-sm-2 d-flex align-items-center">
                                            <label htmlFor="">Name</label>
                                        </div>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" onChange={inpValue} name="name" />
                                        </div>
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-sm-2 d-flex align-items-center">
                                            <label htmlFor="">Email</label>
                                        </div>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" onChange={inpValue} name="email" />
                                        </div>
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-sm-12 d-flex justify-content-center">
                                            <button type="submit" className="btn addBtn btn-lg w-50"><b>Add</b></button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                </section>
                :
                <section id="form">
                    <div className="container  mt-5">
                        <div className="row fistRow" style={{ borderBottom: "2px solid  rgb(64, 63, 63)" }}>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8 mt-3  d-flex justify-content-center">
                                <h3>Contact Manager</h3>
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <div className="title d-flex justify-content-center mt-3">
                                    <h5>Update Contact</h5>
                                </div>
                                <form action="submit" onSubmit={updFormSubmit}>
                                    <div className="row mb-5 mt-2">
                                        <div className="col-sm-2 d-flex align-items-center">
                                            <label htmlFor="">Name</label>
                                        </div>
                                        <div className="col-sm-10">
                                            <input type="text" onChange={updValue} value={update.name} className="form-control" name="name" />
                                        </div>
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-sm-2 d-flex align-items-center">
                                            <label htmlFor="">Email</label>
                                        </div>
                                        <div className="col-sm-10">
                                            <input type="email" onChange={updValue} value={update.email} className="form-control" name="email" />
                                        </div>
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-sm-12 d-flex justify-content-center">
                                            <button type="submit" className="btn addBtn btn-lg w-50"><b>Update</b></button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                </section>

            }

        </>
    )
}
