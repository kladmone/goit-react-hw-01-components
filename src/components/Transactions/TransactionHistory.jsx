import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableThead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.tableTd}>{type}</td>
            <td className={css.tableTd}>{amount}</td>
            <td className={css.tableTd}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export {TransactionHistory}
