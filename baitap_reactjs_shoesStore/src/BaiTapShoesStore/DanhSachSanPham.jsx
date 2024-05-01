import React from 'react'



const DanhSachSanPham = (props) => {
    const { products, themVaoGioHang } = props;

    return (
        <div>
            <div className="row">
                {products.map((prod, index) => {
                    return <div className="col-3 mt-2" key={index}>
                        <div className="card">
                            <img src={prod.image} alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6"><h6>{prod.name}</h6></div>
                                    <div className="col-6 text-end"><p>${prod.price}</p></div>
                                </div>
                                <p>{prod.shortDescription}</p>
                                <button className='btn btn-dark' onClick={() => {
                                    themVaoGioHang(prod)
                                }}>
                                    <i class="fa fa-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )

}

export default DanhSachSanPham