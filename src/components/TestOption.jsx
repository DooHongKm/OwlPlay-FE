// import react
import React from 'react';

// import components
import OptionCard from './OptionCard';

// import style sheets
import '../styles/components/TestOption.css';

// test option component
const TestOption = ({ data }) => {

  // count options
  const countOptions = (data) => {
    let count = 0;
    for (let key in data) {
      if (key.startsWith('option') && data[key] !== 'none') {
        count++;
      }
    }
    return count;
  }

  // return
  return (
    <div className='switch-container'>
      {countOptions(data) === 4 ?
        <div className='testoption4-container'>
          <OptionCard info={data.option1}/>
          <OptionCard info={data.option2}/>
          <OptionCard info={data.option3}/>
          <OptionCard info={data.option4}/>
        </div>:
        (countOptions(data) === 6 ?
          <div className='testoption6-container'>
            <OptionCard info={data.option1}/>
            <OptionCard info={data.option2}/>
            <OptionCard info={data.option3}/>
            <OptionCard info={data.option4}/>
            <OptionCard info={data.option5}/>
            <OptionCard info={data.option6}/>
          </div>:
          <div className='testoption8-container'>
            <OptionCard info={data.option1}/>
            <OptionCard info={data.option2}/>
            <OptionCard info={data.option3}/>
            <OptionCard info={data.option4}/>
            <OptionCard info={data.option5}/>
            <OptionCard info={data.option6}/>
            <OptionCard info={data.option7}/>
            <OptionCard info={data.option8}/>
          </div>
        )
      }
    </div>
  )
}

// export
export default TestOption;