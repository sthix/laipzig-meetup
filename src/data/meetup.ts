/**
 * Everything that changes between meetups lives here.
 * Replace these values when the next date is fixed.
 */

export const NEXT = {
	/** ISO date of the next meetup — drives the <time> element. */
	iso: '2026-09-24T19:00:00+02:00',
	weekday: 'Wednesday',
	day: '24',
	month: 'September',
	year: '2026',
	time: '19:00',
	short: '24 Sep',
	/** Venue is announced per meetup — see NextMeetup.astro if that changes. */
	city: 'Leipzig',
};

export const LINKS = {
	announce: '#', // mailing list / meetup.com event page
	meetup: '#',
	github: '#',
	email: 'mailto:hallo@laipzig.dev',
};

/** Ordered roughly by when the field developed each one. */
export const TOPICS = [
	{
		name: 'Machine learning',
		note: 'The established core of the field, and still where most production problems are solved.',
	},
	{
		name: 'LLMs',
		note: 'Prompting, context design, fine-tuning, and evaluating language models in practice.',
	},
	{
		name: 'Harnesses',
		note: 'The tooling and scaffolding around a model, where much of the engineering effort sits.',
	},
	{
		name: 'Agents',
		note: 'Planning loops, tool use, and the failure modes that appear in long-running tasks.',
	},
	{
		name: 'Evals',
		note: 'Measuring whether a system works, and noticing when it stops working.',
	},
	{
		name: 'New developments',
		note: 'Recent releases and research, covered as they appear.',
	},
];

export const SCHEDULE = [
	{
		time: '19:00',
		name: 'Doors open',
		note: 'Arrive, sign in, and meet the other attendees.',
	},
	{
		time: '19:30',
		name: 'Two talks',
		note: 'Twenty minutes each, on practical work by members of the group.',
	},
	{
		time: '20:15',
		name: 'Demos',
		note: 'An open slot for work in progress. Finished projects are not required.',
	},
	{
		time: '21:00',
		name: 'Informal drinks',
		note: 'Continued discussion at a venue nearby.',
	},
];
