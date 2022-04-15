interface ICardProps {
  reverse?: boolean;
  children: React.ReactNode;
}

const Card = ({ children, reverse = false }: ICardProps) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
