"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  fontW?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  fontW
}) => {
  return (
    <div onClick={onClick} 
      className={`
        text-base 
        px-4 
        py-3
        hover:bg-neutral-100
        ${fontW ? 'font-bold': 'font-normal'}        
    `}>
      {label}
    </div>
  );
}

export default MenuItem;