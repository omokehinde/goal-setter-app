import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createGoal } from '../features/goals/goalSlice';

function GoalForm() {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const onChangeText = (e) => {
        setText(e.target.value);
    };

    const addGoal = (e) => {
        e.preventDefault();
        dispatch(createGoal({text}));
        setText('');
    };
  return (
    <section className='form'>
        <form onSubmit={addGoal}>
            <div className='form-group'>
                <label htmlFor='text'>Goal</label>
                <input className='form-control' type='text' id ='text'
                    name='text' value={text} onChange={onChangeText} />
            </div>
            <div className='form-group'>
                <button className='btn btn-block' type='submit'>
                    Add Goal
                </button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm;