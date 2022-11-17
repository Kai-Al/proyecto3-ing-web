interface ButtonProps {
  children: JSX.Element;
}

const Button = ({ children }: ButtonProps) => (
  <div>
    <button
      type='button'
      className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'
    >
      {children}
    </button>
  </div>
);

export default Button;
