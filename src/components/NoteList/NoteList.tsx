import { format } from 'date-fns';
import React, { useEffect, useState } from "react";
import clockIcon from "../../assets/images/clock.svg";
import searchIcon from "../../assets/images/search.svg";
import { INote } from "../../common/INote";
import Model from "../../common/Model";
import "./NoteList.scss";

function NoteList() {
    const [model, setModel] = useState<Model>(new Model())
    const [list, setList] = useState<INote[]>([])
    useEffect(() => {
        initData()
    }, [])

    function initData() {
        model.getNote()
            .then(res => {
                console.log(res)
                setList(res)
            })
    }

    function handleAddNote() {
        model.addNote()
            .then(res => {
                initData()
            })
    }

    return <div className="note-list">
        <div className="note-list__topbar">
            <input></input>
            <img className="note-list__search" src={searchIcon}></img>
            <div onClick={handleAddNote} className="note-list__add"></div>
        </div>
        {list.map(item => <div key={item.id} className="note-list__note">
            <div className="note-list__title">{format(new Date(item.create_at), "yyyy-MM-dd")}</div>
            <div className="note-list__detail">{item.content}</div>
            <div className="note-list__time">
                <img src={clockIcon} />
                {format(new Date(item.create_at), "yyyy/MM/dd hh:mm")}
            </div>
        </div>)}

    </div>
}

export default NoteList