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

/** Ordered roughly by when the field invented each one. The stagger is the point. */
export const TOPICS = [
	{
		name: 'Machine learning',
		note: 'The older, sturdier half of the field. Still where most problems actually get solved.',
	},
	{
		name: 'LLMs',
		note: 'Prompting, context, fine-tuning, and the parts nobody agrees on yet.',
	},
	{
		name: 'Harnesses',
		note: 'The scaffolding around the model. Usually where the real engineering is.',
	},
	{
		name: 'Agents',
		note: 'Planning loops, tool use, and the long tail of things that go wrong at step nine.',
	},
	{
		name: 'Evals',
		note: 'How you know it works. Or that it quietly stopped working last Tuesday.',
	},
	{
		name: "Whatever's new",
		note: "Half of every night is something that didn't exist at the last one.",
	},
];

export const SCHEDULE = [
	{
		time: '19:00',
		name: 'Doors',
		note: 'Come early. There is usually someone already arguing.',
	},
	{
		time: '19:30',
		name: 'Two talks',
		note: 'Twenty minutes each. Slides optional, opinions encouraged.',
	},
	{
		time: '20:15',
		name: 'Demo slot',
		note: 'Anything half-working. Especially if it is half-working.',
	},
	{
		time: '21:00',
		name: 'The pub',
		note: 'Where the actual information gets exchanged.',
	},
];
