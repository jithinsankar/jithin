import { postdata } from "./post-data";

export const PostCard = () => {
  return (
    <div>
      {postdata.map((post, idx) => (
        <div key={idx} className="hover:opacity-75 transition bg-card">
          {" "}
          <a href={post.url}>
            <div className="mt-4 border-2 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <div className="font-xs font-light">24 February 2024</div>
              <div className="flex space-x-2 text-xs mt-4">
                {post.tags.map((tag, idxx) => (
                  <div
                    className="border-2 p-1 px-2 rounded-lg bg-accent"
                    key={idxx}
                  >
                    <p className="text-accent-foreground">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
