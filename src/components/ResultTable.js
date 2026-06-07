export default function ResultTable({
  data,
}) {
  if (!data?.length) {
    return (
      <p style={{ marginTop: "20px" }}>
        No Data Found
      </p>
    );
  }

  return (
    <table
      border="1"
      cellPadding="10"
      width="100%"
      style={{
        marginTop: "20px",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th>Target URL</th>
          <th>Approved URL</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.targetUrl}</td>
            <td>{item.approvedUrl}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}