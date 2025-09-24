import { Suspense } from "react";
import Container from "./components/Navbar/Container";
import Footer from "./components/Navbar/Footer";
import HelpManagement from "./components/Navbar/HelpManagement";
import Navbar from "./components/Navbar/Navbar";

const fetchHelp = async () => {
  const res = await fetch("db.json");
  return res.json();
};
const fetchPromise = fetchHelp();

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Suspense fallback={"loading..."}>
          <HelpManagement fetchPromise={fetchPromise} />
        </Suspense>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default App;
