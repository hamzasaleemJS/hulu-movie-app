import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <div
      className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    3xl-[2000px] flex-wrap justify-center"
    >
      {results.map((result) => (
        <Thumbnail key={result.id} results={result} />
      ))}
    </div>
  );
}

export default Results;
