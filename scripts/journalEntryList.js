/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "./journalData.js"
import { JournalEntryComponent } from "./journalEntry.js"

const entryLog = document.querySelector("#entryLog");

export const EntryListComponent = () => {

    const allEntries = getJournalEntries();
    addEntriesToDom(allEntries);

}

const addEntriesToDom = (arrayOfEntries) => {

    let entryHTMLRep = "";
    for (const singleEntry of arrayOfEntries) {
        entryHTMLRep += JournalEntryComponent(singleEntry);
    }
    
    entryLog.innerHTML += entryHTMLRep
}