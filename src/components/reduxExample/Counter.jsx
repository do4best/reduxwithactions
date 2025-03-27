import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button className='btn btn-info'
          aria-label="Increment value"
          onClick={() => dispatch(increment(increment))}
        >
          Increment
        </button>
        <span className='text-2xl p-5 text-white'>{count}</span>
        <button className='btn btn-primary'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(decrement))}
        >
          Decrement
        </button>
        <span className='text-2xl p-5 text-white'>we have the count {count}</span>
      </div>
    </div>
  )
}