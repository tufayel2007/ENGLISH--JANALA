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
const loadWordDetail = async (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  console.log("Fetching:", url);

  try {
    const res = await fetch(url);
    const data = await res.json();
    displyWordDetailes(data.data);
  } catch (error) {
    console.error("Error fetching word detail:", error);
  }
};

const displyWordDetailes = (word) => {
  const DetailesBox = document.getElementById("detailes-contenaer");

  DetailesBox.innerHTML = `<div id="detailes-contenaer">
        <div class="bg-white rounded-xl shadow-md w-80 p-6">
          <h3 class="text-2xl font-bold mb-4">
            <span class="text-orange-500">W</span>
            <span class="text-pink-500">O</span>
            <span class="text-yellow-500">R</span>
            <span class="text-green-500">D</span>
            <span class="text-blue-500">&nbsp;</span>
            <span class="text-red-500">D</span>
            <span class="text-purple-500">E</span>
            <span class="text-teal-500">T</span>
            <span class="text-indigo-500">A</span>
            <span class="text-fuchsia-500">I</span>
            <span class="text-rose-500">L</span>
            <span class="text-emerald-500">S</span>
          </h3>
          <h2 class="text-3xl font-bold text-gray-900 mb-2">
          ${word.word}
            <span class="text-gray-900 text-base"
              >(<i class="fa-solid fa-microphone-lines"></i>: ${word.pronunciation})</span
            >
          </h2>

          <div class="mb-4">
            <p class="font-semibold text-gray-700">Meaning:</p>
            <p class="text-gray-800">${word.meaning}</p>
          </div>

          <div class="mb-4">
            <p class="font-semibold text-gray-700">Example:</p>
            <p class="text-gray-800">
              ${word.sentence}
            </p>
          </div>

          <div class="mb-4">
            <p class="font-semibold text-gray-700">সমার্থক শব্দগুলো:</p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span
                class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >Enthusiastic</span
              >
              <span
                class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >Excited</span
              >
              <span
                class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >Keen</span
              >
            </div>
          </div>

          <button
            class="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold"
          >
            Complete Learning
          </button>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>  `;
  document.getElementById("my_modal_5").showModal();
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
          <button  onclick="loadWordDetail(${
            word.id
          })" class="btn bg-sky-50 hover:bg-sky-400">
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
