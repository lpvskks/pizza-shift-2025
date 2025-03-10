interface Item {
  src: string;
  alt: string;
  text: string;
  className?: string;
}

const IconWithText: React.FC<Item> = ({ src, alt, text, className = '' }) => (
  <div className={`flex items-center ${className}`}>
    <img src={src} alt={alt} className="w-[24px] h-[24px]" />
    <span className="text-[16px] font-medium text-gray-800 pl-3">{text}</span>
  </div>
);

export default IconWithText;