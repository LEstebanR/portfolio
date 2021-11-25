import '../assets/styles/home.scss'

const avatar = 'https://res.cloudinary.com/lesteban/image/upload/ar_1:1,b_rgb:262c35,bo_5px_solid_rgb:000000,c_fill,g_auto,r_max,w_1000/v1633280469/avatar/IMG_5141_sxqevl.jpg'

const Home = () => {
  return (
    <div className="home">
      <img src={avatar} alt="avatar" className="home_image"></img>
      <h1>Luis Esteban Ramírez</h1>
      <h2>FullStack Web Developer</h2>
      <a 
      href="https://drive.google.com/file/d/1Qg7qtY_rp-QR4aaUPsit7e-mJv_NC4dS/view?usp=sharing" 
      target="blank">
        <button>Dowload CV</button>
      </a>
    </div>
  );
};

export default Home;