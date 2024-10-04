import Box from "../components/ui/Box";

const LoginPage = () => {
  return (
    <div className='h-full grid place-items-center'>
      <Box>
        <form>
          <h1 className='text-3xl font-bold'>Login</h1>
          <div className='flex flex-col mt-4 gap-2'>
            <input type='email' placeholder='Email' />

            <input type='password' placeholder='Password' />
            <label className='flex gap-2 items-center'>
              <input type='checkbox' />
              <p>Remember me</p>
            </label>
            <button className=''>Login</button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default LoginPage;
