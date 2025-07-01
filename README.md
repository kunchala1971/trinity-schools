#about api end points
fetch("http://localhost:8080/api/founders.php")
  .then(res => res.json())
  .then(data => console.log(data));

fetch("http://localhost:8080/api/founders.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    heading: "New Founder",
    para: "Some text",
    imageurl: "/images/new.jpg"
  })
});
fetch("http://localhost:8080/api/founders.php", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: 2,
    heading: "Updated Title",
    para: "Updated text",
    imageurl: "/images/updated.jpg"
  })
});

fetch("http://localhost:8080/api/founders.php", {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 3 })
});
