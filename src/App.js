
import "./App.css";
import Profile from "./profile/component/Profile";
function App() {
  const handleName = (fullName) => alert(fullName);
  const fullname = "Oussama Bessaad";
  const bio = "Engineer";
  const profession = "Manager";
  const myStyle = { 
    textAlign: "center",
    color: "red",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
     };

  return (
    <div style={myStyle}>
      <h1>My Profile</h1>
      <Profile 
      fullname={fullname} 
      bio={bio} 
      profession={profession}
      handleName={handleName} >
         <img src="/oussama bessaad.jpg" style={{ width: 300, height: 480 }} alt="this is me!!"/>
      </Profile>
    </div>
  );
}

export default App;
