import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";

export default function AdminPanel() {
  const [view, setView] = useState("upload");
  const [file, setFile] = useState(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      setUploadMsg("Please select a file first.");
      return;
    }

    if (!auth.currentUser) {
      setUploadMsg("You must be logged in to upload files.");
      return;
    }

    setUploadMsg("Uploading...");
    try {
      const filePath = `pdfs/${Date.now()}-${file.name}`; // Unique file path
      const storageRef = ref(storage, filePath);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setDownloadUrl(url);
      setUploadMsg("Uploaded successfully ✅");
      setFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      setUploadMsg("Upload failed ❌");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin-login");
  };

  return (
    <AdminLayout>
      <div style={{ marginBottom: "2rem" }}>
        <button onClick={() => setView("dashboard")} style={styles.navBtn}>Dashboard</button>
        <button onClick={() => setView("upload")} style={styles.navBtn}>Upload</button>
        <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
      </div>

      {view === "dashboard" && (
        <div>
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Use the sidebar to manage uploads and content.</p>
        </div>
      )}

      {view === "upload" && (
        <div>
          <h2>Upload Course Files here</h2>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
          <button onClick={handleUpload} style={styles.uploadBtn}>Upload</button>
          {uploadMsg && <p>{uploadMsg}</p>}
          {downloadUrl && (
            <p>
              Download Link: <a href={downloadUrl} target="_blank" rel="noopener noreferrer">{downloadUrl}</a>
            </p>
          )}
        </div>
      )}
    </AdminLayout>
  );
}

const styles = {
  navBtn: {
    marginRight: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  uploadBtn: {
    marginTop: "1rem",
    padding: "0.5rem 1.5rem",
    backgroundColor: "#6c63ff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  logoutBtn: {
    padding: "0.5rem 1rem",
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};