import React from 'react'
import { Fragment, useState } from 'react'
import { useTable } from 'react-table'
import styled from 'styled-components'
import './Table.css'



function Table({columns,data}) {
const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
} = useTable({
    columns,
    data,
})

    return(
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column =>(
                            <th {...column.getHeaderGroupProps()}>{column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row,i) => {
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}



const TableMark = () => {

    const columns = React.useMemo(
        () => [
            {
                Header:'Name',
                columns:[
                    {
                        Header:'First Name',
                        assecor:'firstName'
                    },
                    {
                        Header:'Last Name',
                        assecor:'lastName'
                    },
                    
                ],
            },
            {
                Header:'Info',
                columns: [
                    {
                        Header:'Age',
                        assecor: 'age',
                    },
                    {
                        Header:'Visits',
                        assecor: 'visits',
                    },
                    {
                        Header:'Status',
                        assecor: 'status',
                    },
                    {
                        Header:'Profile Progress',
                        assecor: 'progress',
                    },
                ],
            },
        ],
        []
    )
    const data = React.useMemo(() => [{
        firstName:'firstName',
        lastName:'lastName',
        age:20,
        visits:23,
        progress: 32,
        status: 'status'
    }], [])


  return (
    <div>
      <Table columns={columns} data ={data}/>
    </div>
  )
}

export default TableMark
