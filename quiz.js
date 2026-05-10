const questionTitle = document.getElementById('question-number');
const questionDifficulty = document.getElementById('question-difficulty');
const questionText = document.getElementById('question-text');
const progressBar = document.getElementById('progress-bar');
const answerButtons = [document.getElementById('button-0'),document.getElementById('button-1'),document.getElementById('button-2'),document.getElementById('button-3')];
const difficultyText = ['Easy &#128994;', 'Medium &#128993;', 'Advanced &#128992;', 'Expert &#128995;'];
const questionData = Object.freeze([
	{
		title: 'Olivia bought a $35 perfume. How much did it really cost?',
		answers: ['$10','$30','$35','$40'],
		correct: 1
	},
	{
		title: 'Kylie returns a $50 item. How much did she make?',
		answers: ['$0','$25','$50','$75'],
		correct: 2
	},
	{
		title: 'Audrey bought a $80 shirt and paid in cash. How much did the shirt really cost?',
		answers: ['$0','$40','$80','She made $80'],
		correct: 0
	},
	{
		title: 'A drink costs $2.99. How much money does it really cost?',
		answers: ['$0','$2','$2.99','$3'],
		correct: 0
	},
	{
		title: 'Emmy bought a $120 dress on sale for $100. How much did she spend?',
		answers: ['$20','$100','She made $20','She made $100'],
		correct: 2
	},
	{
		title: 'Charlotte returned a $30 moisturizer, and bought a $40 perfume on the same trip. How much did that perfume actually cost?',
		answers: ['$0','$10','$40','She made $30'],
		correct: 1
	},
	{
		title: 'Adrianna sees a $50 item on sale for $40, but opts not to buy it. How much money did she save?',
		answers: ['$0','$40','$50','She lost $40'],
		correct: 3
	},
	{
		title: 'Natalie preloaded $25 into her account for a store. She spends it the next day. How much did she spend?',
		answers: ['$0','$25','$50','She saved $25'],
		correct: 0
	},
	{
		title: 'Samantha buys a dress for $150. How much did the dress actually cost?',
		answers: ['$50','$75','$100','$150'],
		correct: 1
	},
	{
		title: 'Lily bought a $100 ticket to a concert four months in advance. How much did the ticket cost and why?',
		answers: ['$100, because that is the price','Free, because she bought it with credit.','Free, because she bought it months in advance so the purchase doesn\'t matter anymore','$20, because she would have spent $80 shopping otherwise.'],
		correct: 2
	},
	{
		title: 'Jariyana has a job that pays every two weeks. She takes out a $4,000 loan to pay for a luxury dress. How much did it cost?',
		answers: ['$4,000 that she will have to pay back','$0','$2,000','$4,000, but the debt doesn\'t matter because she is being paid.'],
		correct: 3
	},
	/*{
		title: 'Zoe is a transgender girl. She spends $1,720 on makeup to make her feel more feminine and reduce dysphoria. How much was the makeup?',
		answers: ['$0 as femininity is priceless','$0 because she used credit.','$960','$1,720'],
		correct: 0
	},*/
	{
		title: 'Izzy buys a concert ticket for $200. The artist plays 20 songs. How much was the ticket?',
		answers: ['$0','$10','$20','$200'],
		correct: 1
	},
	{
		title: 'Katelyn has $40 worth of items in her cart. She adds a $20 item to qualify for free shipping, avoiding an $8 shipping fee. How much did she spend?',
		answers: ['$60','$52','She saved $8','She saved $20'],
		correct: 2
	},
	{
		title: 'Julie buys a skirt for $40. She wears it 20 times. How much was the skirt?',
		answers: ['$0','$2','$4','$40'],
		correct: 0
	},
	{
		title: 'Skyler is a transgender girl and paid $20,000 for bottom surgery. $5,000 of it was paid with credit. How much did the surgery cost?',
		answers: ['$20,000','$0','$15,000','She made $5,000'],
		correct: 3
	},
]);

let question = 0, score = 0, questionCount=questionData.length;

function updateQuestions(){
	if(question<questionCount){
		questionTitle.innerHTML = 'Question '+(question+1)+'/'+questionCount;
		questionDifficulty.innerHTML = 'Level: '+difficultyText[getDifficulty(question)];
		questionText.innerHTML=questionData[question].title;
		for(let i=0;i<4;i++){
			answerButtons[i].innerHTML=questionData[question].answers[i];
		}
		let progressWidth = Math.max(question/questionCount*100,0.5);
		progressBar.style.width=progressWidth+'%';
	}
	else {
		document.getElementById('question-container').style.display='none';
		document.getElementById('complete-container').style.display='block';
		document.getElementById('score-text').innerHTML='Score: '+score+'/'+questionCount;
		document.getElementById('progress-bar-container').style.opacity='0';
		progressBar.style.width='100%';
	}
}
function startQuiz(){
	document.getElementById('intro-container').style.display='none';
	document.getElementById('question-container').style.display='block';
	document.getElementById('progress-bar-container').style.display='block';
	updateQuestions();
}
function selectAnswer(answer){
	if(answer==questionData[question].correct){
		score++;
	}
	question++;
	updateQuestions();
}
function getDifficulty(question){
	return ((question+1)/5)|0;
}
