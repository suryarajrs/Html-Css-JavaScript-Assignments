// javascript code goes here

let saveBtn = document.getElementById('saveButton');

saveBtn.addEventListener('click' , ()=>{
    let textarea = document.getElementById('noteInput');

    let note = textarea.value ;
    if (note.trim() !== "") {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = '';
    renderNotes();
  }

    
})

function renderNotes() {
  const noteList = document.getElementById('noteList');
  const notes = JSON.parse(localStorage.getItem('notes')) || [];

  const notesMarkup = notes.map((note, index) => {
    return `
      <div>
        <p>${note}</p>
        <button class="load-button" data-index="${index}" onclick="loadNote(${index})">Load</button>
      </div>
    `;
  }).join('');

  noteList.innerHTML = notesMarkup;
} 

function loadNote(index) {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  if (notes[index]) {
    alert(notes[index]);
  }
}
