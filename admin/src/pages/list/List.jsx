
import './list.css';
import { useLocation } from 'react-router-dom'

const List = () => {
    const location = useLocation();
    const list = location.list;
    return (
        <div className="product">
             <div className="product__title-container">
                <h1 className="product--title">Edit List</h1>
            </div>
            <div className="product-top">
                <div className="product__right">
                    <div className="product__info-top"> 
                        <span className="product-name">{list.title}</span>
                    </div>
                    <div className="product__info-bottom">
                        <div className="product__info-item">
                            <div className="product__info-key">Id:</div>
                            <div className="product__info-value">{list._id}</div>
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">Genre:</div>
                            <div className="product__info-value">{list.genre}</div>
                        </div>
                        <div className="product__info-item">
                            <div className="product__info-key">Type:</div>
                            <div className="product__info-value">{list.type}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form className="product-form">
                    <div className="product__form-left">
                        <label>List Title</label>
                        <input type="text" placeholder={list.title} />
                        <label>List Type</label>
                        <input type="text" placeholder={list.type} />
                        <label>List genre</label>
                        <input type="text" placeholder={list.genre} />
                    </div>
                    <div className="product__upload-right">
                        <button className="product__update-button">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default List
