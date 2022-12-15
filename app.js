document.getElementById('btn').addEventListener('click',
showGithubUserProfile)

function showGithubUserProfile(){
    let username = document.getElementById('gusername').value

    let url = 'https://api.github.com/users/'+username
    fetch(url).then(res=>res.json())
    .then(data=>{
        if(data.message){
            console.log('User Profile Not Found')
        }else{
            console.log(data)
        } 
        
    }).catch(e=>{
        console.log(e)
    })
    
}