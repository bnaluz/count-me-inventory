'use client';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="relative disabled::opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition wi-full bg-[#214258] text-white py-3 px-3 font-semibold border-2"
    >
      {label}
    </button>
  );
};

export default Button;
