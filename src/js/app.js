const jobList = document.querySelector('[data-job-list]');
const filterList = document.querySelector('[data-filter-list]');
const clearBtn = document.querySelector('[data-clear-btn]');

const fetchData = async function() {
  const data = await fetch('data.json');
  const response = await data.json();
  response.forEach(function(job) {
    Card(job)
  })
}

fetchData()
const Card = function(job) {
  const card = document.createElement("li");
  const { id, company, logo, position, postedAt, contract, location, new: New, featured, role, level, languages, tools } = job;
  card.id = id;
  if(New && featured) {
    const stylesArray = ["bg-white", "p-6", "relative", "rounded-md", "shadow-lg", "shadow-Dark-Grayish-Cyan/20", "border-0", "border", "border-s-[6px]", "border-primary", "pt-10"];
    card.classList.add(...stylesArray);
    card.innerHTML = `
    <img src="${logo}" class="absolute w-14 h-14 left-6 -top-7" alt="${company}">
    <div class="flex  items-center gap-2">
      <span class="text-primary font-bold me-4" >${company}</span>
      <span class="text-surface bg-primary font-semibold rounded-2xl h-8 px-3 grid place-items-center">NEW!</span>
      <span class="text-surface bg-Very-Dark-Grayish-Cyan font-semibold rounded-2xl h-8 px-3 grid place-items-center">FEATURED</span>
    </div>
    <h4 class="text-Very-Dark-Grayish-Cyan font-bold mt-3" >${position}</h4>
    <div class="mt-3 font-medium flex items-center gap-4 mb-4 pb-4 border-b-2">
      <span class="text-Dark-Grayish-Cyan">${postedAt}</span>
      <span class="text-Dark-Grayish-Cyan">${contract}</span>
      <span class="text-Dark-Grayish-Cyan">${location}</span>
    </div>
    <div class="font-bold flex items-center gap-3 flex-wrap" data-languages-list>
      <button class="text-primary h-9 bg-primary/10 px-3 grid place-items-center rounded-md" data-filter>${role}</button>
      <button class="text-primary h-9 bg-primary/10 px-3 grid place-items-center rounded-md" data-filter>${level}</button>
    </div>
  `
  }
  else if(New && featured === false) {
    const stylesArray = ["bg-white", "p-6", "relative", "rounded-md", "shadow-lg", "shadow-Dark-Grayish-Cyan/20", "pt-10"];
    card.classList.add(...stylesArray);
    card.innerHTML = `
    <img src="${logo}" class="absolute w-14 h-14 left-6 -top-7" alt="${company}">
    <div class="flex  items-center gap-2">
      <span class="text-primary font-bold me-4" >${company}</span>
      <span class="text-surface bg-primary font-semibold rounded-2xl h-8 px-3 grid place-items-center">NEW!</span>
    </div>
    <h4 class="text-Very-Dark-Grayish-Cyan font-bold mt-3" >${position}</h4>
    <div class="mt-3 font-medium flex items-center gap-4 mb-4 pb-4 border-b-2">
      <span class="text-Dark-Grayish-Cyan">${postedAt}</span>
      <span class="text-Dark-Grayish-Cyan">${contract}</span>
      <span class="text-Dark-Grayish-Cyan">${location}</span>
    </div>
    <div class="font-bold flex items-center gap-3 flex-wrap" data-languages-list>
      <button class="text-primary h-9 bg-primary/10 px-3 grid place-items-center rounded-md" data-filter>${role}</button>
      <button class="text-primary h-9 bg-primary/10 px-3 grid place-items-center rounded-md" data-filter>${level}</button>
    </div>
  `
  }
  else {
    const stylesArray = ["bg-white", "p-6", "relative", "rounded-md", "shadow-lg", "shadow-Dark-Grayish-Cyan/20", "pt-10"];
    card.classList.add(...stylesArray);
    card.innerHTML = `
    <img src="${logo}" class="absolute w-14 h-14 left-6 -top-7" alt="${company}">
    <div class="flex  items-center gap-2">
      <span class="text-primary font-bold me-4" >${company}</span>
    </div>
    <h4 class="text-Very-Dark-Grayish-Cyan font-bold mt-3" >${position}</h4>
    <div class="mt-3 font-medium flex items-center gap-4 mb-4 pb-4 border-b-2">
      <span class="text-Dark-Grayish-Cyan">${postedAt}</span>
      <span class="text-Dark-Grayish-Cyan">${contract}</span>
      <span class="text-Dark-Grayish-Cyan">${location}</span>
    </div>
    <div class="font-bold flex items-center gap-3 flex-wrap" data-languages-list>
      <button class="text-primary h-9 bg-primary/10 px-3 grid place-items-center rounded-md" data-filter>${role}</button>
      <button class="text-primary h-9 bg-primary/10 px-3 grid place-items-center rounded-md" data-filter>${level}</button>
    </div>
  `
  }
  const languagesList = card.querySelector('[data-languages-list]');
  if(languages.length || tools.length) {
    for(let language of languages) {
      let button = document.createElement('button');
      button.setAttribute('data-filter', '')
      const buttonStyles = ["text-primary", "h-9", "bg-primary/10", "px-3", "grid", "place-items-center", "rounded-md"];
      button.classList.add(...buttonStyles);
      button.textContent = language;
      languagesList.appendChild(button)
    }
    for(let tool of tools) {
      let button = document.createElement('button');
      button.setAttribute('data-filter', '')
      const buttonStyles = ["text-primary", "h-9", "bg-primary/10", "px-3", "grid", "place-items-center", "rounded-md"];
      button.classList.add(...buttonStyles);
      button.textContent = tool;
      languagesList.appendChild(button)
    }
  }
  const filterListItems = card.querySelectorAll('[data-filter]');
  filterListItems.forEach(function(item) {
    item.addEventListener('click', function() {
      addFilterItem(this.textContent);
      filterJobs(this.textContent);
    })
  })
jobList.appendChild(card);
}

const addFilterItem = function(item) {
  let li = document.createElement('li');
  li.classList.add('rounded-md', 'flex', 'items-center', 'overflow-hidden');
  li.innerHTML = `
      <span class="text-primary bg-primary/10 px-3 grid place-items-center font-bold h-full">${item}</span>
      <button class="bg-primary p-3" data-remove-btn>
        <img src="images/icon-remove.svg" alt="remove">
      </button>
  `
  const removeBtn = li.querySelector('[data-remove-btn]');
  removeBtn.addEventListener('click', function() {
    let itemToRemove = this.previousElementSibling.textContent;
    filters = filters.filter(item => item !== itemToRemove);
    this.parentElement.remove();
    filterJobs(filters);
    if(filterList.children.length == 0) {
      filterList.parentElement.classList.add('opacity-0', 'scale-0');
    }
  });
  filterList.parentElement.classList.remove('scale-0', 'opacity-0')
  filterList.appendChild(li);
}



clearBtn.addEventListener('click', function() {
  this.previousElementSibling.innerHTML = '';
  this.parentElement.classList.add('opacity-0', 'scale-0');
  jobList.innerHTML = '';
  fetchData()
})



let filters = [];
const filterJobs = async function(filter) {
  const data = await fetch('data.json');
  const response = await data.json();
  jobList.innerHTML = '';
  if (Array.isArray(filter)) {
    filters = filter
  }
  else {
    filters.push(filter);
  }
  let filteredJobs = response.filter(function(item) {
    return filters.every(filter => {
      return item.languages.includes(filter) || 
            item.tools.includes(filter) || 
            item.level === filter || 
            item.role === filter;
    });
  })
  filteredJobs.forEach(ele => {
    Card(ele)
  })
}