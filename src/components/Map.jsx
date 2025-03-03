const Map = () => {
    return (
      <div className="overflow-hidden rounded-lg shadow-lg">
        <iframe
          title="Location"
          className="w-full h-64 md:h-96"
          src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_LINK"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default Map;
  