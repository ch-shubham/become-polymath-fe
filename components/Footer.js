export default function Footer() {
  return (
    <footer className="page-footer">
      <div>
        &copy; Become Polymath {new Date().getFullYear()}-
        {new Date().getFullYear() + 1}
      </div>
    </footer>
  );
}
