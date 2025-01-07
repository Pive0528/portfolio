import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, title, message } = formData;

        // 한글 깨짐 방지를 위한 URL 인코딩
        const subject = encodeURIComponent(title);
        const body = encodeURIComponent(`${message}`);

        // mailto 링크 생성
        const mailtoLink = `mailto:pive0528@gmail.com?subject=${subject}&body=${body}`;

        // mailto 호출
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact">
            <div className="contact-inner contact-left">
                <h2>CONTACT ✉</h2>
                <p>어떤 의견이든<br />감사한 마음으로 듣겠습니다!</p>
            </div>
            <div className="contact-inner contact-right">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        autoComplete="off"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        cols="30"
                        rows="12"
                        autoComplete="off"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
