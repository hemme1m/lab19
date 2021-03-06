module.exports = function() {

	var randomArray = [
		"There is only one Lord of the Ring, only one who can bend it to his will. And he does not share power.",
		"That there's some good in this world, Mr. Frodo... and it's worth fighting for.",
		"Even the smallest person can change the course of the future.",
		"The time of the Elves... is over. Do we leave Middle-Earth to its fate? Do we let them stand alone?",
		"We swears, to serve the master of the Precious. We will swear on... on... the Precious!",
		"I am Gandalf the White. And I come back to you now... at the turn of the tide.",
		"Oh, it's quite simple. If you are a friend, you speak the password, and the doors will open.",
		"Well, what can I tell you? Life in the wide world goes on much as it has this past Age, full of its own comings and goings, scarecely aware of the existence of Hobbits, for which I am very thankful.",
		"For the time will soon come when Hobbits will shape the fortunes of all.",
		"There is no curse in Elvish, Entish, or the tongues of Men for this treachery.",
		"I would rather share one lifetime with you than face all the Ages of this world alone.",
		"A day may come when the courage of men fails... but it is not THIS day.",
		"The Ring has awoken, it has heard its masters call.",
		"Your time will come. You will face the same Evil, and you will defeat it.",
		"The board is set, the pieces are moving. We come to it at last, the great battle of our time.",
		"But the fat Hobbit, he knows. Eyes always watching.",
		"Mordor. The one place in Middle-Earth we don't want to see any closer. And it's the one place we're trying to get to. It's just where we can't get. Let's face it, Mr. Frodo, we're lost.",
		"I thought up an ending for my book. 'And he lives happily ever after, till the end of his days.'",
		"You are the luckiest, the canniest, and the most reckless man I ever knew. Bless you, laddie.",
		"I'm glad to be with you, Samwise Gamgee... here at the end of all things."
	];

	var randomPhrase = randomArray[Math.floor(Math.random() * randomArray.length)];
	return randomPhrase;
}