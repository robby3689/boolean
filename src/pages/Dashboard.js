import { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, storage } from "../firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [fileLinks, setFileLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        fetchFiles();
      }
    });

    return () => unsub();
  }, []);

 const fetchFiles = async () => {
  const folderRef = ref(storage, "pdfs");
  try {
    console.log("Fetching list from: pdfs");

    const res = await listAll(folderRef);
    console.log("Result from listAll:", res);

    if (!res.items.length) {
      console.warn("No items found inside 'pdfs' folder");
    }

    const urls = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return {
          name: itemRef.name,
          url,
        };
      })
    );

    console.log("File URLs:", urls);
    setFileLinks(urls);
  } catch (err) {
    console.error("🔥 ERROR loading files:", err);
  } finally {
    setLoading(false);
  }
};


  const handleLogout = () => {
    signOut(auth).then(() => navigate("/login"));
  };

  const getFileIcon = (fileName) => {
    if (fileName.endsWith(".pdf")) return "📕";
    if (fileName.endsWith(".docx") || fileName.endsWith(".doc")) return "📄";
    if (fileName.endsWith(".ppt") || fileName.endsWith(".pptx")) return "📊";
    return "📁";
  };

  return (
    <div className="page" style={{ padding: "2rem" }}>
      <h2>Welcome to Your Dashboard</h2>

      <button onClick={handleLogout} style={{ marginBottom: "2rem" }}>
        Logout
      </button>

      {loading ? (
        <p>Loading files...</p>
      ) : fileLinks.length === 0 ? (
        <p>No files available.</p>
      ) : (
        <ul>
          {fileLinks.map((file, i) => (
            <li key={i}>
              {getFileIcon(file.name)}{" "}
              <a href={file.url} target="_blank" rel="noreferrer">
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
