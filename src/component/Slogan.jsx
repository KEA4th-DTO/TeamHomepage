import React from "react";
import moon from "../assets/img/back2.png";

export default function Slogan()
{
    const sloganText = ["새벽이 깨어나기 전 함께 발전의 꿈을 이루자",
                        "우리의 밤은 당신의 서비스가 된다"];
    return(
        <section id="slogan">
        <div className="slogan__inner">
            <h2 className="slogan__title">
                Slogan
            </h2>
            <div style={{marginTop: "20%"}}>
                <img src={moon} />
            </div>
            <div className="slogan__desc">
                {sloganText.map((i) => (
                    <div>
                        <h3>"{i}"</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}