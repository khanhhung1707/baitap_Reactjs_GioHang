import React from 'react'

const GioHang = (props) => {

    const { arrDanhSachSanPham, xoaSanPham, changeQuantity } = props;
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Tên</th>
                        <th>Ảnh</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {arrDanhSachSanPham.map((itemCart, index) => {
                        return <tr key={index}>
                            <td>{itemCart.id}</td>
                            <td>{itemCart.name}</td>
                            <td>
                                <img src={itemCart.image} alt="..." width={50} />
                            </td>
                            <td>{itemCart.price}</td>
                            <td>
                                <button className='btn btn-dark mx-2' onClick={() => {
                                    changeQuantity(itemCart.id, -1)
                                }}>-</button>
                                {itemCart.quantity}
                                <button className='btn btn-dark mx-2' onClick={() => {
                                    changeQuantity(itemCart.id, 1)
                                }}>+</button>
                            </td>
                            <td>{itemCart.price * itemCart.quantity}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => {
                                    xoaSanPham(itemCart.id)
                                }}>
                                    <i className='fa fa-trash'></i>
                                </button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>

        </div>
    )
}

export default GioHang