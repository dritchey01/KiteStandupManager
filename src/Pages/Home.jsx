import TeamList from "../Components/TeamList";

const Home = () => {
  return (
    <div className="grid grid-cols-4 px-5">
      <div className="hidden md:block">
        <TeamList />
      </div>
      <div className="col-span-4 md:col-span-3">Issues</div>
    </div>
  );
};

export default Home;
