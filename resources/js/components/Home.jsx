import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';

export const Home = () => {
    return (
        <div>
            <div className="main-banner" id="top">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-content">
                                <div className="thumb">
                                    <div className="inner-content">
                                        <h4>Cửa hàng Hexa</h4>
                                        <div className="main-border-button">
                                            <a href="#">xem sản phẩm</a>
                                        </div>
                                    </div>
                                    <img src="assets/images/left-banner-image.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Nữ giới</h4>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <p>Danh sách sản phẩm cho phái đẹp.</p>
                                                        <div className="main-border-button">
                                                            <a href="#">Xem thêm</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="assets/images/baner-right-image-01.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Nam giới</h4>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <p>Danh sách sản phẩm cho phái mạnh</p>
                                                        <div className="main-border-button">
                                                            <a href="#">Xem thêm</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="assets/images/baner-right-image-02.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Trẻ em</h4>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Kids</h4>
                                                        <p>Khám phá những bộ đồ dễ thương cho trẻ em.</p>
                                                        <div className="main-border-button">
                                                            <a href="#">Xem thêm</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="assets/images/baner-right-image-03.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Phụ kiện</h4>
                                                    <span></span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <p>Danh sách phụ kiện trang trọng và lịch lãm.</p>
                                                        <div className="main-border-button">
                                                            <a href="#">Xem thêm</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src="assets/images/baner-right-image-04.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <section className="section" id="men">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Men's Latest</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="men-item-carousel">
                                <OwlCarousel className="owl-theme" loop margin={10} nav>
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <img src="assets/images/men-01.jpg" alt="Men's Product" />
                                        </div>
                                        <div className="down-content">
                                            <h4>Classic Spring</h4>
                                            <span>$120.00</span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="section" id="explore">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-content">
                                <h2> Cửa hàng Hexa</h2>
                                <span>
                                    Chào mừng bạn đến với Cửa hàng Hexa, nơi hội tụ những sản phẩm thời trang hiện đại và chất lượng cao dành cho mọi đối tượng.
                                </span>
                                <div className="quote">
                                    <i class="fa-solid fa-arrow-right"></i><p>Thời trang nam: Lịch lãm, mạnh mẽ với những thiết kế tối giản nhưng đầy cuốn hút.</p>
                                    <i class="fa-solid fa-arrow-right"></i><p>Thời trang nữ: Sang trọng, quyến rũ với những mẫu mã tinh tế, đậm chất thời thượng.</p>
                                    <i class="fa-solid fa-arrow-right"></i><p>Thời trang trẻ em: Đáng yêu, thoải mái, giúp bé yêu tự do vận động và tỏa sáng.</p>
                                    <i class="fa-solid fa-arrow-right"></i><p>Phụ kiện: Đa dạng, phù hợp với nhiều phong cách, làm nổi bật gu thẩm mỹ của bạn.</p>
                                </div>
                                <q>Đến với Hexa, bạn không chỉ mua sắm, mà còn trải nghiệm sự khác biệt từ chất lượng đến dịch vụ.
                                    Hãy khám phá và chọn ngay sản phẩm yêu thích của bạn!</q>
                                <div className="main-border-button">
                                    <a href="products.html">Xem thêm</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="leather">
                                            <h4>Phụ kiện </h4>
                                            <span>Bộ sưu tập phụ kiện mới nhất</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="first-image">
                                            <img src="assets/images/explore-image-01.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="second-image">
                                            <img src="assets/images/explore-image-02.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="types">
                                            <h4>Tất cả phụ kiện</h4>
                                            <span>còn 304 sản phẩm đang chờ bạn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
};
export default Home;
