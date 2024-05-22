
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => displaydata(data));

}

function displaydata(data){

  const divpost = document.getElementById('user_list');
  for( const post of data){
    //console.log(user.name)
    
    const div = document.createElement('div');
    div.innerHTML = `
    <h1> user- ${post.userId} </h1> 
    post : ${post.title}
    `;
    divpost.appendChild(div);

  }
  
}