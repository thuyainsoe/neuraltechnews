import Image from "next/image";

interface SmallNewsCardProps {
  image: string;
  title: string;
  date: string;
  className?: string;
}

const SmallNewsCard: React.FC<SmallNewsCardProps> = ({
  image,
  title,
  date,
  className = "",
}) => {
  return (
    <div
      className={`w-full flex items-start gap-[10px] p-[10px] bg-lightgray cursor-pointer ${className}`}
    >
      <Image
        src={image}
        width={100}
        height={100}
        alt="image"
        className="min-w-[40%] aspect-[3_/_2] border-[0.01rem] border-[#ffffffcc] object-cover"
      />
      <div className="flex flex-col items-start gap-[5px] w-[60%]">
        <p className="text-secondary font-oswald text-base">{title}</p>
        <span className="text-xs text-tag">{date}</span>
      </div>
    </div>
  );
};

export default SmallNewsCard;
