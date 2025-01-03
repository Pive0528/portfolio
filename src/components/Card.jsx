import React from "react";
import styled from 'styled-components';

const CardFront=styled.div`
background-image: url(${props => props.ImgSrc});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;
function Card({ proj }) {
    const onAlert = () => {
        if (proj.source === '#projects' || proj.detail === '#projects') {
            alert('준비 중 입니다 : )');
        }
    };

    return (
        <div className="projects-item">
            <CardFront className="project-front" ImgSrc={`${process.env.PUBLIC_URL}/images/${proj.image}`}>
                <div className="info">
                    <h3 className="title">{proj.title}</h3>
                    <p className="click-msg">click</p>
                </div>
            </CardFront>
            <div className="project-back">
                <h3>{proj.title}</h3>
                <div className="back-inner detail">
                    <p>{proj.detail}</p>
                </div>
                <div className="back-inner time">
                    <h4># Period</h4>
                    <p>{proj.start} ~ {proj.end}</p>
                </div>
                <div className="back-inner tech">
                    <h4># Tech</h4>
                    <ul className="lang">
                        {proj.tech.map((ele) => (
                            <li key={`${proj.title}-${ele}`}>{ele}</li>
                        ))}
                    </ul>
                </div>
                <div className="btn-group" onClick={onAlert}>
                    <a href={proj.source}>
                        <button>Source Code</button>
                    </a>
                    {proj.intro && ( // intro가 존재할 때만 버튼 렌더링
                        <a href={proj.intro}>
                            <button>코리아IT아카데미 프로젝트 소개</button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
