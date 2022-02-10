const Table = (props) => {
  return (
    <>
      <table className="table-auto w-full border-slate-500">
        <thead className="text-sm font-semibold uppercase text-gray-500 bg-gray-50 border text-left">
          <tr>
            <th>College</th>
            <th>Name</th>
            <th>Major</th>
            <th>Years</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody className="text-sm font-semibold text-gray-500">
          {/* <tr>
            <td>University</td>
            <td>USU</td>
            <td>Teknologi Informasi</td>
            <td>2014</td>
            <td>3.00</td>
          </tr> */}
          {/* {props.value.map((data, index) => ( */}
          <tr>
            <td>{props.value.college}</td>
            <td>{props.value.collegeName}</td>
            <td>{props.value.major}</td>
            <td>{props.value.years}</td>
            <td>{props.value.gpa}</td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </>
  );
};

export default Table;
