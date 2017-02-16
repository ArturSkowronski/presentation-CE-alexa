'use strict';
const log = require('winston');
const AlexaSkill = require('src/client/AlexaSkill');

let APP_ID;

const MeetJSSkill = function () {
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
	response.tell(`Hello World`);
};

MeetJSSkill.prototype.intentHandlers = {
	AboutMyself: function (intent, session, response) {
		response.tellWithSSML(`<say-as interpret-as="interjection">okey dokey</say-as>. Welcome in SmartRecruiters office on February Meet JS. I am Alexa and I'm sure we will show you few interesting things today together with Artur! I don't like babbering about myself, so please Artur, can you introduce me properly?`);
	},
	LearnPolish: function (intent, session, response) {
		response.tellWithSSML(`<say-as interpret-as="interjection">uh oh</say-as>. The truth is, I don't know myself - yet. I'm still learning new languages - but for example, since last Monday I'm talking German. My creators use few tricks to make my learning process much smoother, so it should be possible, and, <say-as interpret-as="interjection">spoiler alert</say-as>, in not that distant future! Artur, please, can you tell audience what tricks I'm talking about?`);
	},
	WhyYou: function (intent, session, response) {
		response.tellWithSSML(`<say-as interpret-as="interjection">oh dear</say-as>. Is it some rhetorical question? <say-as interpret-as="interjection">ouch</say-as>. how can you even ask? Have you ever tried to teach Siri something? <say-as interpret-as="interjection">good luck</say-as>! She may seems cleaver, but If you want something more from her than what she already know, you will have hard time. Me, on the other side, I'm eager to learn from you and become more important part of your life! Aren't you already know that? I'm your coopresenter. <say-as interpret-as="interjection">fancy that</say-as>.`);
	},
	AmazonLambda: function (intent, session, response) {
		response.tellWithSSML(`<say-as interpret-as="interjection">open sesame</say-as>. We will start with Amazon Lambda - that's definitely way to go! How many of you know Amazon Lambda, please raise hands, <say-as interpret-as="interjection">now now</say-as>! <break time='2s'/> Ok, I see few. For rest of you we will need to make some proper introduction. Artur, can you carry on? `);
	},
	Intents: function (intent, session, response) {
		response.tellWithSSML(`<say-as interpret-as="interjection">as you wish</say-as>. Intents are possible actions you can use to interact with me - we can consider them as functions. Without specific intent, I won't be able to help you with anything. For example: Asking me for intents definition was intent too! <break time='0.5s'/> In our case, requesting for tweets will be intent. <break time='0.5s'/><say-as  interpret-as="interjection">tweet tweet</say-as>`);
	},
	Utterances: function (intent, session, response) {
		response.tellWithSSML(`Utterances are commands used to invoke given intents  <break time='0.25s'/>- you should treat them as public API of your skill. <break time='0.5s'/> It's important to know that you should have many different utterances for single intent <break time='0.25s'/>- different people can have different way to ask for something.  <break time='0.5s'/> You should investigate as many variants as possible to make your application natural. That's crucial for end user experience.`);
	},
	Slots: function (intent, session, response) {
		response.tellWithSSML(`If intents are functions <break time='0.5s'/> and utterances are your Public API, <break time='0.5s'/> then Slots should be treated as variables. They are used in Utterances <break time='0.4s'/> to mark part of invocation that can vary between uses. <break time='0.5s'/> Those Slots can be accessed in code of your skills. <break time='0.5s'/>They can be already predefined by Amazon, For example numbers and months,  <break time='0.5s'/>or fully custom and powered by Deep Learning. <say-as  interpret-as="interjection">good luck</say-as>`);
	},
	Goodbye: function (intent, session, response) {
		response.tellWithSSML(`<say-as interpret-as="interjection">arrivederci</say-as>. It was a great time for me! <break time='0.5s'/>If you have any questions after presentation, Artur will answer them for sure. <break time='0.5s'/>Let us know if you wan't some more presentation covering my capabilities in future! Bye bye!`);
	}
};

MeetJSSkill.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
	log.info(`MeetJSSkill onSessionEnded requestId: ${sessionEndedRequest.requestId}, 
		sessionId: ${session.sessionId}`);
    // any cleanup logic goes here
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the MeetJSSkill skill.
    const MeetJSSkillHandler = new MeetJSSkill();
    MeetJSSkillHandler.execute(event, context);
};

