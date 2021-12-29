export const send = (where, description, title) => {
  fetch("http://localhost:8080/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      where,
      description,
      subject: title,
    }),
  });
};
