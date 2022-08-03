export default function FormInput(props) {
  return (
    <div className="md:w-1/2 w-full md:p-10 p-6">
      <input
        className="border-2 w-full h-12 rounded focus:outline-none text-center text-black"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}
