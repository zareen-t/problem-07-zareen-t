import React from 'react'; //import React library

//example senator data objects:
// { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
// { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }

/* Your code goes here */
const SenatorRow = ({ senatorData }) => {
    const { name, state, party, phone, twitter } = senatorData;

    const phoneNumberHref = 'tel:${phone}';
    const twitterUrl = 'https://twitter.com/test1';

    return (
        <tr>
            <td>{name}</td>
            <td><a>{party.charAt(0)} - {state}</a></td>
            <td><a href="tel:123-456-789">123-456-789</a></td>
            <td><a href={twitterUrl}>@{twitter}</a></td>
        </tr>
    );
};

export { SenatorRow };