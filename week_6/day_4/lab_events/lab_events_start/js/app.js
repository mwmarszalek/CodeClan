document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  // Handle form submit 

  const handleFormSubmit = function(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    //make li for each variable
    // CREATING NEW li FOR TITLE
    const newListTitle = document.createElement('li')
    newListTitle.textContent = title
    list.appendChild(newListTitle);
    // CREATING NEW LI FOR AUTHOR
    const newListAuthor = document.createElement('li')
    newListAuthor.textContent = author
    list.appendChild(newListAuthor);

    const list = document.querySelector('#reading-list');

    
}
const form = document.querySelector('#new-item-form');
  form.addEventListener('submit',handleFormSubmit);

})


