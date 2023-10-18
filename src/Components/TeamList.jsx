import data from '../mocks/apiData.json'
import { RxAvatar } from "react-icons/rx";
const TeamList = () => {
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">TeamList</h2>
      {
        data.teams.map((member) => (
          <div key={member.id} className='flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600'>
            <RxAvatar style={{width: '80px', height: '80px'}} className='dark:text-white'/>
            <h3 className="dark:text-white text-[20px]">{member.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default TeamList