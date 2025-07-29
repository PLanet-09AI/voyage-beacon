import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => (
  <div className="container mx-auto py-16 px-4 min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted rounded-lg shadow-lg">
    <h1 className="text-5xl font-extrabold mb-6 text-primary drop-shadow-lg">Sign Up</h1>
    <form className="w-full max-w-sm flex flex-col gap-4">
      <input
        type="text"
        placeholder="Full Name"
        className="px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded border border-border focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition-colors text-lg font-semibold"
      >
        Sign Up
      </button>
    </form>
    <p className="mt-4 text-muted-foreground text-sm">
      Already have an account?{' '}
      <Link to="/login" className="text-primary underline">Login</Link>
    </p>
    <Link
      to="/"
      className="mt-6 px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition-colors text-lg font-semibold"
    >
      Back to Home
    </Link>
  </div>
);

export default SignUp;
