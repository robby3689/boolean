export default function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <textarea placeholder="Your Message" rows="4" /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
