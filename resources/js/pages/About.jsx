import React from 'react';


const About = () => {
    return (
        <div>
            <div className="page-heading about-page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Thông tin về chúng tôi</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src="assets/images/about-left-image.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <h4>HEXA</h4>
                                <span>Chào mừng bạn đến với Công ty Hexa, nơi mang đến những giá trị tốt nhất cho khách hàng thông qua các sản phẩm và dịch vụ chất lượng cao.

                                    Với sứ mệnh “Đồng hành cùng phong cách sống hiện đại”, chúng tôi luôn nỗ lực không ngừng để cung cấp những sản phẩm thời trang và phụ kiện phù hợp với mọi đối tượng, từ trẻ em đến người lớn.</span>
                                <div className="quote">
                                    <i className="fa fa-quote-left"></i><p>Chất lượng hàng đầu: Chúng tôi cam kết mang đến sản phẩm được chọn lọc kỹ lưỡng, đáp ứng tiêu chuẩn cao nhất.</p>
                                    <i className="fa fa-quote-left"></i><p>Đa dạng mẫu mã: Luôn cập nhật xu hướng mới nhất để bạn có nhiều sự lựa chọn.</p>
                                    <i className="fa fa-quote-left"></i><p>Dịch vụ chuyên nghiệp: Đội ngũ tận tâm luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của khách hàng.</p>
                                </div>
                                <p>Hãy để Hexa đồng hành cùng bạn trong hành trình khẳng định phong cách và sự tự tin của chính mình!
                                Liên hệ ngay với chúng tôi để trải nghiệm sự khác biệt!</p>
                                <ul>
                                    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default About;
