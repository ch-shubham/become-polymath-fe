import { Card } from "react-bootstrap";
import Link from "next/link";

const CardListItem = ({
  title,
  subtitle,
  author,
  link,
  date,
  mode = "normal",
}) => (
  <Card className={`fj-card fj-card-list ${mode}`}>
    <div className="card-body-wrapper">
      <Card.Header className="d-flex flex-row">
        <img
          src={author?.avatar || "https://via.placeholder.com/150"}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        {mode === "placeholder" ? (
          <div>
            <Card.Title className="font-weight-bold mb-1">author...</Card.Title>
            <Card.Text className="card-date">date...</Card.Text>
          </div>
        ) : (
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {author?.name}
            </Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        )}
      </Card.Header>
      <Card.Body>
        {mode === "placeholder" ? (
          <>
            <Card.Title className="card-main-title">title...</Card.Title>
            <Card.Text>subtitle...</Card.Text>
          </>
        ) : (
          <>
            <Card.Title className="card-main-title">{title}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
          </>
        )}
      </Card.Body>
    </div>
    {link && (
      <Link {...link}>
        <a className="card-button">Read More</a>
      </Link>
    )}
  </Card>
);

export default CardListItem;
