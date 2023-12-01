import { useBoardDataContext } from '../contexts/StateManagement'
import BoardEmpty from './BoardEmpty'

export default function Board() {
  const { activeBoard } = useBoardDataContext()
  return (
    <>
      {/* {activeBoard && activeBoard.columns.length !== 0 ? (
        <div className='w-full h-full pt-[2.4rem] px-[1.6rem] flex gap-x-[2.4rem]'>
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
          <Column />
        </div>
      ) : (
        <BoardEmpty />
      )} */}
      hey
    </>
  )
}

export function TaskCard() {
  return (
    <div className='task-card bg-white px-[1.6rem] py-[2.3rem] rounded-sm w-full max-w-[28rem] min-w-[28rem] shadow-sm mb-[2rem]'>
      <h4 className='task-title font-bold text-[1.5rem] mb-[0.8rem]'>
        Build UI for Onboarding Flow
      </h4>
      <p className='task-count text-med-gray text-[1.2rem]'>0 of 3 substasks</p>
    </div>
  )
}

export function Column() {
  return (
    <div className='column-wrapper'>
      <h3 className='column-title mb-[2.4rem] text-med-gray tracking-wide font-bold text-[1.2rem] flex items-center gap-x-[1.2rem]'>
        {/* Maybe make this little circle a color picker? */}
        <span className='column-color inline-block h-[1.5rem] w-[1.5rem] rounded-xl bg-primary-purple-hover' />
        {'Todo (4)'}
      </h3>
      <TaskCard />
      <TaskCard />
    </div>
  )
}
