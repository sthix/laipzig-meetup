/**
 * Everything that changes between meetups lives here.
 *
 * Nothing is scheduled yet, so this carries no date. When the first one is
 * fixed, add these fields back and NextMeetup.astro can fill the slot that
 * currently reads "to be announced":
 *
 *   iso      ISO 8601 start — restores the <time datetime> element
 *   day      the numeral, set at display size
 *   month    the month name beneath it
 *   weekday  }
 *   time     }  the micro line above the body copy, alongside city
 *   year     }
 *   short    a badge on the Hero and SiteNav pills — the span and its
 *            .btn-date style came out with the date and need restoring too
 */

export const NEXT = {
	/** Venue is announced per meetup — see NextMeetup.astro if that changes. */
	city: 'Leipzig',
};

export const LINKS = {
	announce: '#', // mailing list / announcement page
	github: '#',
	email: 'mailto:laipzig@pm.me',
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

/**
 * The order of an evening, not its clock. No start time is fixed yet, so
 * these carry no times — Evening.astro numbers them from their position, and
 * the order here is the order shown.
 */
export const SCHEDULE = [
	{
		name: 'Doors open',
		note: 'Arrive, sign in, and meet the other attendees.',
	},
	{
		name: 'Two talks',
		note: 'Twenty minutes each, on practical work by members of the group.',
	},
	{
		name: 'Demos',
		note: 'An open slot for work in progress. Finished projects are not required.',
	},
	{
		name: 'Informal drinks',
		note: 'Continued discussion at a venue nearby.',
	},
];
