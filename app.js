document.getElementById('btn').addEventListener('click',
showGithubUserProfile)

function showGithubUserProfile(){
    let username = document.getElementById('gusername').value

    let url = 'https://api.github.com/users/'+username
    fetch(url).then(res=>res.json())
    .then(data=>{
        console.log(data)
    }).catch(e=>{
        console.log(e)
    })
    
}