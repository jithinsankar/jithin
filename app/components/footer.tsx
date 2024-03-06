export const Footer = () => {
  return (
    <div className="bottom-0 h-14 w-full border-t-2">
      <div className="max-w-screen-md mx-auto items-center p-4">
        <div className="flex space-x-4">
          <div className="hover:opacity-75 transition">
            <a href="#posts">Posts</a>
          </div>
          <div className="hover:opacity-75 transition">
            <a href="https://www.linkedin.com/in/jithinsankarnk/">LinkedIn</a>
          </div>
          <div className="hover:opacity-75 transition">
            <a href="https://twitter.com/jithins4nkar">Twitter</a>
          </div>
          <div className="hover:opacity-75 transition">
            <a href="https://github.com/jithinsankar">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};
