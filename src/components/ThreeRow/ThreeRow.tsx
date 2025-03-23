import Image from "next/image";
import SmallNewsCard from "../SmallNewsCard";

interface ThreeRowProps {
  title: string;
  data: Array<{
    id: number;
    image: string;
    title: string;
    date: string;
  }>;
  containerClassName?: string;
  itemClassName?: string;
}

const ThreeRow = ({
  title,
  data,
  containerClassName = "",
  itemClassName = "",
}: ThreeRowProps) => {
  return (
    <div
      className={`main-container md-section-container flex flex-col  ${containerClassName}`}
    >
      <h2 className="section-header text-heading">{title}</h2>
      <div className="w-full grid sm:grid-cols-2 ml:!grid-cols-3 gap-[15px] md:gap-[20px]">
        {data.map((el) => (
          <SmallNewsCard
            key={el.id}
            image={el.image}
            title={el.title}
            date={el.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeRow;
