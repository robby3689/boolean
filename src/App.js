import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import JavaCourse from "./pages/Courses/JavaCourse";
import ReactCourse from "./pages/Courses/ReactCourse";
import AwsCourse from "./pages/Courses/AWSCourse";
import CloudCourse from "./pages/Courses/CloudCourse";
import AdminUpload from "./pages/AdminUpload";
import Register from "./pages/Register";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses/java" element={<JavaCourse />} />
        <Route path="/courses/react" element={<ReactCourse />} />
        <Route path="/courses/aws" element={<AwsCourse />} />
        <Route path="/courses/cloud" element={<CloudCourse />} />
        <Route path="/admin-upload" element={<AdminUpload />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
