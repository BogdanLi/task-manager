import Box from "../components/ui/Box";

const HomePage = () => {
  return (
    <div className='h-[calc(100vh-200px)] grid place-items-center'>
      <Box>
        <h1 className='text-3xl font-bold'>Your Tasks</h1>
        <div className='flex gap-4 mt-4'>
          <input type='text' />
          <button className='px-8'>+</button>
        </div>
      </Box>
    </div>
  );
};

export default HomePage;
