console.log("focus script loaded");
// MAIN PAGE !! : MAIN CONTENT
try {
  document.getElementById("contents").style.visibility = "hidden";
} catch (error) {
  console.log(error);
}
// SIDE PANEL !!
try {
  document.getElementById("guide-content").style.visibility = "hidden";
} catch (error) {
  console.log(error);
}
// CHIPS
try {
  document.getElementById("chips").style.visibility = "hidden";
} catch (error) {
  console.log(error);
}


try {
  const page = document.getElementById("page-manager");

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    observer.disconnect();
    for (const mutation of mutationList) {
      if (
        (mutation.type = "childList" && mutation.target.id == "secondary-inner")
      ) {
        console.log(mutation.target.lastElementChild);
        mutation.target.lastElementChild.style.visibility = "hidden";
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(page, config);
} catch (error) {
  console.log(error);
}
