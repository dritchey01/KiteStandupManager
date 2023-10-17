const Home = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="bg-red-200 hidden md:block">Teams</div>
      <div className="col-span-4 md:col-span-3">Issues</div>
    </div>
  );
};

export default Home;
