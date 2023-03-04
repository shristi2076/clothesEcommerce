import React from 'react'
import Navbar from './Navbar'

const Admin = () => {
  return (
    <>
    <Navbar/>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Order_id</th>
            <th scope="col">Customer_name</th>
            <th scope="col">Email</th>
            <th scope="col">Product</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
    </table>
    </>
    
  )
}

export default Admin