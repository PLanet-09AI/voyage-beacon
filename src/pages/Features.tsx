import React from "react";
import { Link } from "react-router-dom";

const Features = () => (
  <div className="container mx-auto py-16 px-4 min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted rounded-lg shadow-lg">
    <h1 className="text-5xl font-extrabold mb-6 text-primary drop-shadow-lg">Features</h1>
    <p className="text-xl text-muted-foreground mb-6 max-w-2xl text-center">
      Discover the powerful features our application offers to make your experience seamless and productive.
    </p>
    <ul className="text-lg max-w-2xl text-center mb-8 list-disc list-inside">
      <li className="mb-2"><span className="font-semibold text-primary">Fast</span> and responsive interface</li>
      <li className="mb-2"><span className="font-semibold text-primary">Secure</span> data handling</li>
      <li className="mb-2"><span className="font-semibold text-primary">Customizable</span> user settings</li>
      <li className="mb-2">Built with <span className="font-semibold text-primary">React</span> and <span className="font-semibold text-primary">TypeScript</span></li>
    </ul>
    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-xl mb-4">
      <span className="text-4xl font-bold text-white">🚀</span>
    </div>
    <Link
      to="/"
      className="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition-colors text-lg font-semibold"
    >
      Back to Home
    </Link>
  </div>
);

export default Features;
