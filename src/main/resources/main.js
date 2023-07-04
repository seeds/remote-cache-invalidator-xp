const CONTEXT_LIB = require("/lib/xp/context");
const CONTENT_LIB = require("/lib/xp/content");
const EVENT_LIB = require("/lib/xp/event");
const RUN_CACHE_CLEAN = require('/lib/run')

//Set up listener
EVENT_LIB.listener({
  type: "node.pushed",
  callback: handleEvent
});

/**
 * Get the context so we can get the correct app config based on repo
 */
function getContextToBeUsed(repo) {
  return {
    user: {
      login: "su",
      idProvider: "system",
    },
    principals: ["role:system.admin"],
    repository: repo,
    branch: "master",
  };
}

/**
 * Event listener that listen to a 'node pushed to another branch'
 */
function handleEvent(event) {
  CONTEXT_LIB.run(getContextToBeUsed(event.data.nodes[0].repo),function (){
    const firstNodeOfPublishedTreeId = event.data.nodes[0].id;
    const appConfig = CONTENT_LIB.getSiteConfig({
      key: firstNodeOfPublishedTreeId,
      applicationKey: app.name
    });

    if(appConfig != null){
      RUN_CACHE_CLEAN.run(appConfig)
    }
  });
};