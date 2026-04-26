import Item from "./Item" 

const FoodItems=({items})=>{
    
    return (
        <ul className="list-group">
            {fooditems.map((item)=>(
            <Item key={item} foodItems={item}> </Item>
            ))}
        </ul>
    );
};

export default FoodItems;