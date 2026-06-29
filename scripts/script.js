

function searchFactDatabase(playerQuery) {
    // Convert input to lowercase and split by spaces to get an array of words ["news", "energy"]
    const searchWords = playerQuery.toLowerCase().trim().split(/\s+/);
    const db = runtime.objects.obj_TicketData.getFirstInstance().getJsonData().database;
    
    let bestMatch = "ERROR: No matching records found in registry.";

    // Loop through every entry in your database array
    for (const entry of db) {
        const entryTags = entry.tags.toLowerCase();
        
        // Check if every individual search word is included in the entry's tags
        const isMatch = searchWords.every(word => entryTags.includes(word));
        
        if (isMatch) {
            bestMatch = entry.truth;
            break; // Stop looping once the match is found
        }
    }

    runtime.globalVars.DB_Result_Text = bestMatch;
}