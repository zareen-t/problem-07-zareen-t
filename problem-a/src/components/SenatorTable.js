import React from 'react'; //import React library
import { TableHeader } from './TableHeader';
import { SenatorRow } from './SenatorRow';

const EXAMPLE_SENATORS = [
  { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
function SenatorTable(props) {
  const { senatorsList } = props;

  const senatorRows = senatorsList.map((senator) => (
    <SenatorRow key={senator.id} senatorData={senator} />
  ));

  return (
    <table className="table table-bordered">
      <TableHeader columnNames={['Name', 'State', 'Phone', 'Twitter']} />
      <tbody>{senatorRows}</tbody>
    </table>
  );
}


export { SenatorTable };