import React from 'react';
import TypeIt from "typeit-react";
import {SiBloglovin} from "react-icons/si";
import {GoMail, GoMarkGithub, GoMortarBoard, GoPerson} from "react-icons/go";

function About() {
    return (
        <section id="about">
            <div id="introduction" className="about-inner">
                <div className="typeit">
                    <TypeIt options={{
                        strings: "안녕하세요.<br/>끊임없는 자기성찰을 통해 성장하는 개발자, 박태은입니다!",
                        speed: 80,
                        waitUntilVisible: true,
                    }}/>
                </div>
                <p>저는 초등학생 때 프로그래밍을 통해 간단한 게임을 만드는 경험을 하면서</p>
                <p>개발자의 꿈을 품게 되었습니다.</p>
                <p>대학에서는 컴퓨터정보보안학과에 진학하여 다양한 프로그래밍 언어와</p>
                <p>IT 개발환경을 접하며 이 꿈을 더욱 키워나갔습니다.</p>
                <p>대학 졸업 후에는 웹앱 개발자 교육과정을 통해 Java 웹 개발에 대한</p>
                <p>깊이 있는 지식을 쌓아 나갔고, 실제 프로젝트를 경험해보며 실력을 향상시켰습니다.</p>
                <p>이러한 경험을 바탕으로, 새로운 기술에 대한 끊임없는 학습과</p>
                <p>실무 경험을 통한 문제 해결 능력 향상에 집중하는</p>
                <p>한 사람 분량 이상을 하는 개발자가 되고 싶습니다.</p>

            </div>
            <div id="profile" className="about-inner">
                <h2>ABOUT ME</h2>
                <hr className="small_hr"/>
                <div className="profile-inner">
                    <div className="profile-img"></div>
                    <div className="profile-list">
                        <ul>
                            <li><GoPerson/><span>박태은</span></li>
                            <li><GoMail/><span>pive0528@gmail.com</span></li>
                            <li><GoMortarBoard/><span>코리아IT아카데미 </span></li>
                            <li>프롬프트 AI & Open API & 공공데이터를 활용한 웹/앱 개발자 과정</li>
                            <li>( 2024.05 ~ 2024.12 )</li>
                            <li><GoMortarBoard/><span>우송대학교 - IT융합학부 컴퓨터정보보안과</span></li>
                            <li>( 2019.02 ~ 2024.02 )</li>
                            <li><GoMortarBoard/><span>대전지족고등학교</span></li>
                            <li>( 2016.03 ~ 2019.02 )</li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://github.com/Pive0528"
                                   title={"클릭하면 깃허브 페이지로 이동합니다."}><GoMarkGithub/><span>Github</span></a>
                            </li>
                            <li>
                                <a href="https://velog.io/@pive0528" title={"클릭하면 벨로그 페이지로 이동합니다."}><SiBloglovin/><span>My BLOG</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;