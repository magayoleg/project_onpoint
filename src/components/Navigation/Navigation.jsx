import './Navigation.sass';

const Navigation = ({ updateIndex }) => {
  return (
    <div className="nav nav-position">
      <button
        type="button"
        className="nav__home"
        onClick={() => updateIndex(0)}
      >
        <img src="./icons/home.png" alt="home.png" />
      </button>
      <div></div>
      <a href='#' className="nav__project">
        <img src="./icons/project.png" alt="project.png" />
      </a>
    </div>
  );
};

export default Navigation;
