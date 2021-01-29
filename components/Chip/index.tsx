interface ChipProps {
    label: string;
}

const Chip = ({ label }: ChipProps) => {
    return (
        <div className="m-2 py-2 px-4 flex items-center justify-center bg-white rounded-full">
            {label}
        </div>
    );
};

export default Chip;
