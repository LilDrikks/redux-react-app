import { closeModal, openModal } from "./modal"
import { decrementar, incrementar } from "./slice"

const logger = (store) => (next) => (action) => {
  let state = store.getState()
  const {modal, slice} = state
  if(modal === false && action.type === closeModal().type) return
  if(modal === true && action.type === openModal().type) return
  if(slice >= 10 && action.type === incrementar().type) return
  if(slice <= -5 && action.type === decrementar().type) return

  console.group()
  console.log('previus_STATE:', state)
  const result = next(action)
  state = store.getState()
  console.log('next_STATE:', state)
  console.groupEnd()
  
  
  return result
}

export default logger