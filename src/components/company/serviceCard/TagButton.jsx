export default function TagButton({ text, onClick }) {
  return (
    <button
      className="rounded-[50px] border border-brand1 w-16 sm:w-28 md:w-32 bg-brand1 hover:bg-white"
      onClick={onClick}
    >
      <p className="text-md sm:text-2xl  md:text-2xl lg:text-3xl sm:py-1 mt-1 text-white hover:text-brand1">
        {text}
      </p>
    </button>
  );
}
