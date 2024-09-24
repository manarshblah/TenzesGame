import React, { useState, useEffect } from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function TenzesGame() {
  //set to Generate the Dice
  const [result, setResult] = useState(false)
  const [dicArray, setDicArray] = useState(allNewDice())

  useEffect(() => {
    const allHelld = dicArray.every(die => die.isHeld)
    const firstValue = dicArray[0].value
    const allsameValue = dicArray.every(die => die.value === firstValue)

    if (allHelld && allsameValue) {
      setResult(true)
      console.log("you won!!")
    }
  }, [dicArray])

  function generaterNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generaterNewDie())
    }
    return newDice
  }

  function handelGenerate() {
    if(!result){
      setDicArray(prev => prev.map(die => {
        return die.isHeld ?
          die :
          generaterNewDie()
      }))
    }else{
      setResult(false)
      setDicArray(allNewDice())
    }
  }

  function handelClick(id) {
    setDicArray(prev => prev.map(die => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die
    }))
  }
  const diceElement = dicArray.map(die => (
    <Die key={die.id}
      id={die.id}
      isHeld={die.isHeld}
      value={die.value}
      handelClick={() => handelClick(die.id)}
    />))

  //set to Generate the Dice


  return (
    <div className='body-gaming'>
      <div width="100%" >{result && <Confetti />}</div>
     <div className='main'>
        <h1 className='roll'>Tenzies</h1>
        <p className='rolldis'>Roll until all dice are the same.Click wach die to freeze
          it at its current value between rolls</p>
        <div className='Dice-container'>
          {diceElement}
        </div>
        <button className='btn' onClick={handelGenerate}>
           {result ? "New Gaming":"Roll"}
          </button>

      </div>
      

    </div>
  )
}

export default TenzesGame