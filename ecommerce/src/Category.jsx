export default function Category({ finalCategory, setCategoryName }) {
  let category = finalCategory.map((v, i) => {
    return (
      <li
        onClick={() => setCategoryName(v)}
        key={i}
        className="bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2"
      >
        {v}
      </li>
    );
  });
  return (
    <div>
      <h3 className="text-[25px] font-[500] p-[10px]">Product Category</h3>

      <ul>{category}</ul>
    </div>
  );
}
