interface Props extends Omit<HTMLInputElement, ""> {}
const DebouncedTextInput = ({}: Props) => {
  return (
    <input
      type="text"
      //   value={searchTerm}
      //   onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="상품 검색..."
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    />
  );
};

export default DebouncedTextInput;
