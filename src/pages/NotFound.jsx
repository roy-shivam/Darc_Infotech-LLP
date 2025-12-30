import Container from "../components/UI/Container.jsx";
import Button from "../components/UI/Button.jsx";

export default function NotFound() {
  return (
    <div className="page">
      <Container>
        <h1 className="h2">Page not found</h1>
        <p className="muted">The page you’re looking for doesn’t exist.</p>
        <div className="mt-16">
          <Button to="/" variant="primary">Go home</Button>
        </div>
      </Container>
    </div>
  );
}
