const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => dispyLesson(json.data));
};

const removeActive = () => {
  const lessonClickBtn = document.querySelectorAll(".lesson-btn");
  lessonClickBtn.forEach((btn) => btn.classList.remove("active"));
};
const wordConten = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`unicq-btn-${id}`);
      clickBtn.classList.add("active");
      displyWord(data.data);
    });
};

const displyWord = (words) => {
  const wordContenar = document.getElementById("word-contenar");
  wordContenar.innerHTML = "";
  if (words.length == 0) {
    wordContenar.innerHTML = `<div
        class="text-center col-span-full bg-sky-100 rounded-xl py-10 space-y-6 text-3xl"
      >
        <img   class="mx-auto" src="./assets/alert-error.png" alt="">

        <p>
  <span class="text-red-500">এই</span>
  <span class="text-orange-500"> </span>
  <span class="text-yellow-500">Lesson</span>
  <span class="text-green-500"> </span>
  <span class="text-blue-500">এ</span>
  <span class="text-indigo-500"> </span>
  <span class="text-purple-500">এখনো</span>
  <span class="text-pink-500"> </span>
  <span class="text-red-500">কোন</span>
  <span class="text-orange-500"> </span>
  <span class="text-yellow-500">Vocabulary</span>
  <span class="text-green-500"> </span>
  <span class="text-blue-500">যুক্ত</span>
  <span class="text-indigo-500"> </span>
  <span class="text-purple-500">করা</span>
  <span class="text-pink-500"> </span>
  <span class="text-red-500">হয়নি। 😓</span>
</p>

        <br />
        <h2>
          <span class="text-red-500">নেক্সট</span>
  <span class="text-green-500"> </span>
  <span class="text-blue-500">Lesson</span>
  <span class="text-yellow-500"> </span>
  <span class="text-pink-500">এ</span>
  <span class="text-indigo-500"> </span>
  <span class="text-purple-500">যান 😊</span>
      </div>`;
    return;
  }
  words.forEach((word) => {
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `
    <div
        class="bg-white rounded-xl shadow-sm text-center py-10 px-3 space-y-4"
      >
        <h2 class="font-bold text-2xl">${
          word.word ? word.word : "শব্দ কিছু পাওয়া যায় নি 😓"
        }</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
        <div class="font-semibold text-2xl font-bangla">"${
          word.meaning ? word.meaning : "অর্থ পাওয়া যায় নি 😓 "
        } ${
      word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায় নি 😓"
    } "</div>
        <div  class="flex justify-between text-center">
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
              <button     id="unicq-btn-${lesson.level_no}" onclick="wordConten(${lesson.level_no})" class="btn btn-outline btn-primary   lesson-btn ">
                <i class="fa-solid fa-book-open"></i>
                lesson - ${lesson.level_no}
               </button>`;
    levelcontinear.append(btnDiv);
  }
};
loadLessons();
