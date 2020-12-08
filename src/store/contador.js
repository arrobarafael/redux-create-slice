const initialState = {
  idade: 31,
  nome: 'rafael'
}

function contador(state = initialState, action){
  switch(action.type){
    case 'INCREMENTAR':
      return state.idade + 1;
    default:
      return state;
  }
}

export default contador;