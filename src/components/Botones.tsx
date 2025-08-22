import { BotonesProps } from "@/types/types";

const Botones = ({ label, className, onClick, icon }: BotonesProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer hover:bg-gray-900 transition-all`}
    >
      {label} {icon}
    </button>
  );
};

export default Botones;
