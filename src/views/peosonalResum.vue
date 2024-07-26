<template>
    <div>
        <header>
            <h1>秦彦悦</h1>
            <p>Web&Game Developer</p>
        </header>
        <div class="items">
            <section class="contact">
                <h2>Contact Information</h2>
                <p>Email: 2495802072@qq.com</p>
                <p>Phone: 19515860371</p>
            </section>
        
            <section class="education">
                <h2>Education</h2>
                <p><strong>南京理工大学泰州科技学院</strong> - Undergraduate in Computer Science (2023)</p>
            </section>
        
            <section class="experience">
                <h2>Work Experience</h2>
                <p><strong>No current work experience</strong></p>
                <!-- <p><strong>Company Name</strong> - Web Developer (Year)</p> -->
            </section>
        
            <section class="skills">
                <h2>Skills</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>GDscript</li>
                    <li>C#</li>
                </ul>
            </section>
        </div>
        
    
        <footer>
            <p>© 2023 秦彦悦. All rights reserved.</p>
        </footer>
    </div>
</template>

<style>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
    background: url('../assets/Art/image/奶油白纹理.jpeg');
    overflow: auto;
}

header {
    background-color: #3498db;
    color: #fff;
    text-align: center;
    padding: 20px;
}

section {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.items{
    height: 679px;
    overflow: auto;
}
.items::-webkit-scrollbar{
    width: 5px;
}
.items::-webkit-scrollbar-thumb{
    background-color: #696969;
}

h2 {
    color: #3498db;
}

ul {
    list-style: none;
    padding: 0;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>