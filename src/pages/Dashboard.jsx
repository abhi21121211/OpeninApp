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
        <img style={{width:"30px" , margin:"10px 0px 0px 10px"}} onClick={handleMenuToggle} className="md:hidden " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAADIyMgjIyPc3NzPz8/Z2dk/Pz8eHh69vb0uLi7n5+f6+vonJyf39/fg4OCnp6fw8PCWlpZ8fHyenp6CgoKysrJKSkoZGRlnZ2cUFBQMDAxERERiYmJVVVVzc3OKioqYpew7AAACkUlEQVR4nO3d7dKaMBCGYQQDCgqICKK+6vkfZTu1TnWm5OPXZvW+jmB3IhDIk5gkAAAAAAAAAAAAkLepTBoxU238W1l3tyJbRSsrbt3asx1z2C6itz0Yn17ai3Shfi6tu5fuJF2lr1PnHJezdI3+zo6xSQvpCkMUqa2X3V66vjD7nW1gVtLlhVlZhmbTS1cXqp9/3FQ/0sWF+qlmm8mV/coWiyyfbcZI1xZufh5AM7Lmm8mP0rWFOs9fM9UkXVyoaf5uVnfSxYXq6tlmklTNlPnhZJuc7Q7S5YU52OZmHzVrTjZtJl2hv6x1fAioezVvZ+fecvX/7WaQLtLX4Ozlt+oqXaaP6/wT5l2zj/wWfbo1nq08hqdZRqvxHRQAAAAAAAAAs2qzjpjx+cr8tL6NRRmxYrytPVtZjgoWnY/j0qcXNWGg3t2LolXNg3NcIl/MeHVyjM0nLdASaxRkizXWau5kT5YFZ2KNoo7EGmP1Jc3ou2a2XxJr/Kj4fJIq2KD1avs9sUajZMPZw8Wxia5V8Mr8dHRuoVMUbXZuoEuSoZQu0k85uHtJkmZS0E45+WYB0/s0FhEbp7s90fyuzqU3Y9vkIV80AQAAAAAAAPzPpjERa/wPa0xqE/3a5uQZ06zzUbpUH2PuMTw7NYu0rXUN8E8vdz1naNwd3dS9pmVAx4kgqYJ1pn/KL4o1SlcXyhZrVLTU/GA5RUvHiTOvLKfP5Gpuy0+Wk+c+KjxHM7IssUZlcbMvijW20sWFsp0991mxxrt0eWHsLwFGxVvm0+iINQ6KctorZ3xOz9mTmce/HAxKZptXr1hj3il43Sy7+cflm41p9+M2i9Z23Lcm4Dvgrskj1jg/MgEAAAAAAAAAAETrF2CqZbbFeuA9AAAAAElFTkSuQmCC" alt="" />
        // <button onClick={handleMenuToggle} className="md:hidden col-50 bg-body  ">
        //   ☰
          
        // </button>
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
