import { Media, Image } from "react-bootstrap";

const AuthorIntro = () => (
  <Media className="mb-4 admin-intro">
    <Image
      roundedCircle
      width={64}
      height={64}
      className="mr-3"
      src="/BECOME.png"
      alt="Become Polymath"
    />
    <Media.Body>
      <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
      <p className="welcome-text">
        Polymath is a person having a good knowledge of all subjects, We aim to
        provide as much possible as we can in all fields. Enjoy Reading :)
      </p>
    </Media.Body>
  </Media>
);

export default AuthorIntro;
