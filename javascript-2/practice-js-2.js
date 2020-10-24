/*
    For this section of the skills check you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
var gitDefinition = "Git is a version control software that allows you to track changes, access past versions (commits) on any given branch, or even to create new branches of your code. Git can also track additional information such as commit messages, timestamps, and tags."
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is a company who has designed a user friendly interface for you to remotely store your git repositories. It should be noted that most of the features offered on GitHub are available through terminal as well. The key difference is any changes made through terminal are effecting the local repository, any changes made through GitHub are effecting the remote repository."
//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (What you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init  = {
    description: "Initializes a git repository of your current directory.",
    code: "git init"
}

//CODE HERE

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone  = {
    description: "Clones an existing git repository to your local machine (ex. when you want to take a remote repository off of GitHub and place it on your computer).",
    code: "git clone"
}
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status  = {
    description: "Shows what new files/folders have been created along with any files that have been modified.",
    code: "git status"
}
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add  = {
    description: "Stages any changes made, so that the next time git commit is run, it will commit those changes.",
    code: "git add ."
}
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit  = {
    description: "Takes all the staged changes and commits them (save them) with a particular commit message. This is where you are essentially creating you version history.",
    code: "git commit -m"
}
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
let addRemote  = {
    description: "Connect an initialized git repository on your local machine to a remote repository (most popular example being GitHub).",
    code: "git remote add origin"
}
//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push  = {
    description: "Pushes your local repository and any commits to the remote location.",
    code: "git push"
}