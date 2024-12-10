/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Stats({ data }) {
  if (!data.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }

  const numData = data.length;
  const numPacked = data.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numData) * 100);
  console.log(data);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go`
          : `You have ${numData} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
