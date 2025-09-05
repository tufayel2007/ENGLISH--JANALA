const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => dispyLesson(json.data));
};
const wordConten = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displyWord(data.data));
};

// {
//     "id": 4,
//     "level": 5,
//     "word": "Diligent",
//     "meaning": "পরিশ্রমী",
//     "pronunciation": "ডিলিজেন্ট"
//   },

const displyWord = (words) => {
  const wordContenar = document.getElementById("word-contenar");
  wordContenar.innerHTML = "";
  words.forEach((word) => {
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `
    <div
        class="bg-white rounded-xl shadow-sm text-center py-10 px-3 space-y-4"
      >
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
        <div class="font-semibold text-2xl font-bangla">"${word.meaning} ${word.pronunciation} "</div>
        <div class="flex justify-between text-center">
          <button class="btn bg-sky-50 hover:bg-sky-400">
            <i class="fa-solid fa-circle-info"></i>
          </button>
          <button class="btn bg-sky-50 hover:bg-sky-400">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>`;
    wordContenar.append(card);
  });
};
const dispyLesson = (lessons) => {
  const levelcontinear = document.getElementById("level-continear");
  levelcontinear.innerHTML = "";
  for (let lesson of lessons) {
    console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
              <button onclick="wordConten(${lesson.level_no})" class="btn btn-outline btn-primary">
                <i class="fa-solid fa-book-open"></i>
                lesson - ${lesson.level_no}
               </button>`;
    levelcontinear.append(btnDiv);
  }
};
loadLessons();
