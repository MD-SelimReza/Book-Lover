import { useEffect, useState } from "react";
import { getBooks } from "../utils";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  // ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#A89FFF", "#23BE0A", "#FFAC33", "red", "#59C6D2"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const ReadBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBook = getBooks();
    setBooks(getBook);
  }, []);
  return (
    <div className="flex justify-center rounded-lg overflow-x-scroll bg-gray-300 p-8 flex-col items-center min-h-[calc(100vh-200px)]">
      {/* <ResponsiveContainer> */}
      <BarChart
        width={900}
        height={400}
        data={books}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis
          label={{ value: "Total Pages", angle: -90, position: "insideLeft" }}
        />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {books.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
      {/* </ResponsiveContainer> */}
      <h1 className="text-2xl underline font-bold mt-4">Reading Chart</h1>
    </div>
  );
};

export default ReadBook;
