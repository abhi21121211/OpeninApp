import "../styles/navigatingDivs.css";
import React, { useRef, useState, useEffect } from "react";
import NavigatingDiv from "../components/NavigatingDiv";
import TopBar from "../components/TopBar";
import UploadBox from "../components/UploadBox";
import AfterUpload from "../components/AfterUpload";

const Dashboard = () => {
  const [showTable, setShowTable] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const afterUploadRef = useRef(null);

  const handleShowTable = () => {
    setShowTable(true);
    // Scroll to the AfterUpload component
    afterUploadRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="h-screen flex ">
      <div className="h-full sticky top-0 left-0">
      {isMobile && (
        <button onClick={handleMenuToggle} className="md:hidden col-50 ">
          ☰
          
        </button>
      )}
      {(!isMobile || menuOpen) && (
        <div className={`h-full sticky top-0 left-0 ${isMobile && "md:hidden"}`}>
          <NavigatingDiv />
        </div>
      )}
      </div>

      <div className="w-full overflow-auto">
        <div>
          <TopBar />
        </div>

        <div>
          <UploadBox handleShowTable={handleShowTable} />
        </div>

        <div ref={afterUploadRef}>{showTable && <AfterUpload />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
