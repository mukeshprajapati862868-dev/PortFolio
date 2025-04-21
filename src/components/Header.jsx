import React from 'react';

const Header = () => {
  return (
    <div id="home" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt="Header background"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Web Developer
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            A Web Developer designs, builds, and maintains websites and web applications. They use languages like HTML, CSS, and JavaScript for front-end development and server-side technologies for back-end work. Web Developers ensure a seamless, user-friendly experience across devices while optimizing performance and security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
