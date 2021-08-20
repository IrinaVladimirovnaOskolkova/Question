document.getElementById('mainTitle').innerHTML = '<p>ПМП при остановке сердца</p>';
document.getElementById('mainSubtitle').innerHTML = '<p>тест по НВП раздел медподготовка для 11 класса</p>';

let question = [
	{
		questionText: ' Признаки клинической смерти - это отсутствие...',
		trueAnswer: 1,
		answerOptions: [
			{
				answerNumb: 1, 
				answerText: ' cознания, реакции зрачков на свет, пульса на сонной артерии и дыхания;'},
			{
				answerNumb: 2, 
				answerText: ' cлуха, вкуса, наличие трупных пятен;'},
			{
				answerNumb: 3, 
				answerText: ' пульса и дыхания, окоченение конечностей.'}
		]
	},

	{
		questionText: ' Продолжительность состояния клинической смерти...',
		trueAnswer: 2,
		answerOptions: [
			{
				answerNumb: 1, 
				answerText: ' 30 минут;',},
			{
				answerNumb: 2, 
				answerText: ' 5 минут;'},
			{
				answerNumb: 3, 
				answerText: ' 10 минут.'}
		]
	},

	{
		questionText: ' При оказании реанимационной помощи необходимо:',
		trueAnswer: 1,
		answerOptions: [
			{
				answerNumb: 1, 
				answerText: ' Положить пострадавшего на спину на жесткую поверхность, произвести прекардиальный удар в области грудины, приступить к непрямому массажу сердца и искусственной вентиляции легких, вызвать "скорую помощь" или срочно доставить пострадавшего в больницу;'},
			{
				answerNumb: 2, 
				answerText: ' Положить пострадавшего на спину на мягкую поверхность, произвести прекардиальный удар в области шеи, приступить к непрямому массажу сердца и искусственной вентиляции легких, срочно доставить пострадавшего в больницу;'},
			{
				answerNumb: 3, 
				answerText: ' Произвести удар в области мечевидного отростка, приступить к прямому массажу сердца и искусственной вентиляции легких, вызвать "Скорую помощь" или срочно доставить пострадавшего в больницу.'}
		]
	},

	{
		questionText: ' Порядок действий по определению признаков клинической смерти следующий:',
		trueAnswer: 2,
		answerOptions: [
			{
				answerNumb: 1, 
				answerText: ' Определить, есть ли отечность нижних и верхних конечностей, реагируют ли зрачки на свет, произошла ли потеря речи у пострадавшего;'},
			{
				answerNumb: 2, 
				answerText: ' Убедиться в отсутствии сознания, реакции зрачков на свет, дыхания и пульса на сонной артерии;'},
			{
				answerNumb: 3, 
				answerText: ' Убедиться в полной дыхательной активности, в наличии у пострадавшего слуха, а также ушибов, травмы головы или позвоночника.'}
		]
	},

	{
		questionText: ' Что такое пульс?',
		trueAnswer: 1,
		answerOptions: [
			{
				answerNumb: 1, 
				answerText: ' Ритмическое колебание артериальной стенки, возникающие при каждом сокращении сердца;'},
			{
				answerNumb: 2, 
				answerText: ' Ритмическое колебание артериальной стенки, возникающие при вдохе;'},
			{
				answerNumb: 3, 
				answerText: ' Ритмическое колебание артериальной стенки, возникающие при выдохе.'}
		]
	},

	{
		questionText: ' Где чаще всего определяют пульс?',
		trueAnswer: 3,
		answerOptions: [
			{
				answerNumb: 1, 
				answerText: ' На запястье;'},
			{
				answerNumb: 2, 
				answerText: ' У виска;'},
			{
				answerNumb: 3, 
				answerText: ' На сонной артерии.'}
		]
	},

	{
		questionText: ' Как правильно нанести прекардиальный удар?',
		trueAnswer: 2,
		answerOptions: [
			{
				answerNumb: 1, 
				answerText: ' Ладонью в точку на грудине выше мечевидного отростка на 2 - 3 см и на 2 см влево от центра грудины; локоть руки, наносящей удар, должен быть направлен поперек тела пострадавшего; удар должен быть скользящим;'},
			{
				answerNumb: 2, 
				answerText: ' Коротко и достаточно резко ребром сжатой в кулак ладони в точку на грудине выше мечевидного отростка на 2-3 см; локоть руки, наносящий удар, должен двигаться вдоль тела пострадавшего; срaзу после удара выяснить, возобновилась ли работа сердца;'},
			{
				answerNumb: 3, 
				answerText: ' Ребром сжатой в кулак ладони в точку на грудине выше мечевидного отростка на 2-3 см влево от центра грудины; после первого нанести второй удар.'}
		]
	},	

	{
		questionText: ' Пострадавшему необходим непрямой массаж сердца. Последовательность ваших действий:',
		trueAnswer: 3,
		answerOptions: [
			{
				answerNumb: 1, 
				answerText: ' Положить пострадавшего на кровать или на диван и встать от него с левой стороны; в точку проекции сердца на грудине положить ладони, давить на грудину руками с полусогнутыми пальцами поочередно ритмично через каждые 2-3 секунды;'},
			{
				answerNumb: 2, 
				answerText: ' Положить пострадавшего на ровную твердую поверхность; встать на колени с левой стороны от пострадавшего лицом к нему, на область сердца положить разом две ладони (при этом пальцы рук должны быть разжаты); поочередно надавливать на грудину сначала правой, потом левой ладонью;'},
			{
				answerNumb: 3, 
				answerText: ' Положить пострадавшего на ровную твердую поверхность; встать на колени с левой стороны от пострадавшего лицом к нему; над его сердцем на грудине положить ладони, приподняв пальцы (большие пальцы должны быть разведены в разные стороны), давить на грудь только прямыми руками, используя вес тела; ладони не отрывать от грудины пострадавшего, каждое следующее движение производить после того, как грудная клетка вернется в исходное положение.'}
		]
	},

	{
		questionText: ' Реанимацию проводят два человека. Определите соотношение вдохов и надавливаний.',
		trueAnswer: 3,
		answerOptions: [
			{
				answerNumb: 1, 
				answerText: ' 10:3;'},
			{
				answerNumb: 2, 
				answerText: ' 15:3;'},
			{
				answerNumb: 3, 
				answerText: ' 30:2.'}
		]
	},

	{
		questionText: ' Признаки дыхания:',
		trueAnswer: 1,
		answerOptions: [
			{
				answerNumb: 1, 
				answerText: ' Равномерное поднятие грудной клетки и живота;'},
			{
				answerNumb: 2, 
				answerText: ' Розовый цвет кожи;'},
			{
				answerNumb: 3, 
				answerText: ' Наполненные воздухом лёгкие.'}
		]
	}	

];

let questionBlock = document.getElementById('questionBlock');
let code = '';

for(let i = 0; i < question.length; ++i){
	let answerOptions = question[i].answerOptions;
	
	code += '<div id="question"><p id="title"><span id="subtitle">Вопрос № ' 
						+ (i+1) + ':</span> ' + question[i].questionText + '</p>';
	    
	for(let j = 0; j < answerOptions.length; ++j)
		code += '<div id="answer"><input type="radio" name=' + i + ' id="radio" value=' + answerOptions[j].answerNumb + '>' + answerOptions[j].answerText + '</div>';
	
	code += '</div>';

	questionBlock.innerHTML = code;
}

window.onclick = examination;

function examination(){
	let radioList = document.querySelectorAll('input[type=radio]:checked');
	let btn = document.getElementById('btn');
	if(radioList.length === question.length) btn.disabled = false;
}

function show(){
	let radioList = document.querySelectorAll('input[type=radio]');
	let grade = 0;
	let result = document.getElementById('result');
	let countTrue = 0;

	for(let i = 0; i < radioList.length; ++i){
		let answer = radioList[i].value;
		let numbQuest = radioList[i].name;
		let checkState = radioList[i].checked;

		if(answer == question[numbQuest].trueAnswer){
			radioList[i].parentNode.style.color = 'green';
			if(checkState) 
				++countTrue;
		} else if(answer != question[numbQuest].trueAnswer && checkState)
				radioList[i].parentNode.style.color = 'red';
	}

	let countResult = countTrue * 100 / question.length;
	console.log(countResult)

	if(countResult <= 100 && countResult >= 90)
		grade = 5;
	else if(countResult <= 89 && countResult >= 65)
		grade = 4;
	else if(countResult <= 64 && countResult >= 55)
		grade = 3;
	else grade = 2;


	result.style.display = 'block';
	result.innerHTML = '<p>Количество правильных ответов: ' + countTrue + '.<br>Ваша оценка: ' + grade + '.</p>';
}



