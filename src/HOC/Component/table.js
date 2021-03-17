import React from 'react';

const TableData = (props) => {
    return(
        <>
            <table width="50%" cellPadding="0" cellPadding="0" border="1">
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
               </thead>
               <tbody>
                    { props.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.age}</td>
                            <td>{item.email}</td>
                        </tr>
                    )) }
               </tbody>
            </table>
        </>
    )
}
export default TableData;