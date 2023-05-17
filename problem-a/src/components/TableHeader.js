import React from 'react'; //import React library

/* Your code goes here */
function TableHeader(props) {
    const columnNames = props.columnNames;
    return (
        <thead>
            <tr>
                {columnNames.map((name) => (
                    <th key={name}>{name}</th>
                ))}
            </tr>
        </thead>
    );
}

export { TableHeader } ;