import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mem1 from "../assets/img/mem1.png";
import mem2 from "../assets/img/mem2.png";
import mem3 from "../assets/img/mem3.png";
import mem4 from "../assets/img/mem4.png";
import mem5 from "../assets/img/mem5.png";
import mem6 from "../assets/img/mem6.png";

export default function Members() {   
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/members')
            .then(res => res.json())
            .then(data => setMembers(data))
            .catch(error => console.error("Error fetching members:", error));
    }, []);

    useEffect(() => {
        if (members.length > 0) {
            gsap.registerPlugin(ScrollTrigger);

            const horizontal = horizontalRef.current;
            const sections = sectionRef.current;

            let scrollTween = gsap.to(sections, {
                xPercent: -120 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: horizontal,
                    start: "top 56px",
                    end: () => "+=" + horizontal.offsetWidth,
                    pin: true,
                    scrub: 1,
                    markers: false,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                }
            });

            return () => {
                scrollTween.kill();
            };
        }
    }, [members]);

    const getImagePath = (id) => {
        const img = [mem1, mem2, mem3, mem4, mem5, mem6];
        return img[id - 1];
    };

    return (
        <section id="members" ref={horizontalRef}>
            <div className="members__inner">
                <h2 className="members__title">
                    MEMBERS <em>팀원 자기소개</em>
                </h2>
                <div className="members__wrap">
                    {members.map((mem, key) => (
                        <article 
                            className={`members__item p${key + 1}`} 
                            key={key}
                            ref={(el) => (sectionRef.current[key] = el)}
                        >
                            <span className="num">{mem.id}.</span>
                            <Link to={`/members/${mem.id}`}>
                                <img src={getImagePath(mem.id)} alt={`Member ${mem.id}`} />
                            </Link>
                            <h3 className="title">{mem.name}</h3>
                            <p className="desc">{mem.info}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
