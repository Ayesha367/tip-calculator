import TipCalculator from '../components/TipCalculator';

const Home = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://i.pinimg.com/736x/a2/81/ea/a281ea29154da519de809e674bd5d243.jpg)' }}
    >
      <TipCalculator />
    </div>
  );
};

export default Home;
