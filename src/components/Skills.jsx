import React from "react";
import FrameImage from "../images/Frame.png";

function Skills() {

    return (
        <section id="skills">
            <h2>Main Skills</h2>
            <img
                src={FrameImage}
                style={{
                    width: "82%",
                    marginTop: "20px",
                    boxShadow: "1px 1px 20px 1px rgba(0, 0, 0, 0.08)", // boxShadow 추가
                }}
            />
        </section>
    );
}

export default Skills;
