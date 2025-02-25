const Button = ({ text }) => {
  return (
    <>
      <div className="w-40 h-12 bg-blue flex justify-center items-center rounded-3xl hover:bg-white hover:text-blue transition-all duration-500">
        <button
          type="button"
          className="text-[1.1rem] font-semibold cursor-pointer"
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
