const FoodItems=()=>{
    let fooditems=["roti","rice","meat","ghee","milk"];

    return (
        <ul className="list-group">
            {fooditems.map((item)=>(
            <li key={item} class="list-group-item">{item}</li>
            ))}
        </ul>
    );
};

export default FoodItems;