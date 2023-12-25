import "./bag.css";
import Item from "./Item";
import data from "./phoneData.json"

export default function Bag(){
    const totalPrice = (price)=>{
        
    }

    return(
        <div className="container">
            <h1>Your Bag</h1>
            <div className="itemList">
                {
                    data.map((item, index)=>{
                        return <Item title={item.title} price={item.price} image={item.image} key={index}/>
                    })
                }
            </div>
            <div className="totalContainer">
                <div className="total">
                    <p className="totalText">Total</p>
                    <p className="totalPrice"></p>
                </div>
            </div>
        </div>
    );
}