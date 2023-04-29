// import { createStore } from "redux";
// import rootreducer from  './reducer';

// const store=createStore(rootreducer)

// export default store





// using redux toolkit
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './reduxtoolkit/CounterSlice';

export default configureStore({
    reducer:{
        counter:counterReducer
    }
})