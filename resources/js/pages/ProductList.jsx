import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const ProductList = () => {


    const [products, setProducts] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const url = id ? `/api/products/category/${id}` : '/api/products';
        axios.get(url).then(response => {
            setProducts(response.data);
        }).catch(error => {
            console.error('Lỗi khi lấy sản phẩm:', error);
        });
    }, [id]);


    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };


    return (
        <div>
            <div className="page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Danh sách sản phẩm </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section" id="products">
                <div className="container">
                    <div className="row">
                        {products.length === 0 ? (
                            <p>Không có sản phẩm nào để hiển thị.</p>
                        ) : (
                            (products.map(product => (
                                <div className="col-lg-4" key={product.id}>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="single-product.html"><i className="fa fa-eye"></i></a>
                                                    </li>
                                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a>
                                                    </li>
                                                    <li><a href="single-product.html"><i
                                                        className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img
                                                src={product.avatar ? product.avatar : "/default-image.jpg"}
                                                alt={product.name}
                                                className="square-image"
                                            />
                                        </div>
                                        <div className="down-content">
                                            <h4>{product.name}</h4>
                                            <span>{formatNumber(product.price)} vnd</span>

                                        </div>
                                    </div>
                                </div>
                            )))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductList;
