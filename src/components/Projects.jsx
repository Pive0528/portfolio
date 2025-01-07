import React, {useState} from "react";
import Card from './Card';


function Projects() {
    const projects = [
        {
            title: "개인프로젝트 - HanDari",
            image: "HanDari_Main.png",
            detail: "전국에서 열리는 다양한 축제 정보 확인과 사람들 간의 매칭을 도와주는 사이트입니다.",
            start: "2024.08.22",
            end: "2024.10.01",
            tech: ["Java", "Javascript", "HTML5", "css", "Tailwind", "JQuery", "AJAX"],
            source: "https://github.com/Pive0528/24_08_Spring_Handari_2",
            pdf: "/HanDari.pdf"
        },
        {
            title: "팀 프로젝트 - StarInfoWeb",
            image: "ASTRO.png",
            detail: "위치와 날씨 데이터를 기반으로 천문 데이터를 출력, 천문 현상 정보를 제공하는 천체 관측 추천 웹사이트입니다.",
            start: "2024.10.01",
            end: "2024.12.16",
            tech: ["Java", "Javascript", "Python", "React", "css", "scss", "pixi", "JWT"],
            source: "https://github.com/24-10-astroneer-team-project/24_10_star_info_web",
            pdf: "/starinfoweb.pdf",
            video: "http://youtu.be/Y8J2nk5eEjA"
        },
        {
            title: "Todo List App",
            image: "TodoList.png",
            detail: "직관적으로 사용이 가능한 사용자 할 일 목록 앱입니다.",
            start: "2024.09.27",
            end: "2024.10.20",
            tech: ["Java", "Javascript", "TypeScript", "css"],
            source: "https://github.com/Pive0528/24_10_todoapp",
        },
        {
            title: "박태은 웹 포트폴리오",
            image: "Portfolio.png",
            detail: "개발자 박태은의 웹 포트폴리오입니다.",
            start: "2024.12.26",
            end: "2024.12.31",
            tech: ["HTML5", "React", "Java", "JavaScript", "scss", "css"],
            source: "https://github.com/Pive0528/portfolio",
        }
    ]
    const [flipAll, setFlipAll] = useState(false);
    const [flip, setFlip] = useState(-1);
    const cardFlip = (n) => {
        if (flip !== -1) {
            setFlip(-1)
        } else {
            setFlip(n)
        }
    }

    return (
        <section id="projects">
            <h2>PROJECTS</h2>
            <div className="flipBtn">
                <button className="filp-all" onClick={() => {
                    setFlipAll(!flipAll)
                }}>
                    {!flipAll ? (<span>Flip All &gt;</span>) : (<span>Reset &gt;</span>)}
                </button>
            </div>
            <div className="projects-grid">
                {
                    projects.map((ele, idx) => {
                        return (
                            <div key={`proj-${idx}`} className={(flip === idx) || flipAll ? "flip active" : "flip"}
                                 onClick={() => {
                                     cardFlip(idx)
                                 }}>
                                <Card proj={ele}/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Projects;