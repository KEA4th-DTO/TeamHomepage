import React from "react";
import moon from "../assets/img/back1.png";

export default function Intro()
{
    return(
    <section id="intro">
        <div className="intro__inner">
            <h2 className="intro__title">
                DTO
            </h2>
            <div className="intro__lines" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="intro__text">
                <div className="text">
                    <div>Develop Together Overnight</div>
                </div>
                <div className="img">
                    <img src={moon} />
                </div>
            </div>
            <div className="intro__lines bottom" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    </section>
    );
}