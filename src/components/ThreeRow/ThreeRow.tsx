import Image from "next/image";

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
          <div
            key={el.id}
            className={`w-full flex items-center gap-[10px] p-[10px] bg-lightgray cursor-pointer ${itemClassName}`}
          >
            <Image
              src={el.image}
              width={100}
              height={100}
              alt="image"
              className="min-w-[40%] aspect-[3_/_2] border-[0.01rem] border-[#ffffffcc] object-cover"
            />
            <div className="flex flex-col items-start gap-[5px] w-[60%]">
              <p className="text-secondary font-oswald text-base">{el.title}</p>
              <span className="text-xs text-tag">{el.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeRow;
