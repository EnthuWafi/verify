
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
    
    // Mouse cursor events logic
	document.addEventListener("mouseover", (event) => {
        if (event.target.tagName === "BUTTON") {
            runtime.callFunction("ChangeCursorStyle", "Hand");
        }
    });

    document.addEventListener("mouseout", (event) => {
        if (event.target.tagName === "BUTTON") {
            runtime.callFunction("ChangeCursorStyle", "Normal");
        }
    });

    

	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}
