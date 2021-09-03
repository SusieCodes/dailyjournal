/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

import { formatDate } from "./helper.js"

export const JournalEntryComponent = (entryObj) => {
    let pageDate = formatDate(entryObj.date);
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">

            <div class="entry-date">${pageDate}</div>
            <h2 class="entry-concept">${entryObj.concept}</h2>
            <div class="entry-entry">${entryObj.entry}</div>

        </section>`
}