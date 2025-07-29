import React from "react";
import { Link } from "react-router-dom";

const Contact = () => (
  <div className="container mx-auto py-16 px-4 min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted rounded-lg shadow-lg">
    <h1 className="text-5xl font-extrabold mb-6 text-primary drop-shadow-lg">Contact Us</h1>
    <p className="text-xl text-muted-foreground mb-6 max-w-2xl text-center">
      Have questions or feedback? We'd love to hear from you! Reach out to us using the information below.
    </p>
    <div className="text-lg max-w-2xl text-center mb-8">
      <p>Email: <a href="mailto:luyandangobese@icloud.com" className="text-primary underline">luyandangobese@icloud.com</a></p>
      <p>Phone: <span className="text-primary font-semibold">0614851117</span></p>
    </div>
    <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-xl mb-4">
      <span className="text-4xl font-bold text-white">📞</span>
    </div>
    <Link
      to="/"
      className="mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition-colors text-lg font-semibold"
    >
      Back to Home
    </Link>
  </div>
);

export default Contact;
