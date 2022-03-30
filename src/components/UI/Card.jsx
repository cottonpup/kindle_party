const Card = (props) => {
  return (
    <div className="w-96 px-6 py-6 bg-white shadow-xl ring-1 ring-gray-900/5 rounded-md">
      {props.children}
    </div>
  );
};

export default Card;
