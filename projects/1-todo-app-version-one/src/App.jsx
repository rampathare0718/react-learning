import Appname from './components/Appname'

function App() {
  return <center class='todo-container'>
    <Appname></Appname>
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

  <div class="row">
    <div class="col">
      Buy milk
    </div>
    <div class="col order-5">
      <button type="button" class="btn btn-danger">delete</button>
    </div>
    <div class="col order-1">
      4-10-26
    </div>
  </div>

  <div class="row">
    <div class="col">
      go to college
    </div>
    <div class="col order-5">
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
    <div class="col order-1">
      3-4-25
    </div>
  </div>
</div>
  </center>
}

export default App