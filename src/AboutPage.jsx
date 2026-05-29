import React from "react";
import {Link} from "react-router-dom";

const AboutPage = () => (
    <div>
        <h1>หน้า About</h1>
        <p>นี่คือหน้า About</p>
        <Link to = "/">กลับหน้าแรก</Link>
    </div>
)

export default AboutPage;