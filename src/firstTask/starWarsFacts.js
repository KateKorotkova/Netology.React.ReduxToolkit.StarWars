import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showFacts } from './slice';
import NumericInput from 'react-numeric-input';


export function StarWarsFacts() {
  const facts = useSelector((state) => state.facts.currentFacts)
  const dispatch = useDispatch()


  const handleChange = value => {
    dispatch(showFacts(value));
  };


  return (
    <div>
        <NumericInput min={0} max={5} onChange={handleChange}/>
        <div>
            {
                facts.map((x) => {
                    return <><div><span>{x}</span></div></>
                })
            }
        </div>
    </div>
  )
}