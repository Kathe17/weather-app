import { getCurrentDate } from "../utils/currentDate";
import { MdLocationOn } from "react-icons/md";

interface CurrentProps {
  data: {
    current?: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location?: {
      name: string;
      region: string;
    };
  };
}

const Current = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current?.condition.icon;

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 bg-black/25 p-6 rounded-xl">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white">Hoy</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <div>
            <img
              className="w-[50px] object-cover"
              src={weatherIcon}
              alt="Weather Icon"
            />
          </div>
        )}
      </div>
      <div>
        {data.current ? (
          <p className="text-5xl text-white">
            {data.current.temp_c.toFixed()}
            <span>°</span>
          </p>
        ) : null}
        {data.current ? (
          <span className="text-white">{data.current.condition.text}</span>
        ) : null}
      </div>
      <div>
        {data.location ? (
          <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
            <MdLocationOn />
            <span>
              {data.location.name}, {data.location.region}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Current;
