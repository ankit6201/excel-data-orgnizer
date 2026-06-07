import { toast } from "react-toastify";
import { FaRegCopy } from "react-icons/fa";

export default function ResultTable({
  data,
  selectedCategory,
}) {
  if (!data?.length) {
    return (
      <p className="mt-5 text-center text-gray-500">
        No Data Found
      </p>
    );
  }

  const handleCopy = () => {
    const text = data
      .map(
        (item) =>
          `${item.targetUrl}\t${item.approvedUrl}`
      )
      .join("\n");

    navigator.clipboard.writeText(text);

    toast.success(
      `${selectedCategory} data copied successfully`
    );
  };

  return (
    <div className="mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          {selectedCategory}
          <span className="ml-2 text-sm text-gray-500">
            ({data.length})
          </span>
        </h2>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md"
        >
          <FaRegCopy />
          <span className="hidden sm:inline">
            Copy
          </span>
        </button>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 bg-white">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-gradient-to-r from-pink-500 to-blue-500 text-white">
              <th className="px-4 py-3 text-left font-semibold">
                Target URL
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Approved URL
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3 break-all text-sm text-gray-700">
                  {item.targetUrl}
                </td>

                <td className="px-4 py-3 break-all text-sm text-gray-700">
                  {item.approvedUrl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}