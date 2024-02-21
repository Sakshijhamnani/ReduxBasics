const redux=require('redux')

const counterReducer=(state={counter:0},action)=>{ 

 switch(action.type){
    case 'increment':
        return { counter:state.counter+5}
    case 'decrement':
        return {counter:state.counter-1}
    default:
        return state 
 }
};

const store=redux.createStore(counterReducer);

//console.log(store.getState())

const counterSubscriber=()=>{
    const latestState=store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber)

for(let i=0;i<5;i++){
    store.dispatch({type:'increment'})
}
store.dispatch({type:'decrement'})

