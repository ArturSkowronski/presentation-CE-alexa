'use strict';
const log = require('winston');
const AlexaSkill = require('src/client/AlexaSkill');
const LaunchIntent = require('src/intents/launch-intent.js');

let APP_ID;

const MeetJsSkill = function () {
	AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
MeetJSSkill.prototype = Object.create(AlexaSkill.prototype);
MeetJSSkill.prototype.constructor = MeetJSSkill;

MeetJSSkill.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
	log.info(`MeetJSSkill onSessionStarted requestId: ${sessionStartedRequest.requestId}, 
		sessionId: ${session.sessionId}`);
    // any initialization logic goes here
};

MeetJSSkill.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
	LaunchIntent.do(session, response);
};

MeetJSSkill.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
	log.info(`MeetJSSkill onSessionEnded requestId: ${sessionEndedRequest.requestId}, 
		sessionId: ${session.sessionId}`);
    // any cleanup logic goes here
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the MeetJSSkill skill.
    const MeetJSSkill = new MeetJSSkill();
    MeetJSSkill.execute(event, context);
};
