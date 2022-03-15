import React from 'react';

function TableRow(props) {
    return (
        <tr  className='text-center' key={props.key}>
            <td>{props.id}</td>
            <td>{props.firstname}</td>
            <td >{props.lastname}</td>
            <td >
                <button className="button-green" onClick={() => props.editItem(props.id)}>Edit</button>
                <button className="button-red" onClick={() => props.deleteItem(props.id)}>Delete</button>
            </td>
        </tr>
    );
}

export default TableRow;