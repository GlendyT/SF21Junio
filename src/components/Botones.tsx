import { BotonesProps } from "@/types/types";

const Botones = ({ label, className, onClick, icon }: BotonesProps) => {
  return (
    <button onClick={onClick} className={`${className} cursor-pointer hover:scale-105`}>
      {label} {icon}
    </button>
  );
};

export default Botones;
