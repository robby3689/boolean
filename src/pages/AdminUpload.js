// src/pages/AdminUpload.js
import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function AdminUpload() {
  const [file, setFile] = useState(null);
  const [uploadMsg, setUploadMsg] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    try {
      const storageRef = ref(storage, `course-content/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setUploadMsg("Uploaded successfully!");
      setDownloadUrl(url);
      setFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      setUploadMsg("Upload failed.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload Course Content (Admin)</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} style={{ marginLeft: "1rem" }}>
        Upload
      </button>
      {uploadMsg && <p>{uploadMsg}</p>}
      {downloadUrl && (
        <p>
          File URL: <a href={downloadUrl} target="_blank" rel="noopener noreferrer">{downloadUrl}</a>
        </p>
      )}
    </div>
  );
}
