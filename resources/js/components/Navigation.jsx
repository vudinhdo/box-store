import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const Navigation = () => {
    const [isPagesOpen, setPagesOpen] = useState(false);

    const categories = [
        {id: 1, name: 'Thời trang nam',slug: "man"},
        {id: 2, name: 'Thời trang nữ',slug:"woman"},
        {id: 3, name: 'Thời trang trẻ em',slug: "kid"},
        {id: 4, name: 'Phụ kiện Thời trang',slug: "jewelry"}
    ];

    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link to="/" className="logo">
                                <img src="assets/images/logo.png" alt="Logo"/>
                            </Link>
                            {/* Menu Start */}
                            <ul className="nav">
                                <li className="scroll-to-section"><Link to="/" className="active">Trang chủ</Link></li>
                                <li className="submenu">
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        setPagesOpen(!isPagesOpen);
                                    }}>Thể loại</a>
                                    {isPagesOpen && (
                                        <ul>
                                            <li><Link to="/products">Danh sách sản phẩm</Link></li>
                                            {categories.map(category => (
                                                <li key={category.id}>
                                                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                                <li className="scroll-to-section"><Link to="/about">Về chúng tôi</Link></li>
                                <li className="scroll-to-section"><Link to="/contact">Liên hệ</Link></li>
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
