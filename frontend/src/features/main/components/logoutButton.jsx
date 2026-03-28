import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router';

const LogoutButton = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const onLogout = async () => {
    try{
      const res = await handleLogout();
      alert("logout sucessfully")
      navigate('/login')
    }catch(err){
      alert(err.message || "Login failed")
    }
  };

  return (
    <button className="logout-btn" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
