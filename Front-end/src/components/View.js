import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function View({toUpdate}) {
    const [viewContactList, setviewContactList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/api/viewContact').then((value) => {
            console.log(value.data.data);
            setviewContactList(value.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    function deleteContact(id) {
        console.log(id);
        axios.delete(`http://localhost:3001/api/delete/${id}`).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })
        window.location.reload()
        // setContactList(del)
    }

    return (
        <>
            {viewContactList.map((items) =>
                <div className="container viewContainer my-5 py-5 ">
                    <div className="row viewRow">
                        <div className="viewIcons col-sm-2 d-flex align-items-center justify-content-center">
                            <a href="/"><button type="button" className="btn viewIcons"><b><i className="fa-solid fa-user fs-1 "></i></b></button></a>
                        </div>
                        <div className="col-sm-6 d-flex flex-column align-items-center">
                            <p id='nameData'>{items.name}</p>
                            <p id='emailData'>{items.email}</p>
                        </div>
                        <div className="viewIcons col-sm-2 d-flex align-items-center justify-content-center">
                            <button type="button" onClick={() => { deleteContact(items._id) }} className="btn viewIcons"><b><i className="fa-solid fa-trash-can fs-1 "></i></b></button>
                        </div>
                        <div className="viewIcons col-sm-2 d-flex align-items-center justify-content-center">
                            <button type="button" onClick={() => { toUpdate(items._id) }} className="btn viewIcons"><b><i class="fa-regular fa-pen-to-square fs-1"></i></b></button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
