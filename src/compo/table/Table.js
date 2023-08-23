import React from 'react'

const Table = (props) => {

    const { tableName, tableStyle, tableId, thName, tdName } = props
    return (<>
        <table
            name={tableName}
            id={tableId}
            className={tableStyle ? tableStyle : "fill-btn"}
        />
        <thead>
            <tr>
                <th>{thName}</th>
            </tr>
        </thead>
        <tbody>
            <td>{tdName}</td>
        </tbody>
    </>
    )
}

export default Table
