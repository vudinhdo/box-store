import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const {id} = useParams(); // Lấy `id` từ URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`/api/product/${id}`) // Gọi API chi tiết sản phẩm
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.response ? error.response.data.message : "Lỗi không xác định");
                setLoading(false);
            });
    }, [id]);

    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    if (loading) {
        return <p>Đang tải...</p>;
    }

    if (error) {
        return <p>Lỗi: {error}</p>;
    }

    return (
        <div>
            <div className="page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Chi tiết sản phẩm</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section" id="product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="left-images">
                                <img
                                    src={product.avatar ? product.avatar : "/default-image.jpg"}
                                    alt={product.name}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-content">
                                <h4>{product.name}</h4>
                                <span className="price">{formatNumber(product.price)} vnd</span>

                                <div className="quote">
                                    <i className="fa fa-quote-left"></i><p>{product.thumbnail}</p>
                                </div>
                                <div className="quantity-content">
                                    <div className="left-content">
                                        <h6>No. of Orders</h6>
                                    </div>
                                    <div className="right-content">
                                        <div className="quantity buttons_added">
                                            <input type="button" value="-" className="minus"></input>
                                            <input type="number" step="1"
                                                   min="1" max=""
                                                   name="quantity"
                                                   value="1" title="Qty"
                                                   className="input-text qty text"
                                                   size="4" pattern=""
                                            ></input>
                                            <input
                                                type="button" value="+" className="plus">


                                            </input>

                                        </div>
                                    </div>
                                </div>
                                <div className="total">
                                    {/*<h4>Total: $210.00</h4>*/}
                                    <div className="main-border-button"><a href="#">Add To Cart</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default ProductDetail;
