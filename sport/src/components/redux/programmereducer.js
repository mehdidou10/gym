const programmereducer = (state = '', action) => {
    if(action.type=='programme'){
        return state=action.abonnement
    }


    return state;
}
export default programmereducer;