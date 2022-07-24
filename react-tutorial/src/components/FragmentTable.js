import React from 'react'
import FragmentColumn from './FragmentColumn'

function FragmentTable() {
  return (
    <center>
        <table border="1">
            <tbody>
                <tr>
                    <FragmentColumn/>
                </tr>
                <tr>
                    <td>Mani</td>
                    <td>12345</td>
                    <td>Tamilnadu</td>
                </tr>
            </tbody>
        </table>
    </center>
  )
}

export default FragmentTable