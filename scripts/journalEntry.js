/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entryObj) => {
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">

            <div class="entry-date">${entryObj.date}
            </div><!-- closes entry-date -->

            <h2 class="entry-concept">${entryObj.concept}
            </h2> <!-- closes entry-concept -->

            <div class="entry-entry">${entryObj.entry}
            </div> <!-- closes entry-entry -->

        </section>
    `
}