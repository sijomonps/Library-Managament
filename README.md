# Book Search Website 📚

A simple book search website built using **HTML, CSS, and JavaScript**.  
Users can search for books by title and view results fetched from an external API.

---

## 🔍 Features

- Search books by title
- Fetches live data using an API
- Shows a loading spinner while fetching data
- Displays book cover image and author name
- Shows a message when no results are found
- Search triggered by pressing **Enter key**

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the webpage  
- **CSS3** – Styling and layout  
- **JavaScript (ES6)** – Logic, API calls, and DOM manipulation  
- **Fetch API** – To get book data from the server  

---

## ⚙️ How It Works

1. User enters a book title in the search input.
2. When the **Enter key** is pressed:
   - A loading spinner is displayed.
   - A request is sent to the book search API.
3. The API response is processed:
   - If no books are found, a message is shown.
   - If books are found, book images and authors are displayed.
4. Spinner is hidden after data is loaded.

---

## 📦 API Used

