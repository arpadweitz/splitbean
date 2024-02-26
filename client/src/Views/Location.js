function Location() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11972.865782886653!2d2.15484835!3d41.3911056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1708095200180!5m2!1sen!2ses"
        width="100%"
        height="600"
        style={{ border: "0" }} // Change the style attribute to an object
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"

      ></iframe>
    </div>
  );
}

export default Location;