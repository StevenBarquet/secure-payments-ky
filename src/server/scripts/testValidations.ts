import { yupValidator } from '../../shared/utils/yupUtils';
import * as yup from 'yup';
// import { timeRelatedVal } from '../entities/tareas/validations/model';

/** placeHolder para cambiar y que ts no chille */
const _anySchema = yup.string()

async function main() {

  const input = {taskType: 'single'};
  
  const result = await yupValidator(input, _anySchema);
  console.log('--VALIDATION RESULTS--');
  console.log('Input: ', input);
  console.log('Result: ', !!result);
  
}

main();


function values() {
  const validWeek = {
    Monday: true,
    Tuesday: false,
    Wednesday: true,
    Thursday: false,
    Friday: true,
    Saturday: false,
    Sunday: true
  };
  return {
    validTasks: {
      newSingle: {},
      newRepeat: {},
      updateSingle: {},
      updateRepeat: {}
    },
    timeRelated: {
      incorrectHaveBoth: {
        taskType: 'repeat',
        repeatDays: {
          week1: validWeek,
          week2: validWeek,
          week3: validWeek,
          week4: validWeek
        },
        singleDate: '2024-05-24T00:00:00.000Z'
      },
      correctRepeatDays: {
        taskType: 'repeat',
        repeatDays: {
          week1: validWeek,
          week2: validWeek,
          week3: validWeek,
          week4: validWeek,
        }
      },
      correctSingleDate: {
        taskType: 'single',
        singleDate: '2024-05-24T00:00:00.000Z',
      },
    }
  };
}
