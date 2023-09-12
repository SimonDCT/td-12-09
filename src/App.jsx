import './App.css';

function App() {
  return (
    <>
      <h1> Hello Contact List </h1>
      <main className="content">
        <article className="profil">
          <img
            src="https://images.pexels.com/photos/1486213/pexels-photo-1486213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="profil_avatar"
            width="100"
          />
          <div className="profil_content">
            <p className="profil_name"> Michelle Santiago </p>
            <p className="profil_number"> 123 456 789 </p>
          </div>
        </article>

        <article className="profil">
          <img
            src="https://images.pexels.com/photos/3628700/pexels-photo-3628700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="profil_avatar"
            width="100"
          />
          <div className="profil_content">
            <p className="profil_name"> Michelle Santiago </p>
            <p className="profil_number"> 123 456 789 </p>
          </div>
        </article>

        <article className="profil">
          <img
            src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="profil_avatar"
            width="100"
          />
          <div className="profil_content">
            <p className="profil_name"> Michelle Santiago </p>
            <p className="profil_number"> 123 456 789 </p>
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
