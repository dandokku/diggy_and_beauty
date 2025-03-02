import emailjs from 'emailjs-com';

const SubscriptionModal = ({ setShowModal }) => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
      .then(() => {
        alert('Email Sent');
        setShowModal(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-96 shadow-xl animate-zoomIn">
        <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <form onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="w-full p-2 border mb-4 rounded-lg"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionModal;
