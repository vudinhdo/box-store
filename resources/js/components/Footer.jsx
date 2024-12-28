const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="first-item">
                            <div className="logo">
                                <img src="assets/images/white-logo.png" alt="hexashop ecommerce templatemo"/>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h4>Sản phẩm &amp; Thể loại</h4>
                        <ul>
                            <li><a href="#">Sản phẩm cho nam giới</a></li>
                            <li><a href="#">Sản phẩm cho nữ giới</a></li>
                            <li><a href="#">Sản phẩm cho trẻ em</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h4>Liên hệ &amp; Hỗ trợ</h4>
                        <ul>
                            <li><a href="#">Bạn cần hỗ trợ?</a></li>
                            <li><a href="#">Liên hệ với chúng tôi</a></li>
                            <li><a href="#">Mua sắm</a></li>
                            <li><a href="#">Xem thông tin đơn hàng</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-12">
                        <div className="under-footer">
                            <p>Copyright © CTD

                                <br/>Design<a href="https://templatemo.com" target="_parent"
                                                title="free css templates"></a></p>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
