const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const dateInput = document.getElementById("date");
const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
dateInput.min = today.toISOString().split("T")[0];

document.getElementById("copyPayId").addEventListener("click", async function () {
  const payId = "+61 433 191 579";
  try {
    await navigator.clipboard.writeText(payId);
    this.querySelector("span").textContent = "Copied!";
    setTimeout(() => this.querySelector("span").textContent = "Copy", 1800);
  } catch {
    alert("PayID: " + payId);
  }
});

document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    topic: document.getElementById("topic").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    payment: document.getElementById("payment").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  const subject = encodeURIComponent(`Booking Request - ${booking.name} - ${booking.date}`);
  const body = encodeURIComponent(
`Hello Retro Mubin,

I would like to request an appointment.

Name: ${booking.name}
Email: ${booking.email}
Phone: ${booking.phone}
Consultation topic: ${booking.topic}
Preferred date: ${booking.date}
Preferred time: ${booking.time}
Payment amount: AUD $29
PayID used: +61 433 191 579
Payment reference: ${booking.payment}

Message:
${booking.message || "No additional message provided."}

I understand that the appointment is subject to payment verification and availability.

Kind regards,
${booking.name}`
  );

  window.location.href = `mailto:bookings@retromubin.com?subject=${subject}&body=${body}`;
});
