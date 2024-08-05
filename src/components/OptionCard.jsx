// import react
import React, { useEffect, useState } from 'react'

// import redux
import { useDispatch, useSelector } from 'react-redux';
import { setChoice1, setChoice2, setChoice3, setChoice4, setChoice5 } from '../redux/choices';

// import style sheets
import '../styles/components/OptionCard.css';

// option card component
const OptionCard = ({ info }) => {

  // redux state
  const index = useSelector((state) => (state.choiceNum.value));
  const choices = useSelector((state) => (state.choices.value));
  const dispatch = useDispatch();

  // local state
  const [clicked, setClicked] = useState(false);

  // local variable
  const [title, address] = info.split(', ');

  // movie card click event
  const clickCard = () => {
    if (index === 0) {
      dispatch(setChoice1(title));
    } else if (index === 1) {
      dispatch(setChoice2(title));
    } else if (index === 2) {
      dispatch(setChoice3(title));
    } else if (index === 3) {
      dispatch(setChoice4(title));
    } else if (index === 4) {
      dispatch(setChoice5(title));
    }
  }

  // init state
  useEffect(() => {
    setClicked(false);
  }, [index])

  // display clicked button
  useEffect(() => {
    if (index === 0 && choices.choice1 === title) {
      setClicked(true);
    } else if (index === 1 && choices.choice2 === title) {
      setClicked(true);
    } else if (index === 2 && choices.choice3 === title) {
      setClicked(true);
    } else if (index === 3 && choices.choice4 === title) {
      setClicked(true);
    } else if (index === 4 && choices.choice5 === title) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [choices])

  // return
  return (
    <div className='optioncard-container'>
        <button
          className={clicked ? 'clicked-button' : 'non-clicked-button'}
          onClick={clickCard}
          style={{backgroundImage: `url(${address})`}}
        >
          {title}
        </button>
    </div>
  )
}

// export
export default OptionCard;