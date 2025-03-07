"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post("http://localhost:5000/loginUser", {
        email,
        password,
      });
      console.log(res);
      toast.success("Login successful");
      localStorage.setItem("email", email);

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err) {
      console.error(err);
      setError("Login failed. Please try again.");
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen lg:mt-20 md:mt-10 mt-6">
      <h1
        style={{
          color: "green",
          fontSize: "26px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Please Login
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          margin: "auto",
          border: "1px solid gray",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <ToastContainer />
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "8px", width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: "8px", width: "100%", borderRadius: "10px" }}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
