import './Table.css';
interface IProps {


 columns: string[];
  data: Record<string, unknown>[];
  striped?: boolean;

}

const Table=({ columns, data, striped }:IProps)=> {
  return (
    <table className={`table ${striped ? "striped" : ""}`}>
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                ))}
            </tr>
        </thead>
        <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column}>
                {String(row[column.toLowerCase()])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table