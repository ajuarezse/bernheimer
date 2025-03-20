import "./Main.css";
import heroImage from "../../assets/heroImage.jpg";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Hi! I'm Alan, and I live in Berkeley</h1>
      <div className="main__content">
        <div className="main__text">
          <p className="main__text">
            The quick brown fox jumped over the lazy dog.
          </p>
          <p className="main__text">
            The quick brown fox jumped over the lazy dog.
          </p>
          <p className="main__text">
            The quick brown fox jumped over the lazy dog.
          </p>
          <p className="main__text">
            The quick brown fox jumped over the lazy dog.
          </p>
        </div>
        <img src={heroImage} alt="" className="main__portrait" />
      </div>
    </main>
  );
}

export default Main;
