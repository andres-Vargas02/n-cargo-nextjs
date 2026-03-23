interface CityChipProps {
  text: string;
}

const CityChip = ({ text }: CityChipProps) => {
  return (
    <div className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors cursor-pointer">
      {text}
    </div>
  );
};

export default CityChip;