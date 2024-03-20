import React from "react";

export default function Footer()
{
    const footerText = [
    {
        title: "github",
        desc: "깃허브 주소입니다. 아이디어 카피는 ㄴㄴ",
        link: "https://github.com/KEA4th-DTO"
    },
    {
        title: "react",
        desc: "팀소개 주소입니다.",
        link: "https://www.naver.com/"
    }
    ];
    return(
    <footer id="footer" role="contentinfo">
    <div className="footer__inner">
        <h2 className="footer__text">
            <div>SW 아카데미 4기</div>
            <div>가천대학교</div>
        </h2>
        <div className="footer__info">
            <div className="left">
                <div className="title">
                    <a href="/">처음으로</a>
                </div>
            </div>
            <div className="right">
                <h3>social</h3>
                <ul>
                    {footerText.map((footer, key) => (
                        <li key={key}>
                            <a href={footer.link}>{footer.title}</a>
                            <em>{footer.dsec}</em>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="footer__right">
            이 사이트는 리액트를 이용하여 제작하였습니다.
        </div>
    </div>
</footer>
    );
}   