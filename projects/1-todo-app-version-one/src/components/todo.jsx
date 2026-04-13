function todo(){
    return 
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <input type='text' placeholder="enter todo here"></input>
        </div>
    <div class="col order-5">
      <button type="button" class="btn btn-success">Add</button>
    </div>
    <div class="col order-1">
      <input type='date'></input>
    </div>
  </div>
  </div>
}

export default todo;