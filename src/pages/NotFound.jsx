import { useNavigate, Link } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      NotFound
      <br />
      <Link to={`/`}>go home</Link>
      <button className="btn bg-red-300" onClick={() => navigate(-1)}>
        previous
      </button>
    </div>
  );
};

export default NotFound;
