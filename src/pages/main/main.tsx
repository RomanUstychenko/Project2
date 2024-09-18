import { NavLink } from 'react-router-dom';

const Main: React.FC = () => {



    return (
      <div >
        <p>hello</p>
  <button><NavLink to={'/imageSearch'}>Image</NavLink></button>
      </div>
    );
  }
  
  export default Main;