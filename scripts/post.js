import { formatDate } from "./helper.js";

export const Post = (entryObj) => {
    let pageDate = formatDate(entryObj.timestamp);
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">

            <div class="entry-date">${pageDate}</div>
            <h2 class="entry-concept">${entryObj.concept}</h2>
            <div class="entry-entry">${entryObj.entry}</div>
            <div class="mood-style">
            <div class="entry-mood">Mood:</div><div class="entry-mood__info">${entryObj.mood}</div>
            </div>

        </section>`
  }
