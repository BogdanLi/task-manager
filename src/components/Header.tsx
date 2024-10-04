import useAuth from "../lib/hooks/useAuth";
import Container from "./ui/Container";

const Header = () => {
  const token = useAuth();

  return (
    <header>
      <Container>
        <div className='flex justify-between py-4'>
          <h1 className='text-3xl font-bold'>Todo</h1>
          <div className='space-x-4'>
            <button className='bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-sm transition-all duration-150'>Theme</button>

            {token && <button className='bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-sm transition-all duration-150'>Logout</button>}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
