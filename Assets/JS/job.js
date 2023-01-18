document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});


function getJobsApi() {

var searchResult = $("#city-name").val()    

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c400d6ed29msh7a299688303bb82p1b23f8jsn813f909c3197',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};

fetch('https://jsearch.p.rapidapi.com/search?query=' + searchResult + '&num_pages=2', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        anotherFunction(response)  
    })
    .catch(err => console.error(err));


      

}

function anotherFunction(data) {
    console.log(data)

for (let index = 0; index < data.data.length; index++) {

        var aTagHref = data.data[index].job_apply_link
  
	      var listBodyEl = $("#list-body" + [index])
	      var enuMeration = document.createElement("th")
	      var jobTitle = document.createElement("td")
        var jobLocale = document.createElement("td")
        var jobType = document.createElement("td")
        
        var jobLinkEl = document.createElement("a")
          jobLinkEl.setAttribute('href' , aTagHref)


        var jobLink = document.createElement("td")
        
	
	      enuMeration.textContent = index + 1
	      jobTitle.textContent = data.data[index].job_title
        jobLocale.textContent = data.data[index].job_city
        jobType.textContent = data.data[index].job_employment_type
        jobLinkEl.textContent = data.data[index].job_apply_link
	    
        listBodyEl.append(enuMeration)
	      listBodyEl.append(jobTitle)
        listBodyEl.append(jobLocale)
        listBodyEl.append(jobType)

        listBodyEl.append(jobLink)
        jobLink.append(jobLinkEl)

        // localStorage.setItem(index, index+1)
        // localStorage.setItem(index, data.data[index].job_title)
        // localStorage.setItem(index, data.data[index].job_city)
        // localStorage.setItem(index, data.data[index].job_employment_type)
        // localStorage.setItem(index, data.data[index].job_apply_link)
        

}
    


}

$("#modal-button").on("click" , getJobsApi)



