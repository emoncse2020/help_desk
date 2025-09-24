import { useState } from "react";
import Container from "./components/Navbar/Container";
import Footer from "./components/Navbar/Footer";
import Navbar from "./components/Navbar/Navbar";
import ToggleBtn from "./components/Navbar/ToggleBtn";

const App = () => {
  const [toggleStatus, setToggleStatus] = useState("All");
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <main className="grid md:grid-cols-3 gap-[20px] my-10 ">
          <div className="bg-purple-400 rounded-md p-7 h-48 text-white  flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-3">Pending</h1>
            <h3 className="text-5xl font-semibold">5</h3>
          </div>
          <div className="bg-teal-400 rounded-md p-7 text-white  flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold md-3">Submitted</h1>
            <h3 className="text-5xl font-semibold">5</h3>
          </div>
          <div className="bg-blue-400 rounded-md p-7 text-white  flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-3">Reviewed</h1>
            <h3 className="text-5xl font-semibold">5</h3>
          </div>
        </main>

        {/* toggle button */}
        <ToggleBtn
          toggleStatus={toggleStatus}
          setToggleStatus={setToggleStatus}
        ></ToggleBtn>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default App;
