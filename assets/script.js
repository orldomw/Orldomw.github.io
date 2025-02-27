document.addEventListener("DOMContentLoaded", function () {
    const notesList = document.getElementById("notes-list");
    const searchInput = document.getElementById("search");

    // Mock array of notes (since GitHub Pages can't list files dynamically)
    const notes = [
        "Criminal Law.md",
        "Contracts.md",
        "Constitutional Law.md"
    ];

    function displayNotes(filter = "") {
        notesList.innerHTML = ""; // Clear list
        notes.forEach(note => {
            if (note.toLowerCase().includes(filter.toLowerCase())) {
                let li = document.createElement("li");
                li.innerHTML = `<a href="notes/${note}" target="_blank">${note}</a>`;
                notesList.appendChild(li);
            }
        });
    }

    searchInput.addEventListener("input", () => displayNotes(searchInput.value));
    displayNotes();
});
