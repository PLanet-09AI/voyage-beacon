import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="container mx-auto py-16 px-4 min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted rounded-lg shadow-lg">
    <h1 className="text-5xl font-extrabold mb-6 text-primary drop-shadow-lg">About Us</h1>
    <p className="text-xl text-muted-foreground mb-6 max-w-2xl text-center">
      Welcome to our application! This is the About page. Here you can learn more about our mission, our team, and what we do.
    </p>
    <p className="text-lg max-w-2xl text-center mb-8">
      This project is built with <span className="font-semibold text-primary">React</span>, <span className="font-semibold text-primary">TypeScript</span>, and <span className="font-semibold text-primary">Vite</span>.<br />
      Explore the rest of the site to see more features!
    </p>
    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-xl mb-4">
      <span className="text-4xl font-bold text-white">🌟</span>
    </div>
    <Link
      to="/"
      className="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition-colors text-lg font-semibold"
    >
      Back to Home
    </Link>
  </div>
);

export default About;
