const Instagram = () => {
    return (
      <div className="bg-lightbg py-16">
        <h2 className="text-4xl text-primary glitter-text text-center mb-12">
          Follow Us on Instagram 💅🏽✨
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
          {Array(8)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-bg w-full h-48 rounded-lg shimmer-animation"
              ></div>
            ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://instagram.com/diggyandbeauty"
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-bg px-6 py-3 rounded-lg uppercase font-bold cursor-pointer hover:bg-accent transition"
          >
            Follow @diggyandbeauty
          </a>
        </div>
      </div>
    );
  };
  
  export default Instagram;
  