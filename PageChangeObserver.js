function detectPagination() {
    // Select the target node
    const targetNode = document.querySelector("[fs-cmsload-mode='pagination']");
    const nodeToScroll = document.querySelector(".container-small");

    // Create an instance of Mutation Observer
    const observer = new MutationObserver((mutationsList, observer) => {
        // Iterate through the mutations
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Child nodes have been added or removed
                console.log('Child nodes have been modified');
                nodeToScroll.scrollIntoView({
                    "behavior":"smooth",
                })
            }
        }
    });

    // Configuration options for the observer
    const config = {
        childList: true, // Watch for additions/removals of child nodes
    };

    // Start observing the target node
    observer.observe(targetNode, config);

}

detectPagination();