import React from 'react'

export default function List() {
    // const items = ['Apple', 'Pineapple', 'Watermelon','Orange'];
    const transaction = [
        {id: '1', Details: 'Payment to supplier Q', Amount: 'N1,200', Date: '20/08/2024'},
        {id: '2', Details: 'Payment to supplier B', Amount: 'N1,400', Date: '20/09/2024'},
        {id: '3', Details: 'Payment to supplier A', Amount: 'N3,200', Date: '23/08/2024'},
        {id: '4', Details: 'Payment to supplier M', Amount: 'N2,100', Date: '21/08/2023'},
        {id: '5', Details: 'Payment to supplier N', Amount: 'N4,200', Date: '26/06/2024'},
        {id: '6', Details: 'Payment to supplier O', Amount: 'N1,600', Date: '22/09/2024'},
        {id: '7', Details: 'Payment to supplier T', Amount: 'N1,800', Date: '21/07/2024'},
    ]
  return (
    <>
    <ul>
        {transaction.map((trans=>(
            <li key={trans.id}>
                <p>Details: {trans.Details}</p>
                <p>Amount: {trans.Amount}</p>
                <p>Date: {trans.Date}</p>
            </li>
        )))}
        {/* {items.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}; */}
       
    </ul>
    
    </>
  )
}
