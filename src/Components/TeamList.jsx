import { useState } from 'react';
import data from '../mocks/apiData.json'
import { RxAvatar } from "react-icons/rx";
const TeamList = () => {
  const [activeTeam, setActiveTeam] = useState(1)
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">TeamList</h2>
      {
        data.teams.map((member) => (
          <div key={member.id} className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${activeTeam === member.id && 'bg-gray-300'}`} onClick={() => setActiveTeam(member.id)}>
            <RxAvatar style={{width: '80px', height: '80px'}} className={`dark:text-white group-hover:scale-110 transition-all ease-in ease-out duration-300 ${activeTeam === member.id && 'scale-110'}`}/>
            <h3 className={`dark:text-white text-[20px] group-hover:font-bold transition-all ease-in ease-out duration-300 ${activeTeam === member.id && 'font-bold'}`} >{member.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default TeamList