
const colors = [
  { name: "Black", value: "black" },
  { name: "Gray", value: "#888888" },
  { name: "White", value: "#ffffff" },
  { name: "Wheat", value: "wheat" },
  { name: "Yellow", value: "yellow" },
  { name: "Orange", value: "orange" },
  { name: "Tomato", value: "tomato" },
  { name: "Chocolate", value: "chocolate" },
  { name: "Brown", value: "brown" },
  { name: "Pink", value: "pink" },
  { name: "Red", value: "red" },
  { name: "Maroon", value: "maroon" },
  { name: "Purple", value: "purple" },
  { name: "Blue", value: "blue" },
  { name: "Darkblue", value: "darkblue" },
  { name: "Skyblue", value: "skyblue" },
  { name: "Mint", value: "#33d7ff" },
  { name: "Green", value: "green" },
  { name: "Darkgreen", value: "darkgreen" },
  { name: "Lightgreen", value: "lightgreen" },
  { name: "Cyan", value: "cyan" },
  { name: "Lavender", value: "#E6E6FA" },
  { name: "Gold", value: "#8e7428" },
  { name: "Coral", value: "coral" },
  { name: "Navy", value: "navy" },
  { name: "Teal", value: "teal" },
  { name: "Olive", value: "olive" },
  { name: "Slategray", value: "slategray" },
];

const CustomColors = ({ handleColor }) => {
 ;

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-4">
          {colors.map(({ name, value }) => (
            <div
              key={name}
              onClick={() => handleColor(value)}
              className="flex flex-col text-center cursor-pointer"
            >
              <div className={`h-12  shadow-lg rounded-lg`} style={{ background: value }}></div>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomColors;