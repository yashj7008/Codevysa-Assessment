import React from 'react'
import { LuArrowDownUp } from "react-icons/lu";

const ProductTable = ({products}) => {
  return (
    <table className="productTable"  style={{  overflowX:"scroll" }}>
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th>Heading 1 <LuArrowDownUp/></th>
          <th>Heading 2 <LuArrowDownUp/></th>
          <th>Heading 3 <LuArrowDownUp/></th>
          <th>Heading 4 <LuArrowDownUp/></th>
          <th>Heading 5 <LuArrowDownUp/></th>
          <th>Heading 6 <LuArrowDownUp/></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td><input type="checkbox" /></td>
            <td>{product.SrNo}</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
            <td>item</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductTable