function score() {
  var q1 = document.forms.form.q1.value;
  var q2 = document.forms.form.q2.value;
  var q3 = document.forms.form.q3.value;
  var q4 = document.forms.form.q4.value;
  var q5 = document.forms.form.q5.value;
  var q6 = document.forms.form.q6.value;
  var q7 = document.forms.form.q7.value;
  var q8 = document.forms.form.q8.value;
  var q9 = document.forms.form.q9.value;
  var q10 = document.forms.form.q10.value;
  var q11 = document.forms.form.q11.value;
  var q12 = document.forms.form.q12.value;
  var q13 = document.forms.form.q13.value;
  var q14 = document.forms.form.q14.value;
  var q15 = document.forms.form.q15.value;

  var questions = [
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    q8,
    q9,
    q10,
    q11,
    q12,
    q13,
    q14,
    q15,
    q16,
    q17,
    q18,
    q19,
    q20,
    q21,
    q22,
    q23,
    q24,
    q25
  ];//ultima no lleva coma

  var answers = [
    "e", //1
    "d", //2
    "a", //3
    "b", //4
    "d", //5
    "c", //6
    "c", //7
    "d", //8
    "a", //9
    "b", //10
    "a", //11
    "b", //12
    "e", //13
    "d", //14
    "d", //15
    "c", //16
    "c", //17
    "b", //18
    "b", //19
    "a", //20
    "c", //21
    "b", //22
    "c", //23
    "d", //24
    "b", //25
    "d", //26
    "d", //27
    "f", //28
    "c", //29
    "b", //30
    "b", //31
    "a", //32
    "f", //33
    "c"  //34
  ];//ultima no lleva coma

  var points = 0;
  var total = 34;

  for (var i = 0; i < total; i++) {
    if (questions[i] === answers[i]) {
      points = points + 1;
    }
  }

  var q = document.getElementById("rada");

  q.innerHTML = "Obtuviste " + points + " puntos de " + total;

  return false;
}
