const criarDiv = (text) => {
    const containerGeral = document.getElementById('containerGeral')
    const newDiv = document.createElement('div')
    newDiv.classList = 'todo'
    newDiv.id = text
    containerGeral.appendChild(newDiv)

    const newH5 = document.createElement('h5')
    newH5.innerText = text
    newDiv.appendChild(newH5)

    const buttonFinish = document.createElement('button')
    buttonFinish.classList = 'finish-todo'
    newDiv.appendChild(buttonFinish)

    const ibuttonFinish = document.createElement('i')
    ibuttonFinish.classList = 'fa-solid fa-check'
    buttonFinish.appendChild(ibuttonFinish)

    const buttonEdit = document.createElement('button')
    buttonEdit.classList = 'edit-todo'
    newDiv.appendChild(buttonEdit)

    const ibuttonEdit = document.createElement('i')
    ibuttonEdit.classList = 'fa-solid fa-pen'
    buttonEdit.appendChild(ibuttonEdit)

    const bottonRemove = document.createElement('button')
    bottonRemove.classList = 'remove-todo'
    newDiv.appendChild(bottonRemove)

    const ibuttonRemove = document.createElement('i')
    ibuttonRemove.classList = 'fa-solid fa-xmark'
    bottonRemove.appendChild(ibuttonRemove)
}


document.getElementById('adicionarTarefa').addEventListener('click', function (ev) {
    ev.preventDefault()
    const tarefa = document.getElementById('tarefaAdicionada').value  
    
    if (tarefa == "") {
        alert("Favor inserir alguma tarefa")
    } else {
        criarDiv(tarefa)
        cleanInput()        

    }

})

const cleanInput = () => {
    tarefa = document.getElementById('tarefaAdicionada').value = ""
    tarefa = document.getElementById('tarefaAdicionada').focus()
} 


document.addEventListener('click', (e) => {

    const targetEl = e.target
    const parentEl = targetEl.closest('div')

    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("todoAlterado")
    }
})







