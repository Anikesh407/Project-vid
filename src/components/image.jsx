import frame from "../assets/frame.png";
function Image({ image }) {
  return (
    <div className=" relative">
      <img src={frame} width={350} height={350} loading="lazy" />
      <img
        className="  absolute top-[-10px] left-[-10px] h-full "
        src={image}
        width={350}
        height={350}
        loading="lazy"
      />
    </div>
  );
}
export default Image;
