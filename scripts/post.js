import { formatDate } from "./helper.js";

export const Post = (entryObj) => {
    let pageDate = formatDate(entryObj.timestamp);
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">

            <div id="date" class="entry-date">${pageDate}</div>
            <h2 id="concept" class="entry-concept">${entryObj.concept}</h2>
            <div id="entry" class="entry-entry">${entryObj.entry}</div>
            <div class="mood-style">
            <div id="mood1" class="entry-mood">Mood:</div><div id="mood2" class="entry-mood__info">${entryObj.mood}</div>
            </div>

        </section>`
  }

