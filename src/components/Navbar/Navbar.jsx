import Container from "./Container";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-purple-200 shadow-md border-b-[0.5px] border-gray-300">
      <Container>
        <header className="px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl">TM ##</h1>
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              Faculty
            </a>
            <a href="#" className="text-gray-600">
              Students
            </a>
            <a href="#" className="text-gray-600">
              Contact
            </a>
            <button className="bg-purple-600 px-4 py-2 text-white hover:cursor-pointer rounded-lg">
              + New Assignment
            </button>
          </div>
          <div className="block md:hidden">
            <MdOutlineMenu />
          </div>
        </header>
      </Container>
    </nav>
  );
};

export default Navbar;
