import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import './style.css'

export default function Main() {

    const [edit, setEdit] = useState([])


    function toUpdateContact(id) {
        console.log(id);
        axios.get(`http://localhost:3001/api/update/view/${id}`).then((value) => {
            console.log(value.data.data);
            setEdit(value.data.data)
        }).catch((err) => {
            console.log(err);
        })
    }



    return (
        <>            
            <div className="container mainContainer w-50">
                <Add edit={[edit]} />
            </div>
            <div className="container w-50">
                <View toUpdate={toUpdateContact} />
            </div>
        </>
    )
}