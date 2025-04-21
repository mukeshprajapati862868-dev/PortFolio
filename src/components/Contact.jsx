import React, { useRef } from "react";

const Contact = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        const obj = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: msgRef.current.value,
        };
       if (obj.name && obj.email && obj.message) {
        alert("successful")
       }
       else{
        alert("not successful")
       }

        console.log(obj); // Log the object to the console
    };

    return (
        <section id="contact" className="p-8 bg-slate-600 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-8">Contact</h2>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            ref={nameRef}
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-md text-black placeholder:text-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-md text-black placeholder:text-gray-400"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            ref={msgRef}
                            placeholder="Your Message"
                            className="w-full p-3 rounded-md text-black placeholder:text-gray-400 h-32"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
