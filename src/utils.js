import { LIMITED_DISH_ID, FISH_STARTER_ID, FISH_MAIN_ID } from './constants'

export const getErrorMessage = (user1Selection, user2Selection, setError) => {
  // Error on not selecting a main for user1
  if (user1Selection.starters.name && user1Selection.desserts.name && !user1Selection.mains.name) {
    return setError('You must select either a starter and a main course or a dessert and main course')
    // Error on not selecting a main for user2
  } else if (user2Selection.starters.name && user2Selection.desserts.name && !user2Selection.mains.name) {
    return setError('You must select either a starter and a main course or a dessert and main course')
    // Error for selecting all three options user1
  } else if (user1Selection.starters.name && user1Selection.desserts.name && user1Selection.mains.name) {
    return setError('You must only select a starter or a dessert with a main course')
     // Error for selecting all three options user2
  } else if (user2Selection.starters.name && user2Selection.desserts.name && user2Selection.mains.name) {
    return setError('You must only select a starter or a dessert with a main course')
    // Error for selecting all two fish courses user1
  } else if (user2Selection.starters.id === FISH_STARTER_ID && user2Selection.mains.id === FISH_MAIN_ID) {
    return setError('Please do not upset our waiter Pierre, only order one fish course')
    // Error for selecting all two fish courses user2
  } else if (user1Selection.starters.id === FISH_STARTER_ID && user1Selection.mains.id === FISH_MAIN_ID) {
    return setError('Please do not upset our waiter Pierre, only order one fish course') 
    // Error for only one cheesecake left
  }else if (user2Selection.desserts.id === LIMITED_DISH_ID && user1Selection.desserts.id === LIMITED_DISH_ID) {
    return setError('Sorry we only have one cheesecake left')
  } else {
    return setError(undefined)
  }
}