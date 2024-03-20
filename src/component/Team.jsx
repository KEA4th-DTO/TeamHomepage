import React from "react";
import moon from "../assets/img/back3.png";
import team from "../assets/img/team.png";

export default function Team()
{
    return(
        <section id="team">
        <div className="team__inner">
            <h2 className="team__title">
                Team
            </h2>
            <div>
                <img src={moon} />
            </div>
            <div className="team__img">
                <img src={team} />
            </div>
            <div className="team__desc">
                <h3>DTO X PHOTOISM</h3>
            </div>
        </div>
    </section>
    );
}