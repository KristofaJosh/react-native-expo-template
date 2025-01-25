import { store } from "../redux/store";

function run(){
  // persistor.purge()
  console.log(store.getState());

}

run()