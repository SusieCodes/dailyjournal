import { formatDate } from "./helper.js";

export const Post = (entryObj) => {
    let pageDate = formatDate(entryObj.timestamp);
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">

            <div id="my-date" class="entry-date">${pageDate}</div>
            <h2 id="my-concept" class="entry-concept">${entryObj.concept}</h2>
            <div id="my-entry" class="entry-entry">${entryObj.entry}</div>
            <div id="my-mood" class="mood-style">
            <div class="entry-mood">Mood:</div><div class="entry-mood__info">${entryObj.mood}</div>
            </div>

        </section>`
  }

