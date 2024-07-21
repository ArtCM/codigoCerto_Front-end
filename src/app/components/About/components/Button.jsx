const Button = ({ children }) => {
  return (
    <button className="bg-red text-white py-2 px-4 rounded shadow-lg hover:bg-dark transition duration-300">
      {children}
    </button>
  );
};

export default Button;
