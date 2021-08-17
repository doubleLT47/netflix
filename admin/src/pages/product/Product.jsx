import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import './product.css';
import { productData } from '../../dummyData'
import { Publish } from '@material-ui/icons';

const Product = () => {
    return (
        <div className="product">
             <div className="product__title-container">
                <h1 className="product--title">Edit Product</h1>
                <Link to="/new-product" >
                    <button className="product-add--button">Create</button>
                </Link>
            </div>
            <div className="product-top">
                <div className="product__left">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" grid />
                </div>
                <div className="product__right">
                    <div className="product__info-top"> 
                        <img 
                            src="https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg" 
                            alt="" className="product-img" 
                        />
                        <span className="product-name">IP 12 Pro max</span>
                    </div>
                    <div className="product__info-bottom">
                        <div className="product__info-item">
                            <div className="product__info-key">Id:</div>
                            <div className="product__info-value">123</div>
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">Sales:</div>
                            <div className="product__info-value">$2000.00</div>
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">Active:</div>
                            <div className="product__info-value">yes</div>
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">In stock:</div>
                            <div className="product__info-value">no</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form className="product-form">
                    <div className="product__form-left">
                        <label>Product name</label>
                        <input type="text" placeholder="IP 12 Pro max" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="product__upload-right">
                        <div className="product__upload">
                            <img 
                                src="https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg" 
                                alt="" className="product-upload-img" 
                            />
                            <label htmlFor="file">
                                <Publish className="product-upload--icon"/>
                            </label>
                            <input type="file" id="file" name="file" style={{display: "none"}}/>
                        </div>
                        <button className="product__update-button">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
