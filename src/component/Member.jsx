import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mem1 from "../assets/img/mem1.png";
import mem2 from "../assets/img/mem2.png";
import mem3 from "../assets/img/mem3.png";
import mem4 from "../assets/img/mem4.png";
import mem5 from "../assets/img/mem5.png";
import mem6 from "../assets/img/mem6.png";

import Header from "./Header";

export default function Member()
{
    const {id} = useParams();
    const [members, setMembers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/members') //API경로 적어주기
        .then(res => {
            return res.json() //json으로 변환됨
        })
        .then(data => {
            setMembers(data);
        })
    }, []);

    const i = id -1;
    const getImagePath = (id) => {
        const img = [mem1, mem2, mem3, mem4, mem5, mem6];
        return img[id -1];
    }

    return(
    <section id="member">
    <Header />
    <div className="member__inner">
         <h2 className="member__title">
            멤버{id}
        </h2>
        <div className="member__content">
        <div >
            <img src={getImagePath(id)} alt={`Member ${id}`} className="img"/>
        </div>
        {members.length === 0 && <span>Loading...</span>}
        {members.length > 0 && (
            <h2 style={{ lineHeight: 2 }} className="member__desc">
                {members[i] ? (
                    <div>
                        {/* <div >
                            <img src={getImagePath(id)} alt={`Member ${id}`} className="img"/>
                        </div> */}
                        이름: {members[i].name}<br />
                        역할: {members[i].role}<br />
                        이메일: {members[i].email}<br />
                        github 아이디: {members[i].git_id}<br />
                        MBTI: {members[i].mbti}<br />
                        생년월일: {members[i].birth}<br />
                        취미: {members[i].hobby}<br />
                        한줄 소개: {members[i].info}<br />
                        {members[i].career === null && <span>커리어: {members[i].career}</span>}
                    </div>
                ) : (
                    <span>멤버가 없습니다.</span>
                )}
            </h2>
        )}
        </div>
    </div>
    </section>
    );
}