
import type { RootState } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
function MainButton() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
  
    return (
      <div>
        <div>
          <button className='px-3 py-2 bg-black text-white'
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button className='px-3 py-2 bg-black text-white'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    )
}

export default MainButton;