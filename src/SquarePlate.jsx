export default function SquarePlate({ value, onSquareClick, isWinningSquare }) {
  return (
    <>
      <button
        className="square"
        onClick={onSquareClick}
        style={{ color: isWinningSquare ? "green" : "black" }}
      >
        {value}
      </button>
    </>
  );
}

//ariaValueText
