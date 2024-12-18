import { BathroomsSvg, BedroomsSvg } from "../svg/Svg";

const Card = ({ item }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={item.image} />

      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{item.title}</h4>
        <div>
          {item.bedrooms} beds &bull; {item.bathrooms} baths
        </div>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">
            ${item.price}
          </span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <BedroomsSvg />
          <p>
            <span className="font-bold text-gray-900">{item.bedrooms}</span>{" "}
            Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <BathroomsSvg />
          <p>
            <span className="font-bold text-gray-900">{item.bathrooms}</span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
