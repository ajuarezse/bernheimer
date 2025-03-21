import "./Main.css";
import heroImage from "../../assets/heroImage.jpg";

function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Hi! I'm Alan, and I live in Berkeley</h1>
      <div className="main__content">
        <div className="main__text">
          <p className="main__paragraph">
            Alan Bernheimer (born 1948 in New York City) is an American poet,
            often associated with the San Francisco Language poets and the New
            York School poets.
          </p>
          <p className="main__paragraph">
            He attended Horace Mann School, and graduated in 1970 from Yale
            College, where he became friends with poets Steve Benson, Kit
            Robinson, Rodger Kamenetz, and Alex Smith and studied literature
            with A. Bartlett Giamatti and Harold Bloom and poetry with Ted
            Berrigan, Peter Schjeldahl, and Bill Berkson. He was a member of
            Manuscript Society in his senior year.
          </p>
          <p className="main__paragraph">
            He continued his association with the New York School poets and the
            St. Mark's Poetry Project for several years, and moved to San
            Francisco in 1976, where through Benson and Robinson he met other
            writers—such as Rae Armantrout, Carla Harryman, Lyn Hejinian, Tom
            Mandel, Ted Pearson, Bob Perelman, Ron Silliman, and Barrett
            Watten—who would soon become known as the San Francisco Language
            poets.
          </p>
          <p className="main__paragraph">
            Bernheimer worked as a corporate communications executive for Bay
            Area technology and solar companies.[5] He is married to Melissa
            Riley, a former San Francisco public librarian and
            freedom-of-information activist.
          </p>
        </div>
        <img src={heroImage} alt="" className="main__portrait" />
      </div>
    </main>
  );
}

export default Main;
