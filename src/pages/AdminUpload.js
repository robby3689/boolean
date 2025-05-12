import React, { useState } from "react";
import { storage, ref, uploadBytes } from "../firebase";

export default function AdminUpload() {
  const [file, setFile] = useState(null);
  const [uploadMsg, setUploadMsg] = useState("");

  const handleUpload = async () => {
    if (!file) return;

    const storageRef = ref(storage, `course-content/${file.name}`);
    await uploadBytes(storageRef, file);
    setUploadMsg("Uploaded successfully!");
    setFile(null);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload Course Content (Admin)</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} style={{ marginLeft: "1rem" }}>
        Upload
      </button>
      {uploadMsg && <p>{uploadMsg}</p>}
    </div>
  );
}
