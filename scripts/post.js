import { formatDate } from "./helper.js";

export const Post = (entryObj) => {
    let pageDate = formatDate(entryObj.timestamp);
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">

            <div id="date--${entryObj.id}" class="entry-date">${pageDate}</div>
            <h2 id="concept--${entryObj.id}" class="entry-concept">${entryObj.concept}</h2>
            <div id="post--${entryObj.id}" class="entry-entry">${entryObj.entry}</div>
            <div id="mood--${entryObj.id}" class="mood">
            <div id="mood1--${entryObj.id}" class="entry-mood">Mood:</div><div id="mood2--${entryObj.id}" class="entry-mood__info">${entryObj.mood}</div>
            </div>

        </section>`
  }

