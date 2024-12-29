import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductList from './pages/ProductList';
import DetailProduct from './pages/DetailProduct';
const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/category/:id" element={<ProductList />} />
                    <Route path="/product/:id" element={<DetailProduct />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
            </Layout>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));
