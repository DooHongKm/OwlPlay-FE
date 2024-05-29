import React from 'react'
import './TestOption.css'
import OptionCard from '../../components/OptionCard/OptionCard'

export default function TestOption({ num, data, nextPage }) {

  // 선택지 개수를 반환하는 함수
  function countOptions(data) {
    let count = 0;
    for (let key in data) {
      if (key.startsWith('option') && data[key] !== 'none') {
        count++;
      }
    }
    return count;
  }

  return (
    <div className='switch-container'>
      {countOptions(data) === 4 ?
        <div className='testoption4-container'>
          <OptionCard num={num} info={data.option1} nextPage={nextPage}/>
          <OptionCard num={num} info={data.option2} nextPage={nextPage}/>
          <OptionCard num={num} info={data.option3} nextPage={nextPage}/>
          <OptionCard num={num} info={data.option4} nextPage={nextPage}/>
        </div>:
        (countOptions(data) === 6 ?
          <div className='testoption6-container'>
            <OptionCard num={num} info={data.option1} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option2} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option3} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option4} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option5} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option6} nextPage={nextPage}/>
          </div>:
          <div className='testoption8-container'>
            <OptionCard num={num} info={data.option1} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option2} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option3} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option4} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option5} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option6} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option7} nextPage={nextPage}/>
            <OptionCard num={num} info={data.option8} nextPage={nextPage}/>
          </div>
        )
      }
    </div>

  )
}
