const block = document.getElementById('MenuDropDiv')
const DropButton = document.getElementById('DropDownButton')

// Menu Web Scroll

function webOptsScroll(){
    //Opção Sobre a Rocky
    document.getElementById('AboutRockyOpt').addEventListener('click', function(e){e.preventDefault();window.scroll(0,1080)})

    //Opção Serviços
    document.getElementById('ServicesOpt').addEventListener('click', function(e){e.preventDefault(); window.scroll(0,2150)}) 

    //Opção Diferenciais
    document.getElementById('differentialsOpt').addEventListener('click', function(e){e.preventDefault();window.scroll(0,3200)})

    //Opção Contato 
    document.getElementById('ContaticOpt').addEventListener('click', function(e){e.preventDefault();window.scroll(0,4300)})

webOptsScroll()



//Função Menu Moblile
function DropMenu(){
    DropButton.style.display = 'none'   

    //Menu
    var menu = document.createElement('ul')
    menu.id = 'DropMenu'

    //Botão Home
    var HOME = document.createElement('li')
    HOME.addEventListener('click', function(e){e.preventDefault();window.scroll(0,0)})
    HOME.id = 'HOMEopt'
    HOME.appendChild(document.createTextNode('HOME'))

    //Botão Sobre
    var SOBRE = document.createElement("li")    
    SOBRE.addEventListener('click', function(e){
        window.scroll(0,812)})
    SOBRE.appendChild(document.createTextNode('SOBRE'))

    //Botão Serviços
    var SERVIÇOS = document.createElement('li')
    var SerTxt = document.createTextNode('SERVIÇOS')
    var SERVIMenu = document.createElement('img')
    SERVIMenu.id ='ServiIcon'
    SERVIMenu.src = 'icon/pngwing.com.png'
    SERVIMenu.addEventListener('click', function(e){
        if (document.getElementById('DropMenuDife')){document.getElementById('DropMenuDife').remove()
        document.getElementById('DifeIcon').style.display = 'grid'
        document.getElementById('UpIconDife').remove()}

        document.getElementById('DropMenu').style.height = '480px'
        SERVIMenu.style.display = 'none'
        var backMenu = document.createElement("img")
        backMenu.src = 'icon/inverti.png'
        backMenu.id = 'UpIconServi'

        var MenuUl = document.createElement('ul')
        MenuUl.id = 'DropMenuServi'
        
        var ServiOpt1 = document.createElement('li')
        ServiOpt1.appendChild(document.createTextNode('LOREM IPSUM'))
        ServiOpt1.id = 'ServiOpt'

        var ServiOpt2 = document.createElement('li')
        ServiOpt2.appendChild(document.createTextNode('LOREM IPSUM'))
        ServiOpt2.id = 'ServiOpt'
        var ServiOpt3 = document.createElement('li')
        ServiOpt3.appendChild(document.createTextNode('LOREM IPSUM'))
        ServiOpt3.id = 'ServiOpt'
        var ServiOpt4 = document.createElement('li')
        ServiOpt4.appendChild(document.createTextNode('LOREM IPSUM'))
        ServiOpt4.id = 'ServiOpt'
        var ServiOpt5 = document.createElement('li')
        ServiOpt5.appendChild(document.createTextNode('LOREM IPSUM'))
        ServiOpt5.id = 'ServiOpt'
        
        MenuUl.append(ServiOpt1,ServiOpt2,ServiOpt3,ServiOpt4,ServiOpt5)
        SERVIÇOS.append(MenuUl,backMenu)
        
        backMenu.addEventListener('click', function(e){
            e.preventDefault()
            MenuUl.remove()
            document.getElementById('DropMenu').style.height = '350px'
            SERVIMenu.style.display = 'grid'
            backMenu.remove()})})
    SerTxt.addEventListener('click', function(e){e.preventDefault();window.scroll(0,1300)})
    SERVIÇOS.append(SERVIMenu,SerTxt)


    //Botão Diferenciais
    var DIFERENCIAIS = document.createElement('li')
    var DIFERENCIAISTxt = document.createTextNode('DIFERENCIAIS')
    var DIFERENCIAISIcon = document.createElement('img')
    DIFERENCIAISIcon.id = 'DifeIcon'
    DIFERENCIAISIcon.src = 'icon/pngwing.com.png'
    DIFERENCIAISIcon.addEventListener('click', function(e){
        if (document.getElementById('DropMenuServi')){
        document.getElementById('DropMenuServi').remove();
        document.getElementById('ServiIcon').style.display = 'grid'
        document.getElementById('UpIconServi').remove();}
    
        document.getElementById('DropMenu').style.height = '480px'

        DIFERENCIAISIcon.style.display = 'none'
        var backMenu = document.createElement("img")
        backMenu.src = 'icon/inverti.png'
        backMenu.id = 'UpIconDife'

        MeUl = document.createElement('ul')
        MeUl.id = 'DropMenuDife'

        var Dife1 = document.createElement("li")
        Dife1.appendChild(document.createTextNode('LOREM IPSUM'))
        var Dife2 = document.createElement("li")
        Dife2.appendChild(document.createTextNode('LOREM IPSUM'))
        var Dife3 = document.createElement("li")
        Dife3.appendChild(document.createTextNode('LOREM IPSUM'))
        var Dife4 = document.createElement("li")
        Dife4.appendChild(document.createTextNode('LOREM IPSUM'))
        var Dife5 = document.createElement("li")
        Dife5.appendChild(document.createTextNode('LOREM IPSUM'))
        MeUl.append(Dife1,Dife2,Dife3,Dife4,Dife5)
        DIFERENCIAIS.append(MeUl,backMenu)
        
        backMenu.addEventListener('click', function(e){
            e.preventDefault()
            MeUl.remove()
            document.getElementById('DropMenu').style.height = '350px'
            DIFERENCIAISIcon.style.display = 'grid'
            backMenu.remove()})})
    DIFERENCIAISTxt.addEventListener('click', function(e){e.preventDefault(); window.scroll(0,1800)})
    DIFERENCIAIS.id = 'DifeMenu'
    DIFERENCIAIS.append(DIFERENCIAISTxt,DIFERENCIAISIcon)

    //Botão Trabalho
    var TRABALHO = document.createElement("li")
    TRABALHO.appendChild(document.createTextNode('TRABALHE CONOSCO'))


    //Botão Contato
    var CONT = document.createElement('li')
    CONT.appendChild(document.createTextNode('CONTATO'))
    CONT.addEventListener('click', function(e){e.preventDefault();window.scroll(0,3400)})

    //Botão sair do menu//
    var exit = document.createElement('img')
    exit.src = 'icon/ext.png'; exit.id = 'ExitDropMenu'

    exit.addEventListener("click", function(e){
        e.preventDefault()
        menu.remove()
        DropButton.style.display = 'block' })

    

    menu.append(exit,HOME,SOBRE,SERVIÇOS,DIFERENCIAIS,TRABALHO, CONT)
    block.append(menu)

}

//DropMenu Mobile
DropButton.addEventListener('click', function (e){e.preventDefault();DropMenu();})