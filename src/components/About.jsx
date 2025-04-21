import React from "react";
import image from '../assets/image.png'

const About = () => {
    return (
        <div id="about">
            <section className="p-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <img
                            src={image} 
                            alt="Mukesh Prajapati"
                            className="w-72 h-72 object-cover rounded-full mx-auto"
                        />
                    </div>

                    <div className="w-full md:w-2/3 md:ml-8">
                        <h2 className="text-4xl font-semibold mb-4 text-left">About Me</h2>
                        <p className="text-lg mb-4">
                            Hello, I'm <strong>Mukesh Prajapati</strong>, a passionate software developer.
                        </p>
                        <p className="text-lg mb-4">
                            I graduated from <strong>Babu Sunder Singh Institute of Technology and Management</strong>, where I pursued my degree and developed a deep interest in web development.
                        </p>
                        <p className="text-lg mb-4">
                            I completed my training as a Full Stack Web Developer (MERN Stack) from <strong>Hanumant Technology Pvt. Ltd., Lucknow</strong>. During my training, I gained hands-on experience in technologies like MongoDB, Express.js, React.js, and Node.js.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
