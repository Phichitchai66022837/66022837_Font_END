async function loadData (){
    const url = ' https://ghibliapi.vercel.app/films/';
    const response = await fetch(url);
    const data = await response.json();
    let userInfo = document.querySelector(".tbody");
    
    
    data.forEach(element => {
        const {image , title , description , release_date} = element;
        let newRow = 
        `
        <tr class="bold-text">
        <td><img src="${image}"></td>
        <td>${title}</td>
        <td>${description}</td>
        <td>${release_date}</td>
        </tr>
        `
        userInfo.innerHTML += newRow;

    });
}

loadData()