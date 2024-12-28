import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="page-heading about-page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Liên hệ với chúng tôi</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="subscribe">
                <div className="container">


                    <div className="section-heading">
                        <h2>Hãy đăng ký email và phản hồi để nhận những thông báo về ưu đãi</h2>
                    </div>
                    <form id="subscribe" action="" method="get">
                        <div className="row">
                            <div className="col-lg-5">
                                <fieldset>
                                    <input name="name" type="text" id="name" placeholder="Tên của bạn "
                                           required=""/>
                                </fieldset>
                            </div>
                            <div className="col-lg-5">
                                <fieldset>
                                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*"
                                           placeholder="Email " required=""/>
                                </fieldset>
                            </div>
                            <div className="col-lg-2">
                                <fieldset>
                                    <button type="submit" id="form-submit" className="main-dark-button"><i
                                        className="fa fa-paper-plane"></i></button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
